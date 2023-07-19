import { NextRequest, NextResponse } from 'next/server';
import { setAccessToken } from '@api/auth';
import { errorResponse, hasRouteParams } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { trackId: string } },
) {
    try {
        await setAccessToken(request);
        const { trackId } = params;
        const [audioFeatures, audioAnalysis] = hasRouteParams(request.nextUrl, [
            'audioFeatures',
            'audioAnalysis',
        ]);
        const track = await music.tracks.id(
            trackId,
            audioFeatures,
            audioAnalysis,
        );
        return NextResponse.json(track);
    } catch (error) {
        return errorResponse(error);
    }
}
