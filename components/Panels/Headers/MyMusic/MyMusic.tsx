import classNames from 'classnames';
import { FC } from 'react';
import { Panel } from 'components/Panel/Panel';
import { Icon } from 'Generics/Icon/Icon';
import { music } from 'music/api';
import { PanelProps } from 'Panels/Panel';
import layout from '../layout.module.scss';

export const MyMusic: FC<PanelProps> = async (props) => {
    const user = await music.user.profile();

    return (
        <Panel backgroundImage={user.images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={user.images.medium}
                    alt={user.name}
                    height={140}
                    width={140}
                    className={classNames(layout.image, layout.round)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>{user.name}</span>
                    <h1>My Music</h1>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Heart" />
                            <span>
                                {user.followers}{' '}
                                {user.followers === 1
                                    ? 'follower'
                                    : 'followers'}
                            </span>
                        </div>
                    </div>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Info" />
                            <span>{user.product} User</span>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
