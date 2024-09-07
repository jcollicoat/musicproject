import Image from 'next/image';
import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './UserPanel.module.scss';

export const UserPanel: FC = async () => {
    const user = await music.user();

    return (
        <Panel element="div">
            <div className={styles.content}>
                <Image
                    src={user.images.large}
                    alt={`${user.name}'s profile picture`}
                    height={160}
                    width={160}
                    className={styles.image}
                />
                <h1 className={styles.title}>My Library</h1>
            </div>
        </Panel>
    );
};
