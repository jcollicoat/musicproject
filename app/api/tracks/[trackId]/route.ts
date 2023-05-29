import { NextRequest, NextResponse } from 'next/server';
import { createErrorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyTrack } from '@data/tracks/builders';
import { getSpotifyTrack } from '@spotify/tracks/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackId = getIdFromRoute(request.nextUrl.pathname);
        const track = buildSpotifyTrack(
            await getSpotifyTrack(trackId, accessToken)
        );
        return NextResponse.json(track);
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
