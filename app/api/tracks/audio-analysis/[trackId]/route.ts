import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { trackId: string } },
) {
    try {
        const { trackId } = params;
        const audioAnalysis = await music.tracks.audioAnalysis(trackId);
        return NextResponse.json(audioAnalysis);
    } catch (error) {
        return errorResponse(error);
    }
}
