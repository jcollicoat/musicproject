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
                <Panel position="library">1</Panel>
                <Panel position="recent">2</Panel>
                <Panel position="artists">3</Panel>
                <Panel position="albums">4</Panel>
            </main>
        </>
    );
}
