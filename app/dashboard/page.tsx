'use client';

import { useSession } from 'next-auth/react';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { useUserProfile } from '@hooks/music/useUserProfile';

export default function Page() {
    const session = useSession();
    console.log(session);
    const user = useUserProfile();
    console.log(user);

    return (
        <>
            <Header title="Dashboard" headingElement="h1" />
            <main>
                <Panel>
                    <h2>Dashboard</h2>
                </Panel>
            </main>
        </>
    );
}
