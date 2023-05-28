import { getAccessToken } from "@/library/auth/helpers";
import {
    createErrorResponse,
    createIdApiEndpoint,
} from "@/library/api/helpers";
import { SpotifyAlbum } from "@/library/spotify/albums/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { buildSpotifyAlbum } from "@/library/albums/builders";

const spotifyEndpoint = "https://api.spotify.com/v1/albums/";

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
