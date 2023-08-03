import { cache } from 'react';
import { authGuard } from '@api/helpers';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './page.module.scss';

export const metadata = {
    title: 'My Music',
};

const getUser = cache(async () => {
    return await music.user.details();
});

const getLikedTracks = cache(async () => {
    return await music.user.tracks.liked();
});

export default async function Page() {
    await authGuard();
    const user = await getUser();
    const liked = await getLikedTracks();
    console.log(liked);

    return (
        <>
            <Header subtitle="My Music" user={user} />
            <main className={styles.main}>
                <Panel position="library">
                    <div>Library</div>
                </Panel>
                <Panel position="recent">
                    <div>Recently Played</div>
                </Panel>
                <Panel position="queue">
                    <div>Queue</div>
                </Panel>
                <Panel position="artists">
                    <div>Artists</div>
                </Panel>
                <Panel position="albums">
                    <div>Albums</div>
                </Panel>
            </main>
        </>
    );
}
