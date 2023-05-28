import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const trackId = pathname.replace("/api/track/", "");
    return new Response(`This is your track ID: ${trackId}`);
}
