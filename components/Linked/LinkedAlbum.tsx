import Link from 'next/link';
import { FC } from 'react';

interface Props {
    album: {
        id: string;
        name: string;
    };
}

export const LinkedAlbum: FC<Props> = ({ album }) => {
    return <Link href={`/albums/${album.id}`}>{album.name}</Link>;
};
