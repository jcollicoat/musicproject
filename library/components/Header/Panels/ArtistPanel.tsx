import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { FollowButton } from '@components/Button/Actions/FollowButton';
import { DataPoint } from '@components/DataPoint/DataPoint';
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
                    {artist.popularity && (
                        <DataPoint
                            name="Popularity"
                            value={artist.popularity}
                            icon="Heart"
                        />
                    )}
                    {artist.genres && (
                        <DataPoint
                            name="Genres"
                            value={artist.genres
                                .map((genre) => genre)
                                .join(', ')}
                            icon="MusicNote"
                        />
                    )}
                </div>
            </div>
        </Panel>
    );
};
