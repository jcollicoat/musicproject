import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getArrayRouteParam, hasRouteParam } from '@api/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const trackIds = getArrayRouteParam(request.nextUrl, 'trackIds', true);
        const hasAudioFeatures = hasRouteParam(
            request.nextUrl,
            'audioFeatures',
        );
        const tracks = await music.tracks.ids(trackIds ?? [], hasAudioFeatures);
        return NextResponse.json(tracks);
    } catch (error) {
        return errorResponse(error);
    }
}
