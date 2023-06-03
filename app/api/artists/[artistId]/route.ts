import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const artistId = getIdFromRoute(request.nextUrl);

        const artist = await music.artists.id(artistId, accessToken);
        return NextResponse.json(artist);
    } catch (error) {
        return errorResponse(error);
    }
}
