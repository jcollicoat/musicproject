'use client';

import { FC } from 'react';

interface Props {
    data: unknown;
    name?: string;
}

export const ClientLogger: FC<Props> = ({ data, name }) => {
    if (typeof window !== 'undefined') {
        if (name) {
            console.log(`${name}:`);
        }
        console.log(data);
    }
    return null;
};
