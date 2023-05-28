import { getAccessToken } from "@/library/auth/helpers";
import { createErrorResponse } from "@/library/generic/helpers";
import { SpotifyArtist } from "@/library/spotify/artists/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const spotifyEndpoint = "https://api.spotify.com/v1/artists/";

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const artistEndpoint = request.nextUrl.pathname.replace(
            "/api/artist/",
            spotifyEndpoint
        );
        const spotifyArtist = await axios.get<SpotifyArtist>(artistEndpoint, {
            headers: {
                Authorization: accessToken,
            },
        });
        return NextResponse.json(spotifyArtist.data);
    } catch (error) {
        const { status, message } = createErrorResponse(error);
        return new Response(message, { status: status });
    }
}
