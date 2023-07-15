import { NextRequest, NextResponse } from 'next/server';
import { errorResponse, getAccessToken } from '@api/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = await getAccessToken(request);

        const user = await music.user.full(accessToken);
        return NextResponse.json(user);
    } catch (error) {
        return errorResponse(error);
    }
}
