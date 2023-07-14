'use client';

import { SessionProvider } from 'next-auth/react';
import { FC, PropsWithChildren } from 'react';

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => (
    <SessionProvider>{children}</SessionProvider>
);
