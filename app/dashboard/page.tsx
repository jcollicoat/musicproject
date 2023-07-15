'use client';

import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { useUserProfile } from '@hooks/music/useUserProfile';

export default function Page() {
    const user = useUserProfile();
    console.log(user);

    return (
        <>
            <Header title="Dashboard" />
            <main>
                <Panel>
                    <h2>Dashboard</h2>
                </Panel>
            </main>
        </>
    );
}
