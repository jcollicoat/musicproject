import Image from 'next/image';
import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import sharedStyles from './sharedStyles.module.scss';
import styles from './UserPanel.module.scss';
import { Icon } from '@components/Icon/Icon';

export const UserPanel: FC = async () => {
    const user = await music.user();

    return (
        <Panel element="div">
            <div className={sharedStyles.content}>
                <Image
                    src={user.images.large}
                    alt={`${user.name}'s profile picture`}
                    height={140}
                    width={140}
                    className={styles.image}
                />
                <div className={sharedStyles.details}>
                    <span className={sharedStyles.label}>{user.name}</span>
                    <h1>My Library</h1>
                    <div className={sharedStyles.section}>
                        <div className={sharedStyles.item}>
                            <Icon icon="Heart" />
                            <span>
                                {user.followers}{' '}
                                {user.followers === 1
                                    ? 'follower'
                                    : 'followers'}
                            </span>
                        </div>
                    </div>
                    <div className={sharedStyles.section}>
                        <div className={sharedStyles.item}>
                            <Icon icon="Info" />
                            <span>{user.product} User</span>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
