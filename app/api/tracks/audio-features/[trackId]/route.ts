import { NextRequest, NextResponse } from 'next/server';
import { createErrorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyAudioFeatures } from '@data/audiofeatures/builders';
import { getSpotifyAudiofeatures } from '@spotify/audiofeatures/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackId = getIdFromRoute(request.nextUrl.pathname);
        const audioFeatures = buildSpotifyAudioFeatures(
            await getSpotifyAudiofeatures(trackId, accessToken)
        );
        return NextResponse.json(audioFeatures);
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
