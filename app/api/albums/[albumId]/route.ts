import { NextRequest, NextResponse } from 'next/server';
import { buildSpotifyAlbum } from '@/library/music/albums/builders';
import { errorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { getSpotifyAlbum } from '@spotify/albums/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const albumId = getIdFromRoute(request.nextUrl.pathname);
        const album = buildSpotifyAlbum(
            await getSpotifyAlbum(albumId, accessToken)
        );
        return NextResponse.json(album);
    } catch (error) {
        return errorResponse(error, request);
    }
}
