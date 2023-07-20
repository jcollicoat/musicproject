import { NextResponse } from 'next/server';
import { errorResponse } from '@api/helpers';
import { music } from '@music/api';

export async function GET() {
    try {
        const user = await music.user.full();
        return NextResponse.json(user);
    } catch (error) {
        return errorResponse(error);
    }
}
