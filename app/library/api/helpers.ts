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

export const getParamFromRoute = (url: NextURL, param: string) =>
    Boolean(url.searchParams.get(param));

export const getArrayParamFromRoute = (url: NextURL, param: string) =>
    url.searchParams.get(param)?.split(',');

export const getParamsFromRoute = (url: NextURL, params: string[]) =>
    params.map((param) => Boolean(url.searchParams.get(param)));
