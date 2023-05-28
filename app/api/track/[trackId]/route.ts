import { SpotifyTrack } from "@/library/spotify/tracks/types";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const spotifyEndpoint = "https://api.spotify.com/v1/tracks/";

export async function GET(request: NextRequest) {
    try {
        const spotifyToken = request.headers.get("authorization");
        const trackId = request.nextUrl.pathname.replace("/api/track/", "");
        const spotifyTrack = await axios.get<SpotifyTrack>(
            spotifyEndpoint + trackId,
            {
                headers: {
                    Authorization: spotifyToken,
                },
            }
        );
        return NextResponse.json(spotifyTrack.data);
    } catch (error) {
        return new Response("Something went wrong");
    }
}
