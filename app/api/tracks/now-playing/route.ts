import { NextRequest, NextResponse } from 'next/server';
import { setAccessToken } from '@api/auth';
import { errorResponse } from '@api/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        await setAccessToken(request);
        const nowPlaying = await music.tracks.nowPlaying();
        return NextResponse.json(nowPlaying);
    } catch (error) {
        return errorResponse(error);
    }
}
