import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import sharedStyles from './sharedStyles.module.scss';
import styles from './UserPanel.module.scss';

export const UserPanel: FC = async () => {
    const user = await music.user();

    return (
        <Panel element="div">
            <div className={sharedStyles.content}>
                <Image
                    src={user.images.large}
                    alt={`${user.name}'s profile picture`}
                    height={160}
                    width={160}
                    className={classNames(sharedStyles.image, styles.image)}
                />
                <div className={sharedStyles.details}>
                    <h1>My Library</h1>
                </div>
            </div>
        </Panel>
    );
};
