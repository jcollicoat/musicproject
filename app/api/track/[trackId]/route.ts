import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { createErrorResponse, createIdApiEndpoint } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyTrack } from '@data/tracks/builders';
import { SpotifyTrack } from '@spotify/tracks/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/tracks/';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackEndpoint = createIdApiEndpoint(
            request.nextUrl.pathname,
            spotifyEndpoint
        );
        const spotifyTrack = await axios.get<SpotifyTrack>(trackEndpoint, {
            headers: {
                Authorization: accessToken,
            },
        });
        return NextResponse.json(buildSpotifyTrack(spotifyTrack.data));
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
