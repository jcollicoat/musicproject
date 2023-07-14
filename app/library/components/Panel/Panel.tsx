import { FC, ReactNode } from 'react';
import styles from './Panel.module.scss';

interface Props {
    children: ReactNode;
    element?: keyof JSX.IntrinsicElements;
    position?: string;
}

export const Panel: FC<Props> = ({
    children,
    element: Element = 'section',
    position,
}) => {
    return (
        <Element className={styles.panel} style={{ gridArea: position }}>
            {children}
        </Element>
    );
};
