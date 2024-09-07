import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
import { RecentlyPlayed } from '@components/RecentlyPlayed/RecentlyPlayed';
import styles from './page.module.scss';

export const metadata = {
    title: 'My Music',
};

export default function Page() {
    return (
        <>
            <Header user />
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
