import { NextRequest, NextResponse } from 'next/server';
import { setAccessToken } from '@api/auth';
import { errorResponse } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { trackId: string } },
) {
    try {
        await setAccessToken(request);
        const { trackId } = params;
        const audioAnalysis = await music.tracks.audioAnalysis(trackId);
        return NextResponse.json(audioAnalysis);
    } catch (error) {
        return errorResponse(error);
    }
}
