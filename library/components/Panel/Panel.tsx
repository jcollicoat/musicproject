import classNames from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import { Icon, IconProps } from '@components/Icon/Icon';
import styles from './Panel.module.scss';

interface Props {
    children: ReactNode;
    element?: keyof JSX.IntrinsicElements;
    heading?: {
        text: string;
        icon?: IconProps['icon'];
    };
    image?: CSSProperties['backgroundImage'];
    position?: string;
}

export const Panel: FC<Props> = ({
    children,
    element: Element = 'section',
    heading,
    image,
    position,
}) => {
    return (
        <Element
            className={classNames(styles.panel, image && styles.hasImage)}
            style={{
                backgroundImage: `url(${image})`,
                gridArea: position,
            }}
        >
            {heading && (
                <h2>
                    {heading.icon && <Icon icon={heading.icon} />}
                    {heading.text}
                </h2>
            )}
            {children}
        </Element>
    );
};
