import { NextRequest, NextResponse } from 'next/server';
import { setAccessToken } from '@api/auth';
import { errorResponse, hasRouteParam } from '@api/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        await setAccessToken(request);
        const hasAudioFeatures = hasRouteParam(
            request.nextUrl,
            'audioFeatures',
        );
        const recentlyPlayed = await music.tracks.recentlyPlayed(
            hasAudioFeatures,
        );
        return NextResponse.json(recentlyPlayed);
    } catch (error) {
        return errorResponse(error);
    }
}
