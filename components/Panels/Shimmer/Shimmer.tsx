import classNames from 'classnames';
import { CSSProperties, FC } from 'react';
import { Panel, PanelProps } from 'Panels/Panel';
import styles from './Shimmer.module.scss';

interface ShimmerProps extends PanelProps {
    height?: CSSProperties['height'];
    shape?: 'circle';
}

export const Shimmer: FC<ShimmerProps> = ({ height, shape, ...props }) => (
    <Panel {...props}>
        <div
            className={classNames(
                styles.shimmer,
                shape === 'circle' && styles.circle,
            )}
            style={{ height }}
        ></div>
    </Panel>
);
