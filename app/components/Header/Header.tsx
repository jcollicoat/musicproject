import { FC } from 'react';
import { Button } from '@components/Button/Button';
import { Panel } from '@components/Panel/Panel';
import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <Panel element="header">
            <div className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Music Project</h1>
                    <p>This is the music project.</p>
                </div>
                <div className={styles.buttons}>
                    <Button
                        ariaLabel="Explore music"
                        text="Explore music"
                        onClick={() => alert('Button clicked!')}
                        style="tertiary"
                    />
                    <Button
                        ariaLabel="Login"
                        text="Login"
                        onClick={() => alert('Button clicked!')}
                        style="cta"
                    />
                </div>
            </div>
        </Panel>
    );
};
