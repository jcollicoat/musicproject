import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { FollowButton } from '@components/Button/Actions/FollowButton';
import { DataPoint } from '@components/DataPoint/DataPoint';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './ArtistPanel.module.scss';
import layout from './layout.module.scss';

interface Props {
    artistId: string;
}

export const ArtistPanel: FC<Props> = async ({ artistId }) => {
    const artist = await music.artists.id(artistId);
    const isFollowing = await music.user.following.artist(artistId);

    return (
        <Panel element="div" backgroundImage={artist.images.large}>
            <div className={layout.content}>
                <Image
                    src={artist.images.medium}
                    alt={artist.name}
                    height={160}
                    width={160}
                    className={classNames(layout.image, layout.round)}
                />
                <div className={layout.details}>
                    <span className={layout.label}>Artist</span>
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
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Popularity"
                        value={artist.popularity}
                        icon="Heart"
                    />
                    {artist.genres && (
                        <DataPoint
                            name="Genres"
                            value={artist.genres
                                .map((genre) => genre)
                                .join(', ')}
                            icon="Track"
                            smallText
                        />
                    )}
                </div>
            </div>
        </Panel>
    );
};
