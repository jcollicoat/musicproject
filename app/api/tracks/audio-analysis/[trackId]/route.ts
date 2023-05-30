import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyAudioAnalysis } from '@data/audioanalysis/builders';
import { getSpotifyAudioAnalysis } from '@spotify/audioanalysis/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackId = getIdFromRoute(request.nextUrl.pathname);
        const audioAnalysis = buildSpotifyAudioAnalysis(
            await getSpotifyAudioAnalysis(trackId, accessToken)
        );
        return NextResponse.json(audioAnalysis);
    } catch (error) {
        return errorResponse(error, request);
    }
}
