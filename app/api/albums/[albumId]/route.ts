import { NextRequest, NextResponse } from 'next/server';
import { createErrorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyAlbum } from '@data/albums/builders';
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
        return createErrorResponse(error, request);
    }
}
