import { getAccessToken } from "@/library/auth/helpers";
import { createErrorResponse } from "@/library/generic/helpers";
import { SpotifyAlbum } from "@/library/spotify/albums/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const spotifyEndpoint = "https://api.spotify.com/v1/albums/";

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const albumEndpoint = request.nextUrl.pathname.replace(
            "/api/album/",
            spotifyEndpoint
        );
        const spotifyAlbum = await axios.get<SpotifyAlbum>(albumEndpoint, {
            headers: {
                Authorization: accessToken,
            },
        });
        return NextResponse.json(spotifyAlbum.data);
    } catch (error) {
        const { status, message } = createErrorResponse(error);
        return new Response(message, { status: status });
    }
}
