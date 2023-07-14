import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getAccessToken } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { artistId: string } },
) {
    try {
        const accessToken = getAccessToken(request);
        const { artistId } = params;

        const artist = await music.artists.get(artistId, accessToken);
        return NextResponse.json(artist);
    } catch (error) {
        return errorResponse(error);
    }
}
