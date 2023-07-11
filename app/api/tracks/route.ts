import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getArrayRouteParam, hasRouteParam } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackIds = getArrayRouteParam(request.nextUrl, 'trackIds', true);

        const hasAudioFeatures = hasRouteParam(
            request.nextUrl,
            'audioFeatures',
        );

        const tracks = await music.tracks.ids(
            trackIds ?? [],
            accessToken,
            hasAudioFeatures,
        );
        return NextResponse.json(tracks);
    } catch (error) {
        return errorResponse(error);
    }
}
