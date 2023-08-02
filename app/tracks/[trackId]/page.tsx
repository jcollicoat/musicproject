import { cache } from 'react';
import { Header } from '@components/Header/Header';
import { music } from '@music/api';

export const metadata = {
    title: 'Track',
};

const getTrack = cache(async (trackId: string) => {
    return await music.tracks.id(trackId, true, true);
});

export default async function Page({
    params,
}: {
    params: { trackId: string };
}) {
    const track = await getTrack(params.trackId);

    return <Header subtitle="Track" track={track} />;
}
