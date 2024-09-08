import Image from 'next/image';
import { FC } from 'react';
import { titleCase } from '@api/helpers';
import { Icon } from '@components/Icon/Icon';
import { Panel } from '@components/Panel/Panel';
import { music } from '@music/api';
import styles from './ArtistPanel.module.scss';

interface Props {
    artistId: string;
}

export const ArtistPanel: FC<Props> = async ({ artistId }) => {
    const artist = await music.artistId(artistId);

    return (
        <Panel element="div" backgroundImage={artist.images?.large}>
            <div className={styles.content}>
                {artist.images && (
                    <Image
                        src={artist.images.large}
                        alt={artist.name}
                        height={160}
                        width={160}
                        className={styles.image}
                    />
                )}
                <div className={styles.details}>
                    <h1>{artist.name}</h1>
                    <div className={styles.section}>
                        <div className={styles.followers}>
                            <Icon icon="Star" />
                            <span>{artist.followers} followers</span>
                        </div>
                    </div>
                    <div className={styles.section}>
                        {artist.genres && (
                            <div className={styles.genres}>
                                <Icon icon="MusicNote" />
                                <span>
                                    {artist.genres.map(
                                        (genre, index) =>
                                            `${titleCase(genre)}` +
                                            (index !==
                                            (artist.genres?.length ?? 0) - 1
                                                ? ', '
                                                : ''),
                                    )}
                                </span>
                            </div>
                        )}
                        <div className={styles.popularity}>
                            <Icon icon="Heart" />
                            <span>{artist.popularity}/100</span>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
