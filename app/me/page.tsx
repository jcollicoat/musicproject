import { Header } from '@components/Header/Header';
import { Panel } from '@components/Panel/Panel';
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
                    heading={{ text: 'Playlists', icon: 'Disc' }}
                    gridArea="playlists"
                >
                    <div></div>
                </Panel>
                <Panel
                    heading={{ text: 'Recent Tracks', icon: 'Recent' }}
                    gridArea="recent"
                >
                    <div></div>
                </Panel>
            </main>
        </>
    );
}
