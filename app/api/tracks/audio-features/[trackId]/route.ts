import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyAudioFeatures } from '@data/audiofeatures/builders';
import { getSpotifyAudioFeatures } from '@spotify/audiofeatures/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackId = getIdFromRoute(request.nextUrl.pathname);
        const audioFeatures = buildSpotifyAudioFeatures(
            await getSpotifyAudioFeatures(trackId, accessToken)
        );
        return NextResponse.json(audioFeatures);
    } catch (error) {
        return errorResponse(error, request);
    }
}
