import { getAccessToken } from "@/library/auth/helpers";
import { createErrorResponse } from "@/library/api/helpers";
import { SpotifyTrack } from "@/library/spotify/tracks/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const spotifyEndpoint = "https://api.spotify.com/v1/tracks/";

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const trackEndpoint = request.nextUrl.pathname.replace(
            "/api/album/",
            spotifyEndpoint
        );
        const spotifyTrack = await axios.get<SpotifyTrack>(trackEndpoint, {
            headers: {
                Authorization: accessToken,
            },
        });
        return NextResponse.json(spotifyTrack.data);
    } catch (error) {
        return createErrorResponse(error, request);
    }
}
