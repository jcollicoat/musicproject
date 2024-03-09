import { FC, ReactNode } from 'react';
import { Panel } from '@components/Panel/Panel';
import styles from './HeaderPanel.module.scss';

interface Props {
    main: ReactNode;
    secondary?: ReactNode;
    backgroundImage?: string;
}

export const HeaderPanel: FC<Props> = ({
    main,
    secondary,
    backgroundImage,
}) => (
    <Panel element="div" backgroundImage={backgroundImage}>
        <div className={styles.wrapper}>
            <div className={styles.main}>{main}</div>
            {secondary && <div className={styles.secondary}>{secondary}</div>}
        </div>
    </Panel>
);
