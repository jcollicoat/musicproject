import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getParamsFromRoute } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/_api';

export async function GET(
    request: NextRequest,
    { params }: { params: { trackId: string } }
) {
    try {
        const accessToken = getAccessToken(request);
        const { trackId } = params;
        const [audioFeatures, audioAnalysis] = getParamsFromRoute(
            request.nextUrl,
            ['audioFeatures', 'audioAnalysis']
        );

        const track = await music.tracks.id(
            trackId,
            accessToken,
            audioFeatures,
            audioAnalysis
        );
        return NextResponse.json(track);
    } catch (error) {
        return errorResponse(error);
    }
}
