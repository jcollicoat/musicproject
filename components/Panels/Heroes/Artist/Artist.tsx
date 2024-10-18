import classNames from 'classnames';
import { FC } from 'react';
import { PiHeart, PiMusicNotesSimple } from 'react-icons/pi';
import { FollowButton } from 'Generics/Button/Actions/FollowButton';
import { DataPoint } from 'Generics/DataPoint/DataPoint';
import { useGenres } from 'hooks/useGenres';
import { useImages } from 'hooks/useImages';
import { useLargeNumber } from 'hooks/useLargeNumbers';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import layout from '../layout.module.scss';
import styles from './Artist.module.scss';

interface Props extends PanelProps {
    artistId: string;
}

export const Artist: FC<Props> = async ({ artistId, ...props }) => {
    const artist = await spotify.artists.id(artistId);
    const [isFollowing] = await spotify.user.following.artists([artistId]);

    const images = useImages(artist.images);
    const followers = useLargeNumber(artist.followers.total);
    const genres = useGenres(artist.genres);

    return (
        <Panel backgroundImage={images.large} {...props}>
            <div className={layout.content}>
                <img
                    src={images.medium}
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
                            <em>{followers}</em>{' '}
                            {followers === '1' ? 'follower' : 'followers'}
                        </span>
                    </div>
                </div>
                <div className={layout.sidebar}>
                    <DataPoint
                        name="Popularity"
                        primary={{
                            value: artist.popularity,
                            isPercent: true,
                        }}
                        icon={PiHeart}
                    />
                    {genres.length > 0 && (
                        <DataPoint
                            name="Genres"
                            primary={{
                                value: genres.map((genre) => genre).join(', '),
                            }}
                            icon={PiMusicNotesSimple}
                            smallText
                        />
                    )}
                </div>
            </div>
        </Panel>
    );
};
