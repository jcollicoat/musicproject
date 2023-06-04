import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, hasRouteParam } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const hasAudioFeatures = hasRouteParam(
            request.nextUrl,
            'audioFeatures'
        );

        const recentlyPlayed = await music.tracks.recentlyPlayed(
            accessToken,
            hasAudioFeatures
        );
        return NextResponse.json(recentlyPlayed);
    } catch (error) {
        return errorResponse(error);
    }
}
