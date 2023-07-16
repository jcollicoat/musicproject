'use client';

import { Header } from '@components/Header/Header';

export default function Page({
    params: { artistId },
}: {
    params: { artistId: string };
}) {
    return (
        <Header title="Music Project" subtitle="This is the music project." />
    );
}
