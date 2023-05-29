import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyTrack } from '@data/tracks/builders';
import { getSpotifyAudiofeatures } from '@spotify/audiofeatures/api';
import { getSpotifyTrack } from '@spotify/tracks/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackId = getIdFromRoute(request.nextUrl.pathname);
        const audioFeatures = request.nextUrl.searchParams.get('audioFeatures');
        const getTrack = getSpotifyTrack(trackId, accessToken);
        let trackFallback;

        if (audioFeatures) {
            const getAudioFeatures = getSpotifyAudiofeatures(
                trackId,
                accessToken
            );
            const [track, audioFeatures] = await Promise.allSettled([
                getTrack,
                getAudioFeatures,
            ]);

            if (track.status === 'rejected') {
                return errorResponse(track.reason, request);
            }
            trackFallback = track.value;

            if (audioFeatures.status === 'fulfilled') {
                return NextResponse.json(
                    buildSpotifyTrack(track.value, audioFeatures.value)
                );
            }

            console.warn(`Failed fetching audio features for track ${trackId}`);
        }

        const track = buildSpotifyTrack(trackFallback ?? (await getTrack));
        return NextResponse.json(track);
    } catch (error) {
        return errorResponse(error, request);
    }
}
