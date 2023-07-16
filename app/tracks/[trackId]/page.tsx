'use client';

import { Header } from '@components/Header/Header';
import { useTrack } from '@hooks/music/useTrack';

export default function Page({
    params: { trackId },
}: {
    params: { trackId: string };
}) {
    const track = useTrack(trackId);
    console.log(track);

    return <Header title="Music Project" />;
}
