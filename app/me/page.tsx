import { cache } from 'react';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { RecentlyPlayed } from '@components/RecentlyPlayed/RecentlyPlayed';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'My Music',
};

const getUser = cache(async () => await music.user.details());

const getLikedTracks = async () => await music.user.tracks.liked();

export default async function Page() {
    const user = await getUser();
    const liked = await getLikedTracks();

    const image = liked.items[0].track.album?.images[0].url;

    return (
        <>
            <Header subtitle="My Music" user={user} image={image} />
            <main className={styles.main}>
                <Panel
                    heading={{ text: 'Library', icon: 'Recent' }}
                    gridArea="library"
                >
                    <div></div>
                </Panel>
                <Panel
                    heading={{ text: 'Recent Tracks', icon: 'Recent' }}
                    gridArea="recent"
                >
                    <RecentlyPlayed />
                </Panel>
                <Panel
                    heading={{ text: 'Queue', icon: 'Recent' }}
                    gridArea="queue"
                >
                    <div></div>
                </Panel>
                <Panel
                    heading={{ text: 'Artists', icon: 'Recent' }}
                    gridArea="artists"
                >
                    <div></div>
                </Panel>
                <Panel
                    heading={{ text: 'Albums', icon: 'Recent' }}
                    gridArea="albums"
                >
                    <div></div>
                </Panel>
            </main>
        </>
    );
}
