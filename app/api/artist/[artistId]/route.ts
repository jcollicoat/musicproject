import { getAccessToken } from "@/library/auth/helpers";
import {
    createErrorResponse,
    createIdApiEndpoint,
} from "@/library/api/helpers";
import { SpotifyArtist } from "@/library/spotify/artists/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

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
        return NextResponse.json(spotifyArtist.data);
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
