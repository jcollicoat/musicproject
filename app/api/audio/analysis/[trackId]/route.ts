import { NextResponse } from 'next/server';
import { spotify } from 'spotify/api';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ trackId: string }> },
) {
    const { trackId } = await params;

    const analysis = await spotify.audio.analysis.id(trackId);

    return NextResponse.json(analysis);
}
