import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';

interface Props {
    isSticky?: boolean;
}

export const Header: FC<Props> = ({ isSticky }) => (
    <header className={classNames(styles.header, isSticky && styles.isSticky)}>
        <div className={styles.navBar}>
            <Link href="/" className={styles.link}>
                <span className={styles.title}>Music Project</span>
            </Link>
            <Navigation />
        </div>
    </header>
);
