import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { createErrorResponse, createIdApiEndpoint } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { buildSpotifyAudioFeatures } from '@data/audiofeatures/builders';
import { SpotifyAudioFeatures } from '@spotify/audiofeatures/types';

const spotifyEndpoint = 'https://api.spotify.com/v1/audio-features/';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const endpoint = createIdApiEndpoint(
            request.nextUrl.pathname,
            spotifyEndpoint
        );
        const spotifyAudioFeatures = await axios.get<SpotifyAudioFeatures>(
            endpoint,
            {
                headers: {
                    Authorization: accessToken,
                },
            }
        );
        return NextResponse.json(
            buildSpotifyAudioFeatures(spotifyAudioFeatures.data)
        );
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
