import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getAccessToken } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { trackId: string } },
) {
    try {
        const accessToken = getAccessToken(request);
        const { trackId } = params;

        const audioAnalysis = await music.tracks.audioAnalysis(
            trackId,
            accessToken,
        );
        return NextResponse.json(audioAnalysis);
    } catch (error) {
        return errorResponse(error);
    }
}
