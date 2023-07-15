'use client';

import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';

export default function Home() {
    return (
        <>
            <Header
                title="Music Project"
                subtitle="This is the music project."
                isSticky
            />
            <main>
                <Panel>
                    <Button
                        text="To Track"
                        link="/tracks/21p0edNF107qz1uPc9F7EK"
                    />
                </Panel>
            </main>
        </>
    );
}
