import classNames from 'classnames';
import { CSSProperties, FC, ReactNode } from 'react';
import styles from './Panel.module.scss';

interface Props {
    children: ReactNode;
    element?: keyof JSX.IntrinsicElements;
    image?: CSSProperties['backgroundImage'];
    position?: string;
}

export const Panel: FC<Props> = ({
    children,
    element: Element = 'section',
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
            {children}
        </Element>
    );
};
