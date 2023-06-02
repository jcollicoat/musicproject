import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/_api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackId = getIdFromRoute(request.nextUrl);

        const audioAnalysis = await music.audioAnalysis.id(
            trackId,
            accessToken
        );
        return NextResponse.json(audioAnalysis);
    } catch (error) {
        return errorResponse(error);
    }
}
