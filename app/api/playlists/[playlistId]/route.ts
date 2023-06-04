import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { playlistId: string } }
) {
    try {
        const accessToken = getAccessToken(request);
        const { playlistId } = params;

        const playlist = await music.playlists.get(playlistId, accessToken);
        return NextResponse.json(playlist);
    } catch (error) {
        return errorResponse(error);
    }
}
