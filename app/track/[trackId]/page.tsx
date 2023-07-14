'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';

export default function Page({
    params: { trackId },
}: {
    params: { trackId: string };
}) {
    const query = useQuery(
        ['track', trackId],
        () => axios.get(`/api/tracks/${trackId}`),
        { staleTime: 360000 },
    );

    console.log(query);

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
