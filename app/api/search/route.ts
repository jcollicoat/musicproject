import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getArrayRouteParam, getRouteParam } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);
        const query = getRouteParam(request.nextUrl, 'query', true) ?? '';
        const types = getArrayRouteParam(request.nextUrl, 'types');

        const search = await music.search({ query, types }, accessToken);
        return NextResponse.json(search);
    } catch (error) {
        return errorResponse(error);
    }
}
