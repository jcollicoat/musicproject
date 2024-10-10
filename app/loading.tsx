import { Shimmer } from 'Panels/Shimmer/Shimmer';
import styles from './loading.module.scss';

export default function Loading() {
    return (
        <main className={styles.main}>
            <Shimmer gridArea="one" shape="circle" />
            <Shimmer gridArea="two" />
        </main>
    );
}
