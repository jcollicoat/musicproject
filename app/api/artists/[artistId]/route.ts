import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getIdFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyArtist } from '@data/artists/builders';
import { getSpotifyArtist } from '@spotify/artists/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const artistId = getIdFromRoute(request.nextUrl.pathname);
        const artist = buildSpotifyArtist(
            await getSpotifyArtist(artistId, accessToken)
        );
        return NextResponse.json(artist);
    } catch (error) {
        return errorResponse(error, request);
    }
}
