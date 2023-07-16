'use client';

import { Header } from '@components/Header/Header';

export default function Page({
    params: { albumId },
}: {
    params: { albumId: string };
}) {
    console.log(albumId);
    return <Header title="Music Project" />;
}
