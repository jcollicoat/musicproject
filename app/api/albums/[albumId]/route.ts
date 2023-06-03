import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { albumId: string } }
) {
    try {
        const accessToken = getAccessToken(request);
        const { albumId } = params;

        const album = await music.albums.id(albumId, accessToken);
        return NextResponse.json(album);
    } catch (error) {
        return errorResponse(error);
    }
}
