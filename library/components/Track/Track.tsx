import Image from 'next/image';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { ClientLogger } from '@components/ClientLogger/ClientLogger';
import { LinkedAlbum } from '@components/Linked/LinkedAlbum';
import { LinkedArtists } from '@components/Linked/LinkedArtists';
import { TimeText } from '@components/TimeText/TimeText';
import { Track as TrackType } from '@music/types/tracks.types';
import styles from './Track.module.scss';

type Artists = Pick<TrackType, 'artists'>;

const Artists: FC<Artists> = ({ artists }) => {
    return artists.map((artist, index) => (
        <Fragment key={artist.id}>
            <Link href={`/artists/${artist.id}`}>{artist.name}</Link>
            {index !== artists.length - 1 && <>, </>}
        </Fragment>
    ));
};

interface Props {
    track: TrackType;
}

export const Track: FC<Props> = ({ track }) => {
    const { album, artists, durationMs, id, name } = track;

    return (
        <div
            className={styles.track}
            style={{ backgroundImage: `url(${album.images.large})` }}
        >
            <ClientLogger data={track} name={name} />
            <div className={styles.content}>
                <Image
                    src={album.images.large}
                    alt={album.name}
                    height={60}
                    width={60}
                    className={styles.image}
                />

                <div className={styles.details}>
                    <div className={styles.name}>
                        <Link href={`/tracks/${id}`}>{name}</Link>
                    </div>
                    <div className={styles.meta}>
                        <LinkedArtists artists={artists} /> •{' '}
                        <LinkedAlbum album={album} />
                    </div>
                </div>
                <div className={styles.data}>
                    {/* {audioFeatures && (
                        <div className={styles.audioFeatures}>
                            <AudioFeature
                                feature="acousticness"
                                value={audioFeatures.acousticness}
                            />
                            <AudioFeature
                                feature="danceability"
                                value={audioFeatures.danceability}
                            />
                            <AudioFeature
                                feature="energy"
                                value={audioFeatures.energy}
                            />
                            <AudioFeature
                                feature="instrumentalness"
                                value={audioFeatures.instrumentalness}
                            />
                            <AudioFeature feature="key" />
                            <AudioFeature
                                feature="liveness"
                                value={audioFeatures.liveness}
                            />
                            <AudioFeature
                                feature="loudness"
                                value={audioFeatures.loudness}
                            />
                            <AudioFeature feature="mode" />
                            <AudioFeature
                                feature="tempo"
                                value={audioFeatures.tempo}
                            />
                            <AudioFeature
                                feature="valence"
                                value={audioFeatures.valence}
                            />
                            <Icon icon="Info" size="1rem" />
                        </div>
                    )} */}
                    <TimeText durationMs={durationMs} title="Track length" />
                </div>
            </div>
        </div>
    );
};
