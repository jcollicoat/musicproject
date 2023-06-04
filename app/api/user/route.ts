import { NextRequest, NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { getAccessToken } from '@auth/helpers';
import { music } from '@music/api';

export async function GET(request: NextRequest) {
    try {
        const accessToken = getAccessToken(request);

        const user = await music.user.details(accessToken);
        return NextResponse.json(user);
    } catch (error) {
        return errorResponse(error);
    }
}
