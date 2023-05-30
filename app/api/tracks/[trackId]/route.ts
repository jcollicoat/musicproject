import { NextRequest, NextResponse } from 'next/server';
import {
    errorResponse,
    getIdFromRoute,
    handleRequestWithOptional,
} from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyTrack } from '@data/tracks/builders';
import { getSpotifyAudiofeatures } from '@spotify/audiofeatures/api';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures/types';
import { getSpotifyTrack } from '@spotify/tracks/api';
import { SpotifyTrack } from '@spotify/tracks/types';

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
            const [track, audioFeatures] = await handleRequestWithOptional<
                SpotifyTrack,
                SpotifyAudioFeatures
            >(getTrack, getAudioFeatures);
            trackFallback = track;

            if (audioFeatures) {
                return NextResponse.json(
                    buildSpotifyTrack(track, audioFeatures)
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
