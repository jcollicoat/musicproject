'use client';

import { SessionProvider } from 'next-auth/react';

export const ClientAuthProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => <SessionProvider>{children}</SessionProvider>;
