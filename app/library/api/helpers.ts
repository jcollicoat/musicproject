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

// Request Handlers

export const handleRequestWithOptional = async <T, U>(
    request: Promise<T>,
    optional: Promise<U>
): Promise<[T, U?]> => {
    const [required, extra] = await Promise.allSettled([request, optional]);

    if (required.status === 'rejected') {
        throw new Error(required.reason);
    }

    if (extra.status === 'fulfilled') {
        return [required.value, extra.value];
    }

    return [required.value];
};

// Utilities

export const getIdFromRoute = (route: string) =>
    route.replace(/^(.*[\\/])/, '');
