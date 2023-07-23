import Image from 'next/image';
import { FC } from 'react';
import { Icon } from '@components/Icon/Icon';
import { Panel } from '@components/Panel/Panel';
import { useUser } from '@hooks/music/useUser';
import styles from './HeaderUser.module.scss';

const Followers: FC = () => {
    const user = useUser();

    return (
        <div className={styles.product}>
            <Icon icon={user && 'Heart'} size="1rem" />
            {user ? `${user.followers} Followers` : 'Followers'}
        </div>
    );
};

const Product: FC = () => {
    const user = useUser();

    return (
        <div className={styles.product}>
            <Icon icon={user && 'Star'} size="1rem" />
            {user
                ? user.product.charAt(0).toUpperCase() + user.product.slice(1)
                : 'Product'}
        </div>
    );
};

const ExplicitFilter: FC = () => {
    const user = useUser();

    return (
        <div className={styles.product}>
            <Icon icon={user && 'Lock'} size="1rem" />
            {user?.filterExplicit ? 'Explicit Off' : 'Explicit On'}
        </div>
    );
};

export const HeaderUser: FC = () => {
    const user = useUser();
    console.log(user);

    return (
        <Panel element="div">
            <div className={styles.content}>
                <Panel element="div">
                    <div className={styles.profile}>
                        <div className={styles.details}>
                            {user ? (
                                <>
                                    <Image
                                        src={user.images.large.url}
                                        alt={`${user.name}'s profile picture`}
                                        height={60}
                                        width={60}
                                        className={styles.image}
                                    />
                                    <span className={styles.name}>
                                        {user.name}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <div className={styles.imageFallback}></div>
                                    <span className={styles.name}>Loading</span>
                                </>
                            )}
                        </div>
                        <div className={styles.products}>
                            <Followers />
                            <Product />
                            <ExplicitFilter />
                        </div>
                    </div>
                </Panel>
            </div>
        </Panel>
    );
};
