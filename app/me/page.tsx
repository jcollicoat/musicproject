import { authGuard } from '@api/helpers';
import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import styles from './page.module.scss';

export const metadata = {
    title: 'My Music',
};

export default async function Page() {
    await authGuard();
    return (
        <>
            <Header subtitle="My Music" data="user" />
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
