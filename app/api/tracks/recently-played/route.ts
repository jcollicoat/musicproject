import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/_api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);

        const recentlyPlayed = await music.tracks.recentlyPlayed(accessToken);
        return NextResponse.json(recentlyPlayed);
    } catch (error) {
        return errorResponse(error);
    }
}
