import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getIdFromRoute, getParamFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { tracks } from '@spotify/tracks/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackId = getIdFromRoute(request.nextUrl);
        const audioFeatures = getParamFromRoute(
            request.nextUrl,
            'audioFeatures'
        );
        const audioAnalysis = getParamFromRoute(
            request.nextUrl,
            'audioAnalysis'
        );

        const track = await tracks.get(
            trackId,
            accessToken,
            audioFeatures,
            audioAnalysis
        );
        return NextResponse.json(track);
    } catch (error) {
        return errorResponse(error, request);
    }
}
