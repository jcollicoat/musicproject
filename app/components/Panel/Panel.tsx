import { FC, ReactNode } from 'react';
import styles from './Panel.module.scss';

interface Props {
    children: ReactNode;
    position?: string;
}

export const Panel: FC<Props> = ({ children, position }) => {
    return (
        <section className={styles.panel} style={{ gridArea: position }}>
            {children}
        </section>
    );
};
