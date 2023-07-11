'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';

export default function Home() {
    const { data: session, status } = useSession();
    console.log(session, status);

    const onClick = () => {
        status === 'authenticated' ? signOut() : signIn();
    };

    return (
        <>
            <Header
                title="Music Project"
                subtitle="This is the music project."
                headingElement="h1"
            />
            <main>
                <Panel>
                    <Button text="Button" onClick={onClick} />
                </Panel>
            </main>
        </>
    );
}
