import { FC, Suspense, lazy } from 'react';
import styles from './Icon.module.scss';

// Pulsing loading dots
const Fallback: FC = () => (
    <svg
        className={styles.fallback}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        height="24"
        width="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4 7.25C3.86193 7.25 3.75 7.13807 3.75 7C3.75 6.86193 3.86193 6.75 4 6.75"></path>
        <path d="M4 7.25C4.13807 7.25 4.25 7.13807 4.25 7C4.25 6.86193 4.13807 6.75 4 6.75"></path>
        <path d="M7 7.25C6.86193 7.25 6.75 7.13807 6.75 7C6.75 6.86193 6.86193 6.75 7 6.75"></path>
        <path d="M7 7.25C7.13807 7.25 7.25 7.13807 7.25 7C7.25 6.86193 7.13807 6.75 7 6.75"></path>
        <path d="M10 7.25C9.86193 7.25 9.75 7.13807 9.75 7C9.75 6.86193 9.86193 6.75 10 6.75"></path>
        <path d="M10 7.25C10.1381 7.25 10.25 7.13807 10.25 7C10.25 6.86193 10.1381 6.75 10 6.75"></path>
    </svg>
);

type Icons = 'Menu';

interface Props {
    icon: Icons;
}

export const Icon: FC<Props> = ({ icon }) => {
    const Icon = lazy(() => import(`./icons/${icon}`));

    return (
        <Suspense fallback={<Fallback />}>
            <Icon />
        </Suspense>
    );
};
