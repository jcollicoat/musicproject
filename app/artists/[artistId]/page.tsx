'use client';

import { Header } from '@components/Header/Header';

export default function Page({
    params: { artistId },
}: {
    params: { artistId: string };
}) {
    console.log(artistId);
    return <Header title="Music Project" />;
}
