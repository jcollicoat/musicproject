import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getArrayRouteParam, getRouteParam } from '@api/helpers';
// import { getAccessToken } from '@auth/helpers';

// eslint-disable-next-line require-await
export async function GET(request: NextRequest) {
    try {
        // const accessToken = getAccessToken(request);
        const query = getRouteParam(request.nextUrl, 'query');
        const types = getArrayRouteParam(request.nextUrl, 'types');

        return NextResponse.json({ query, types });
    } catch (error) {
        return errorResponse(error);
    }
}
