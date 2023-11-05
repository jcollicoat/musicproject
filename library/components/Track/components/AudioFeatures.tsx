import { FC } from 'react';
import { AudioFeature } from '@components/AudioFeature/AudioFeature';
import { Icon } from '@components/Icon/Icon';
import { AudioFeatures as Props } from '@music/types/tracks.types';
import styles from './AudioFeatures.module.scss';

export const AudioFeatures: FC<Props> = ({
    acousticness,
    danceability,
    energy,
    instrumentalness,
    // key,
    liveness,
    loudness,
    // mode,
    tempo,
    valence,
}) => {
    return (
        <div className={styles.wrapper}>
            <Icon icon="Info" size="1rem" />
            <AudioFeature feature="acousticness" value={acousticness} />
            <AudioFeature feature="danceability" value={danceability} />
            <AudioFeature feature="energy" value={energy} />
            <AudioFeature feature="instrumentalness" value={instrumentalness} />
            <AudioFeature feature="key" />
            <AudioFeature feature="liveness" value={liveness} />
            <AudioFeature feature="loudness" value={loudness} />
            <AudioFeature feature="mode" />
            <AudioFeature feature="tempo" value={tempo} />
            <AudioFeature feature="valence" value={valence} />
        </div>
    );
};
