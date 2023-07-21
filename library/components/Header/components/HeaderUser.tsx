import classNames from 'classnames';
import { FC, useState } from 'react';
import { Icon } from '@components/Icon/Icon';
import { useUserProfile } from '@hooks/music/useUserProfile';
import styles from './HeaderUser.module.scss';

export const HeaderUser: FC = () => {
    const user = useUserProfile();
    console.log(user);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.wrapper}>
            <button
                aria-label="Menu"
                className={classNames(
                    styles.button,
                    styles.trigger,
                    isOpen && styles.open,
                )}
                onClick={toggle}
                type="button"
            >
                <Icon icon="Menu" isAlternate={isOpen} size="24px" />
            </button>
            <menu
                className={classNames(
                    styles.menu,
                    isOpen && styles.open,
                    styles.left,
                )}
            >
                <li>Some item</li>
            </menu>
        </div>
    );
};
