import Link from 'next/link';
import { FC, Fragment } from 'react';

interface Props {
    artists: { id: string; name: string }[];
}

export const LinkedArtists: FC<Props> = ({ artists }) => {
    return (
        <span>
            {artists.map((artist, index) => (
                <Fragment key={artist.id}>
                    <Link href={`/artists/${artist.id}`}>{artist.name}</Link>
                    {index !== artists.length - 1 && <>, </>}
                </Fragment>
            ))}
        </span>
    );
};
