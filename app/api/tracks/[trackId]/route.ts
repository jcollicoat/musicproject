import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, hasRouteParams } from '@api/helpers';
import { music } from '@music/api';

export async function GET(
    request: NextRequest,
    { params }: { params: { trackId: string } },
) {
    try {
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
