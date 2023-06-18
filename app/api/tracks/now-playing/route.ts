import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);

        const nowPlaying = await music.tracks.nowPlaying(accessToken);
        return NextResponse.json(nowPlaying);
    } catch (error) {
        return errorResponse(error);
    }
}