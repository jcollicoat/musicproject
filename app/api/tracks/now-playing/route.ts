import { NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { music } from '@music/api';

export async function GET() {
    try {
        const nowPlaying = await music.tracks.nowPlaying();
        return NextResponse.json(nowPlaying);
    } catch (error) {
        return errorResponse(error);
    }
}
