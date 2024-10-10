import classNames from 'classnames';
import { FC } from 'react';
import { Panel, PanelProps } from 'Panels/Panel';
import styles from './Shimmer.module.scss';

interface ShimmerProps extends PanelProps {
    shape?: 'circle';
}

export const Shimmer: FC<ShimmerProps> = ({ shape, ...props }) => (
    <Panel {...props}>
        <div
            className={classNames(
                styles.shimmer,
                shape === 'circle' && styles.circle,
            )}
        ></div>
    </Panel>
);
