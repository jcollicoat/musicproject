import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { trackId: string } },
) {
    try {
        const { trackId } = params;
        const audioFeatures = await music.tracks.audioFeatures(trackId);
        return NextResponse.json(audioFeatures);
    } catch (error) {
        return errorResponse(error);
    }
}
