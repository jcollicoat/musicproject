import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server';
import { logVariables } from '@library/utilities';

const ENV = process.env.NODE_ENV;

// Errors

export const errorResponse = (error: unknown): NextResponse => {
    if (ENV === 'development') {
        if (error instanceof Error) {
            logVariables('Error in errorResponse', [error]);
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

export const titleCase = (input: string) =>
    input
        .split(' ')
        .map((word) =>
            word.length < 3 || word.includes('&')
                ? word.toUpperCase()
                : word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join(' ');
