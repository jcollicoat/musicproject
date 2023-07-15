'use client';

import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { useTrack } from '@hooks/music/useTrack';

export default function Page({
    params: { trackId },
}: {
    params: { trackId: string };
}) {
    const track = useTrack(trackId);

    return (
        <>
            <Header
                title="Music Project"
                subtitle="This is the music project."
                data={track}
            />
            <main>
                <Panel>
                    <Button text="Home" link="/" />
                </Panel>
            </main>
        </>
    );
}
