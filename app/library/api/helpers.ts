import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

const ENV = process.env.NODE_ENV;

// Errors

export const errorResponse = (
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

// Utilities

export const getIdFromRoute = (url: NextURL) =>
    url.pathname.replace(/^(.*[\\/])/, '');

export const getParamFromRoute = (url: NextURL, param: string) =>
    Boolean(url.searchParams.get(param));
