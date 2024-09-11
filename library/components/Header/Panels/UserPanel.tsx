import Image from 'next/image';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import layout from './layout.module.scss';
import styles from './UserPanel.module.scss';

export const UserPanel: FC = async () => {
    const user = await music.user();

    return (
        <Panel element="div">
            <div className={layout.content}>
                <Image
                    src={user.images.large}
                    alt={`${user.name}'s profile picture`}
                    height={140}
                    width={140}
                    className={styles.image}
                />
                <div className={layout.details}>
                    <span className={layout.label}>{user.name}</span>
                    <h1>My Library</h1>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Heart" />
                            <span>
                                {user.followers}{' '}
                                {user.followers === 1
                                    ? 'follower'
                                    : 'followers'}
                            </span>
                        </div>
                    </div>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Info" />
                            <span>{user.product} User</span>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
