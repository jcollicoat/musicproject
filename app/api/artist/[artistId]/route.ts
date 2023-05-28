import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { createErrorResponse, createIdApiEndpoint } from "@api/helpers";
import { getAccessToken } from "@auth/helpers";
import { buildSpotifyArtist } from "@data/artists/builders";
import { SpotifyArtist } from "@spotify/artists/types";

const spotifyEndpoint = "https://api.spotify.com/v1/artists/";

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const artistEndpoint = createIdApiEndpoint(
            request.nextUrl.pathname,
            spotifyEndpoint
        );
        const spotifyArtist = await axios.get<SpotifyArtist>(artistEndpoint, {
            headers: {
                Authorization: accessToken,
            },
        });
        return NextResponse.json(buildSpotifyArtist(spotifyArtist.data));
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
