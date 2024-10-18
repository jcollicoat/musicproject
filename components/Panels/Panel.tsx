import classNames from 'classnames';
import {
    CSSProperties,
    FC,
    PropsWithChildren,
    ReactNode,
    Suspense,
} from 'react';
import { IconType } from 'react-icons';
import styles from './Panel.module.scss';

export interface PanelProps {
    loading?: ReactNode;
    element?: keyof JSX.IntrinsicElements;
    heading?: string;
    icon?: IconType;
    backgroundColor?: CSSProperties['backgroundColor'];
    backgroundImage?: CSSProperties['backgroundImage'];
    gridArea?: CSSProperties['gridArea'];
}

export const Panel: FC<PropsWithChildren<PanelProps>> = ({
    children,
    loading: Loading = 'Loading...',
    element: Element = 'section',
    heading,
    icon: Icon,
    backgroundColor,
    backgroundImage,
    gridArea,
}) => {
    return (
        <Element
            className={classNames(
                styles.panel,
                (backgroundColor || backgroundImage) && styles.hasBackground,
            )}
            style={{
                backgroundColor: backgroundColor ? backgroundColor : undefined,
                backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : undefined,
                gridArea,
            }}
        >
            {heading && (
                <h2>
                    {Icon && <Icon />}
                    {heading}
                </h2>
            )}
            <div className={styles.container}>
                <Suspense fallback={Loading}>{children}</Suspense>
            </div>
        </Element>
    );
};
