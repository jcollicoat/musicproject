import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const ENV = process.env.NODE_ENV;

// Auth

export const getAccessToken = async (request: NextRequest): Promise<string> => {
    // Next Auth
    const token = await getToken({ req: request });
    if (token) {
        console.warn('Access Token:', token.access_token);
        return `Bearer ${token.access_token}`;
    }

    if (ENV !== 'development') {
        throw new Error('Invalid access token provided');
    }

    // API Direct
    const authHeader = request.headers.get('authorization');
    if (authHeader?.match(/Bearer /g)) {
        console.log('Using Postman access token');
        return authHeader;
    }

    throw new Error('Invalid access token provided');
};

// Errors

export const errorResponse = (error: unknown): NextResponse => {
    if (ENV === 'development') {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: error }, { status: 500 });
    }

    return NextResponse.json('Internal server error', { status: 500 });
};

// Utilities

export const hasRouteParam = (url: NextURL, param: string) =>
    Boolean(url.searchParams.get(param));

export const hasRouteParams = (url: NextURL, params: string[]) =>
    params.map((param) => Boolean(url.searchParams.get(param)));

export const getRouteParam = (
    url: NextURL,
    param: string,
    required?: boolean,
) => {
    if (!url.searchParams.get(param) && required)
        throw new Error(`Parameter {${param}} required.`);
    return url.searchParams.get(param);
};

export const getRouteParams = (url: NextURL, params: string[]) =>
    params.map((param) => getRouteParam(url, param));

export const getArrayRouteParam = (
    url: NextURL,
    param: string,
    required?: boolean,
) => {
    if (!url.searchParams.get(param) && required)
        throw new Error(`Parameter {${param}} required.`);
    return url.searchParams.get(param)?.split(',');
};

export const getArrayRouteParams = (url: NextURL, params: string[]) =>
    params.map((param) => getArrayRouteParam(url, param));

export const getUrlSlug = (url?: string) => url?.replace(/^(.*[\\/])/, '');
