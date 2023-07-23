import { FC } from 'react';
import { Panel } from '@components/Panel/Panel';
import { useUser } from '@hooks/music/useUser';
import styles from './HeaderUser.module.scss';

export const HeaderUser: FC = () => {
    const user = useUser();
    console.log(user);

    return (
        <Panel element="div">
            <div className={styles.content}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{user?.name}</h1>
                    <p>
                        {user?.followers} • {user?.product}
                    </p>
                </div>
            </div>
        </Panel>
    );
};
