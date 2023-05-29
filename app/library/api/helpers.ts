import { NextRequest, NextResponse } from 'next/server';

const ENV = process.env.NODE_ENV;

export const createErrorResponse = (
    error: unknown,
    request?: NextRequest
): NextResponse => {
    if (ENV === 'development') {
        return NextResponse.json(error);
    }

    if (request) {
        return NextResponse.json(
            `Unhandled error occured in endpoint: ${request.nextUrl.pathname}`,
            { status: 500 }
        );
    }

    return NextResponse.json('Internal server error', { status: 500 });
};

export const createIdApiEndpoint = (base: string, api: string) =>
    base.replace(/^(.*[\\/])/, api);
