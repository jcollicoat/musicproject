import Image from 'next/image';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { Panel } from '@components/Panel/Panel';
import { User } from '@music/types/user.types';
import styles from './HeaderUser.module.scss';

interface Props {
    user: User;
    image?: string;
}

export const HeaderUser: FC<Props> = ({ user, image }) => (
    <Panel element="div" image={image}>
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h1 className={styles.title}>My Music</h1>
            </div>
            <div className={styles.profile}>
                <Image
                    src={user.images.large.url}
                    alt={`${user.name}'s profile picture`}
                    height={60}
                    width={60}
                    className={styles.image}
                />
                <div className={styles.details}>
                    <span className={styles.name}>{user.name}</span>
                    <div className={styles.products}>
                        <div className={styles.product}>
                            <Icon icon="Heart" size="1rem" />
                            {`${user.followers} Followers`}
                        </div>
                        <div className={styles.product}>
                            <Icon icon="Star" size="1rem" />
                            {user.product.charAt(0).toUpperCase() +
                                user.product.slice(1)}
                        </div>
                        <div className={styles.product}>
                            <Icon icon="Lock" size="1rem" />
                            {user.filterExplicit
                                ? 'Explicit Off'
                                : 'Explicit On'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Panel>
);
