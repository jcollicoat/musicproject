import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { createErrorResponse, createIdApiEndpoint } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyAlbum } from '@data/albums/builders';
import { SpotifyAlbum } from '@spotify/albums/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/albums/';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const albumEndpoint = createIdApiEndpoint(
            request.nextUrl.pathname,
            spotifyEndpoint
        );
        const spotifyAlbum = await axios.get<SpotifyAlbum>(albumEndpoint, {
            headers: {
                Authorization: accessToken,
            },
        });
        return NextResponse.json(buildSpotifyAlbum(spotifyAlbum.data));
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
