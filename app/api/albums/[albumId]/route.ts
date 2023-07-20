import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { albumId: string } },
) {
    try {
        const { albumId } = params;
        const album = await music.albums.get(albumId);
        return NextResponse.json(album);
    } catch (error) {
        return errorResponse(error);
    }
}
