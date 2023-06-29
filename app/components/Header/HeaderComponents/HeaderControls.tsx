import { FC } from 'react';
import { ButtonContainer } from '@components/Button/Button';
import styles from './HeaderControls.module.scss';

export const HeaderControls: FC = () => {
    return (
        <div className={styles.controls}>
            <div className={styles.info}>
                <span>Music Project</span>
                <p>This is the music project</p>
            </div>
            <ButtonContainer
                buttons={[
                    {
                        text: 'Explore',
                        iconStart: {
                            icon: 'MusicNote',
                        },
                        link: '/#',
                        style: 'tertiary',
                    },
                    {
                        text: 'Login',
                        iconStart: {
                            icon: 'User',
                        },
                        onClick: () => alert('Button clicked!'),
                        style: 'cta',
                    },
                ]}
                menuButtons={[
                    {
                        buttons: [
                            {
                                text: 'Explore music',
                                iconStart: {
                                    icon: 'MusicNote',
                                },
                                link: '/#',
                            },
                            {
                                text: 'Login',
                                iconStart: {
                                    icon: 'User',
                                },
                                onClick: () => alert('Button clicked!'),
                            },
                        ],
                        side: 'left',
                    },
                ]}
            />
        </div>
    );
};
