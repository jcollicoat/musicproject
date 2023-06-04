import { SpotifyTrack } from '@spotify/types/tracks.types';

export const Track: SpotifyTrack = {
    album: {
        album_type: 'single',
        artists: [
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/7yibHBJHi3LZD0uvWAdyya',
                },
                href: 'https://api.spotify.com/v1/artists/7yibHBJHi3LZD0uvWAdyya',
                id: '7yibHBJHi3LZD0uvWAdyya',
                name: 'Coeus',
                type: 'artist',
                uri: 'spotify:artist:7yibHBJHi3LZD0uvWAdyya',
            },
        ],
        available_markets: ['AD', 'AE', 'AG'],
        external_urls: {
            spotify: 'https://open.spotify.com/album/3XFsr5IXqQh3n7tg8nzP9d',
        },
        href: 'https://api.spotify.com/v1/albums/3XFsr5IXqQh3n7tg8nzP9d',
        id: '3XFsr5IXqQh3n7tg8nzP9d',
        images: [
            {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b2737587e967c2e4d954b13ce054',
                width: 640,
            },
            {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e027587e967c2e4d954b13ce054',
                width: 300,
            },
            {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d000048517587e967c2e4d954b13ce054',
                width: 64,
            },
        ],
        name: 'Mars Express',
        release_date: '2022-08-26',
        release_date_precision: 'day',
        total_tracks: 3,
        type: 'album',
        uri: 'spotify:album:3XFsr5IXqQh3n7tg8nzP9d',
    },
    artists: [
        {
            external_urls: {
                spotify:
                    'https://open.spotify.com/artist/7yibHBJHi3LZD0uvWAdyya',
            },
            href: 'https://api.spotify.com/v1/artists/7yibHBJHi3LZD0uvWAdyya',
            id: '7yibHBJHi3LZD0uvWAdyya',
            name: 'Coeus',
            type: 'artist',
            uri: 'spotify:artist:7yibHBJHi3LZD0uvWAdyya',
        },
    ],
    available_markets: ['AR', 'AU', 'AT'],
    disc_number: 1,
    duration_ms: 411178,
    explicit: false,
    external_ids: {
        isrc: 'DEY472276120',
    },
    external_urls: {
        spotify: 'https://open.spotify.com/track/6pLId3BTsBZO9uec6j6fe6',
    },
    href: 'https://api.spotify.com/v1/tracks/6pLId3BTsBZO9uec6j6fe6',
    id: '6pLId3BTsBZO9uec6j6fe6',
    is_local: false,
    name: 'Mars Express',
    popularity: 36,
    preview_url:
        'https://p.scdn.co/mp3-preview/8951fb3a295212708218107f6d6570005f2aa781?cid=918fdfaf405e4320abbbdf7cc10fd935',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:6pLId3BTsBZO9uec6j6fe6',
};
