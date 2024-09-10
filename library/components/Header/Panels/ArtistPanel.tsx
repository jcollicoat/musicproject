import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { FollowButton } from '@components/Button/Actions/FollowButton';
import { Icon } from '@components/Icon/Icon';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './ArtistPanel.module.scss';
import sharedStyles from './sharedStyles.module.scss';

interface Props {
    artistId: string;
}

export const ArtistPanel: FC<Props> = async ({ artistId }) => {
    const artist = await music.artist.id(artistId);
    const isFollowing = await music.following.artistId(artistId);

    return (
        <Panel element="div" backgroundImage={artist.images.large}>
            <div className={sharedStyles.content}>
                <Image
                    src={artist.images.medium}
                    alt={artist.name}
                    height={160}
                    width={160}
                    className={classNames(sharedStyles.image, styles.image)}
                />
                <div className={sharedStyles.details}>
                    <span className={sharedStyles.label}>Artist</span>
                    <h1>{artist.name}</h1>
                    <div className={styles.follow}>
                        <FollowButton
                            action={isFollowing ? 'remove' : 'add'}
                            type="artist"
                            id={artistId}
                        />
                        <span>
                            <em>{artist.followers.display}</em> followers
                        </span>
                    </div>
                </div>
                <div className={sharedStyles.sidebar}>
                    <div className={sharedStyles.popularity}>
                        <div className={sharedStyles.header}>
                            <Icon icon="Heart" />
                            <span>Popularity</span>
                        </div>
                        <span>{artist.popularity}</span>
                    </div>
                    {artist.genres && (
                        <div className={styles.genres}>
                            <div className={styles.header}>
                                <Icon icon="MusicNote" />
                                <span>Genres</span>
                            </div>
                            <span>
                                {artist.genres.map(
                                    (genre, index) =>
                                        `${genre}${
                                            index !==
                                            (artist.genres?.length ?? 0) - 1
                                                ? ', '
                                                : ''
                                        }`,
                                )}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Panel>
    );
};
