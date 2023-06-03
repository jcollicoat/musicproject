import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getArrayParamFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/_api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackIds = getArrayParamFromRoute(request.nextUrl, 'trackIds');

        if (!trackIds) {
            throw new Error('trackIds param required.');
        }

        const tracks = await music.tracks.ids(trackIds, accessToken);
        return NextResponse.json(tracks);
    } catch (error) {
        return errorResponse(error);
    }
}
