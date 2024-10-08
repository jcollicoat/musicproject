import classNames from 'classnames';
import { FC } from 'react';
import { Icon } from 'Generics/Icon/Icon';
import { useImages } from 'hooks/useImages';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import layout from '../layout.module.scss';

export const MyMusic: FC<PanelProps> = async (props) => {
    const user = await spotify.user.profile();

    const images = useImages(user.images);

    return (
        <Panel backgroundImage={images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={images.medium}
                    alt={user.display_name ?? 'Unknown User'}
                    height={140}
                    width={140}
                    className={classNames(layout.image, layout.round)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>{user.display_name}</span>
                    <h1>My Music</h1>
                    <div className={layout.section}>
                        <div className={layout.item}>
                            <Icon icon="Heart" />
                            <span>
                                {user.followers.total}{' '}
                                {user.followers.total === 1
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
