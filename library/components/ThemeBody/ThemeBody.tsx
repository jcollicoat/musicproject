'use client';

import { useLocalStorageValue } from '@react-hookz/web';
import { FC, PropsWithChildren } from 'react';

export const ThemeBody: FC<PropsWithChildren> = ({ children }) => {
    const theme = useLocalStorageValue('theme', {
        defaultValue: 'dark',
        initializeWithValue: false,
    });
    return <body className={`theme-${theme.value}`}>{children}</body>;
};
