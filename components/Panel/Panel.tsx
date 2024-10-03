import classNames from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import { Icon, IconProps } from 'components/Icon/Icon';
import styles from './Panel.module.scss';

interface Props {
    children: ReactNode;
    element?: keyof JSX.IntrinsicElements;
    heading?: string;
    icon?: IconProps['icon'];
    backgroundColor?: CSSProperties['backgroundColor'];
    backgroundImage?: CSSProperties['backgroundImage'];
    gridArea?: CSSProperties['gridArea'];
}

export const Panel: FC<Props> = ({
    children,
    element: Element = 'section',
    heading,
    icon,
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
                    {icon && <Icon icon={icon} />}
                    {heading}
                </h2>
            )}
            <div className={styles.container}>{children}</div>
        </Element>
    );
};
