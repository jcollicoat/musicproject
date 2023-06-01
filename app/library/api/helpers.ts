import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server';

const ENV = process.env.NODE_ENV;

// Errors

export const errorResponse = (error: unknown): NextResponse => {
    if (ENV === 'development') {
        return NextResponse.json(error);
    }

    return NextResponse.json('Internal server error', { status: 500 });
};

// Utilities

export const getIdFromRoute = (url: NextURL) =>
    url.pathname.replace(/^(.*[\\/])/, '');

export const getParamFromRoute = (url: NextURL, param: string) =>
    Boolean(url.searchParams.get(param));
