'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from '@components/Button/Button';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { Track } from '@music/types/tracks.types';

export default function Page({
    params: { trackId },
}: {
    params: { trackId: string };
}) {
    const { data: track } = useQuery({
        queryKey: ['track', trackId],
        queryFn: () => axios.get<Track>(`/api/tracks/${trackId}`),
        staleTime: Infinity,
    });
    console.log(track?.data);

    return (
        <>
            <Header
                title="Music Project"
                subtitle="This is the music project."
                headingElement="h1"
                data={track?.data}
            />
            <main>
                <Panel>
                    <Button text="Home" link="/" />
                </Panel>
            </main>
        </>
    );
}
