'use client';

import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';

export default function Page({ params }: { params: { trackId: string } }) {
    console.log(params);

    return (
        <>
            <Header
                title="Music Project"
                subtitle="This is the music project."
                headingElement="h1"
            />
            <main>
                <Panel>
                    <Button text="Home" link="/" />
                </Panel>
            </main>
        </>
    );
}
