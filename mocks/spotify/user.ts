import {
    SpotifyFollowedArtists,
    SpotifyRecentlyPlayed,
    SpotifyUser,
} from '@spotify/types/user.types';

export const User: SpotifyUser = {
    country: 'NZ',
    display_name: 'Joe Collicoat',
    email: 'jcollicoat@gmail.com',
    explicit_content: {
        filter_enabled: false,
        filter_locked: false,
    },
    external_urls: {
        spotify: 'https://open.spotify.com/user/jcollicoat',
    },
    followers: {
        href: null,
        total: 19,
    },
    href: 'https://api.spotify.com/v1/users/jcollicoat',
    id: 'jcollicoat',
    images: [
        {
            height: null,
            url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=869186466440703&height=300&width=300&ext=1688426805&hash=AeT8atD7UtnKW9eEB_4',
            width: null,
        },
    ],
    product: 'premium',
    type: 'user',
    uri: 'spotify:user:jcollicoat',
};

export const FollowedArtists: SpotifyFollowedArtists = {
    artists: {
        items: [
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
                },
                followers: {
                    href: null,
                    total: 102868,
                },
                genres: ['minimal melodic techno'],
                href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
                id: '1FY8kqUQKHwjibwLbp5cey',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ab6761610000e5eb57f7d5f02f5e54076461828b',
                        width: 640,
                    },
                    {
                        height: 320,
                        url: 'https://i.scdn.co/image/ab6761610000517457f7d5f02f5e54076461828b',
                        width: 320,
                    },
                    {
                        height: 160,
                        url: 'https://i.scdn.co/image/ab6761610000f17857f7d5f02f5e54076461828b',
                        width: 160,
                    },
                ],
                name: 'Eelke Kleijn',
                popularity: 56,
                type: 'artist',
                uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
            },
        ],
        next: null,
        total: 1,
        cursors: {
            after: null,
        },
        limit: 20,
        href: 'https://api.spotify.com/v1/me/following?type=artist&limit=20',
    },
};

export const RecentlyPlayed: SpotifyRecentlyPlayed = {
    items: [
        {
            track: {
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
                        spotify:
                            'https://open.spotify.com/album/3XFsr5IXqQh3n7tg8nzP9d',
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
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 411178,
                explicit: false,
                external_ids: {
                    isrc: 'DEY472276120',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/6pLId3BTsBZO9uec6j6fe6',
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
            },
            played_at: '2023-06-04T02:21:14.196Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/6D1PUSzHf2Z4jTFIdhjJoO',
                            },
                            href: 'https://api.spotify.com/v1/artists/6D1PUSzHf2Z4jTFIdhjJoO',
                            id: '6D1PUSzHf2Z4jTFIdhjJoO',
                            name: 'Enamour',
                            type: 'artist',
                            uri: 'spotify:artist:6D1PUSzHf2Z4jTFIdhjJoO',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/2Chh5sQAIYfpnVVgGiORRf',
                    },
                    href: 'https://api.spotify.com/v1/albums/2Chh5sQAIYfpnVVgGiORRf',
                    id: '2Chh5sQAIYfpnVVgGiORRf',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2731ec2707a451835a06964aab6',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e021ec2707a451835a06964aab6',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048511ec2707a451835a06964aab6',
                            width: 64,
                        },
                    ],
                    name: 'Revelator EP',
                    release_date: '2022-09-20',
                    release_date_precision: 'day',
                    total_tracks: 7,
                    type: 'album',
                    uri: 'spotify:album:2Chh5sQAIYfpnVVgGiORRf',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/6D1PUSzHf2Z4jTFIdhjJoO',
                        },
                        href: 'https://api.spotify.com/v1/artists/6D1PUSzHf2Z4jTFIdhjJoO',
                        id: '6D1PUSzHf2Z4jTFIdhjJoO',
                        name: 'Enamour',
                        type: 'artist',
                        uri: 'spotify:artist:6D1PUSzHf2Z4jTFIdhjJoO',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 366727,
                explicit: false,
                external_ids: {
                    isrc: 'GBEWA2205313',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/6HXmurX4hfRfbnjHF68vaJ',
                },
                href: 'https://api.spotify.com/v1/tracks/6HXmurX4hfRfbnjHF68vaJ',
                id: '6HXmurX4hfRfbnjHF68vaJ',
                is_local: false,
                name: 'Healer - Sunrise Dub',
                popularity: 12,
                preview_url:
                    'https://p.scdn.co/mp3-preview/c02beabb5cea112cf7af05887356d6af58816067?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 4,
                type: 'track',
                uri: 'spotify:track:6HXmurX4hfRfbnjHF68vaJ',
            },
            played_at: '2023-06-04T02:14:21.732Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'album',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/1kR99O4MgSTasyeJh8UFCg',
                            },
                            href: 'https://api.spotify.com/v1/artists/1kR99O4MgSTasyeJh8UFCg',
                            id: '1kR99O4MgSTasyeJh8UFCg',
                            name: 'DJ Koze',
                            type: 'artist',
                            uri: 'spotify:artist:1kR99O4MgSTasyeJh8UFCg',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/0sT4nyNxsvGNQr1O8OR83O',
                    },
                    href: 'https://api.spotify.com/v1/albums/0sT4nyNxsvGNQr1O8OR83O',
                    id: '0sT4nyNxsvGNQr1O8OR83O',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2737a4ffc6739a18161ddf02826',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e027a4ffc6739a18161ddf02826',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048517a4ffc6739a18161ddf02826',
                            width: 64,
                        },
                    ],
                    name: 'Knock Knock',
                    release_date: '2018-05-04',
                    release_date_precision: 'day',
                    total_tracks: 16,
                    type: 'album',
                    uri: 'spotify:album:0sT4nyNxsvGNQr1O8OR83O',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/1kR99O4MgSTasyeJh8UFCg',
                        },
                        href: 'https://api.spotify.com/v1/artists/1kR99O4MgSTasyeJh8UFCg',
                        id: '1kR99O4MgSTasyeJh8UFCg',
                        name: 'DJ Koze',
                        type: 'artist',
                        uri: 'spotify:artist:1kR99O4MgSTasyeJh8UFCg',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 398150,
                explicit: false,
                external_ids: {
                    isrc: 'DEMM11800008',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/5YzBL3vkQnp3JbeDRRSbSQ',
                },
                href: 'https://api.spotify.com/v1/tracks/5YzBL3vkQnp3JbeDRRSbSQ',
                id: '5YzBL3vkQnp3JbeDRRSbSQ',
                is_local: false,
                name: 'Pick Up',
                popularity: 55,
                preview_url:
                    'https://p.scdn.co/mp3-preview/5c59ba9062f0cb83ced703e6c93b18b7a20941c2?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 8,
                type: 'track',
                uri: 'spotify:track:5YzBL3vkQnp3JbeDRRSbSQ',
            },
            played_at: '2023-06-04T02:04:03.136Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/3LHqODf1hGAgZ5LTw1Gf4C',
                            },
                            href: 'https://api.spotify.com/v1/artists/3LHqODf1hGAgZ5LTw1Gf4C',
                            id: '3LHqODf1hGAgZ5LTw1Gf4C',
                            name: 'Acid Pauli',
                            type: 'artist',
                            uri: 'spotify:artist:3LHqODf1hGAgZ5LTw1Gf4C',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/2JEqpjNRR0WwzV5gcC3IA1',
                    },
                    href: 'https://api.spotify.com/v1/albums/2JEqpjNRR0WwzV5gcC3IA1',
                    id: '2JEqpjNRR0WwzV5gcC3IA1',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273239faf5369a7737cf076c714',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02239faf5369a7737cf076c714',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851239faf5369a7737cf076c714',
                            width: 64,
                        },
                    ],
                    name: 'MOD Remixes, Pt. 2',
                    release_date: '2022-03-11',
                    release_date_precision: 'day',
                    total_tracks: 5,
                    type: 'album',
                    uri: 'spotify:album:2JEqpjNRR0WwzV5gcC3IA1',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/3LHqODf1hGAgZ5LTw1Gf4C',
                        },
                        href: 'https://api.spotify.com/v1/artists/3LHqODf1hGAgZ5LTw1Gf4C',
                        id: '3LHqODf1hGAgZ5LTw1Gf4C',
                        name: 'Acid Pauli',
                        type: 'artist',
                        uri: 'spotify:artist:3LHqODf1hGAgZ5LTw1Gf4C',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/6vJvFV1A2CpT8s5B1oUN6t',
                        },
                        href: 'https://api.spotify.com/v1/artists/6vJvFV1A2CpT8s5B1oUN6t',
                        id: '6vJvFV1A2CpT8s5B1oUN6t',
                        name: 'DJ Tennis',
                        type: 'artist',
                        uri: 'spotify:artist:6vJvFV1A2CpT8s5B1oUN6t',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 382120,
                explicit: false,
                external_ids: {
                    isrc: 'DEL022207004',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/7cH733VnN4AjrqFdd636pf',
                },
                href: 'https://api.spotify.com/v1/tracks/7cH733VnN4AjrqFdd636pf',
                id: '7cH733VnN4AjrqFdd636pf',
                is_local: false,
                name: 'No Kick, No Cry - DJ Tennis Remix',
                popularity: 14,
                preview_url:
                    'https://p.scdn.co/mp3-preview/6d719e262b26e22d7e544e71ab4e4a6640a2520c?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:7cH733VnN4AjrqFdd636pf',
            },
            played_at: '2023-06-04T01:57:24.132Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/36K3zLGi2pB19zIrHtqH80',
                            },
                            href: 'https://api.spotify.com/v1/artists/36K3zLGi2pB19zIrHtqH80',
                            id: '36K3zLGi2pB19zIrHtqH80',
                            name: 'Randall Jones',
                            type: 'artist',
                            uri: 'spotify:artist:36K3zLGi2pB19zIrHtqH80',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/7GK1CK08twDncat1Bxn0Er',
                    },
                    href: 'https://api.spotify.com/v1/albums/7GK1CK08twDncat1Bxn0Er',
                    id: '7GK1CK08twDncat1Bxn0Er',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273599789dc086604e3b9283128',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02599789dc086604e3b9283128',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851599789dc086604e3b9283128',
                            width: 64,
                        },
                    ],
                    name: '64Malibu',
                    release_date: '2021-06-25',
                    release_date_precision: 'day',
                    total_tracks: 3,
                    type: 'album',
                    uri: 'spotify:album:7GK1CK08twDncat1Bxn0Er',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/36K3zLGi2pB19zIrHtqH80',
                        },
                        href: 'https://api.spotify.com/v1/artists/36K3zLGi2pB19zIrHtqH80',
                        id: '36K3zLGi2pB19zIrHtqH80',
                        name: 'Randall Jones',
                        type: 'artist',
                        uri: 'spotify:artist:36K3zLGi2pB19zIrHtqH80',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 440000,
                explicit: false,
                external_ids: {
                    isrc: 'UKACT2110387',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/1zJAL2frmp5FBau1X12BEF',
                },
                href: 'https://api.spotify.com/v1/tracks/1zJAL2frmp5FBau1X12BEF',
                id: '1zJAL2frmp5FBau1X12BEF',
                is_local: false,
                name: "She's Vibing - Original Mix",
                popularity: 2,
                preview_url:
                    'https://p.scdn.co/mp3-preview/1ffa7a7c6800176a169da2007495f2ac70c5455c?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 3,
                type: 'track',
                uri: 'spotify:track:1zJAL2frmp5FBau1X12BEF',
            },
            played_at: '2023-06-04T01:51:02.004Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/0f5WhR4J5QIfykB15aOKNK',
                            },
                            href: 'https://api.spotify.com/v1/artists/0f5WhR4J5QIfykB15aOKNK',
                            id: '0f5WhR4J5QIfykB15aOKNK',
                            name: 'C.A.R.',
                            type: 'artist',
                            uri: 'spotify:artist:0f5WhR4J5QIfykB15aOKNK',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/5OvpF1A65DXs93M9NfPIjT',
                            },
                            href: 'https://api.spotify.com/v1/artists/5OvpF1A65DXs93M9NfPIjT',
                            id: '5OvpF1A65DXs93M9NfPIjT',
                            name: 'Patrice Bäumel',
                            type: 'artist',
                            uri: 'spotify:artist:5OvpF1A65DXs93M9NfPIjT',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/6UPVj3NhHtWqzaF2uglvfF',
                    },
                    href: 'https://api.spotify.com/v1/albums/6UPVj3NhHtWqzaF2uglvfF',
                    id: '6UPVj3NhHtWqzaF2uglvfF',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273b73cc2fe48f96c662e7908b4',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02b73cc2fe48f96c662e7908b4',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851b73cc2fe48f96c662e7908b4',
                            width: 64,
                        },
                    ],
                    name: 'Four Down',
                    release_date: '2023-02-10',
                    release_date_precision: 'day',
                    total_tracks: 2,
                    type: 'album',
                    uri: 'spotify:album:6UPVj3NhHtWqzaF2uglvfF',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/0f5WhR4J5QIfykB15aOKNK',
                        },
                        href: 'https://api.spotify.com/v1/artists/0f5WhR4J5QIfykB15aOKNK',
                        id: '0f5WhR4J5QIfykB15aOKNK',
                        name: 'C.A.R.',
                        type: 'artist',
                        uri: 'spotify:artist:0f5WhR4J5QIfykB15aOKNK',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/5OvpF1A65DXs93M9NfPIjT',
                        },
                        href: 'https://api.spotify.com/v1/artists/5OvpF1A65DXs93M9NfPIjT',
                        id: '5OvpF1A65DXs93M9NfPIjT',
                        name: 'Patrice Bäumel',
                        type: 'artist',
                        uri: 'spotify:artist:5OvpF1A65DXs93M9NfPIjT',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 393476,
                explicit: false,
                external_ids: {
                    isrc: 'DEU672201447',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/0rmV1kRnWiYYr7WeKEDtEU',
                },
                href: 'https://api.spotify.com/v1/tracks/0rmV1kRnWiYYr7WeKEDtEU',
                id: '0rmV1kRnWiYYr7WeKEDtEU',
                is_local: false,
                name: 'Four Down - Club Mix',
                popularity: 28,
                preview_url:
                    'https://p.scdn.co/mp3-preview/e18ac1198a6e6c73d68ab3dd20f5f08b839c4e84?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:0rmV1kRnWiYYr7WeKEDtEU',
            },
            played_at: '2023-06-04T01:43:41.530Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/0GG2cWaonE4JPrjcCCQ1EG',
                            },
                            href: 'https://api.spotify.com/v1/artists/0GG2cWaonE4JPrjcCCQ1EG',
                            id: '0GG2cWaonE4JPrjcCCQ1EG',
                            name: 'SG Lewis',
                            type: 'artist',
                            uri: 'spotify:artist:0GG2cWaonE4JPrjcCCQ1EG',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/6UE7nl9mha6s8z0wFQFIZ2',
                            },
                            href: 'https://api.spotify.com/v1/artists/6UE7nl9mha6s8z0wFQFIZ2',
                            id: '6UE7nl9mha6s8z0wFQFIZ2',
                            name: 'Robyn',
                            type: 'artist',
                            uri: 'spotify:artist:6UE7nl9mha6s8z0wFQFIZ2',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/4cUkGQyhLFqKHBtL58HYVp',
                            },
                            href: 'https://api.spotify.com/v1/artists/4cUkGQyhLFqKHBtL58HYVp',
                            id: '4cUkGQyhLFqKHBtL58HYVp',
                            name: 'Channel Tres',
                            type: 'artist',
                            uri: 'spotify:artist:4cUkGQyhLFqKHBtL58HYVp',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/57KnQqHMB2x5OFcvnm6G8U',
                    },
                    href: 'https://api.spotify.com/v1/albums/57KnQqHMB2x5OFcvnm6G8U',
                    id: '57KnQqHMB2x5OFcvnm6G8U',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273ece2cec44a2fc4937d9b668f',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02ece2cec44a2fc4937d9b668f',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851ece2cec44a2fc4937d9b668f',
                            width: 64,
                        },
                    ],
                    name: 'Impact (Soulwax Remix)',
                    release_date: '2020-09-18',
                    release_date_precision: 'day',
                    total_tracks: 3,
                    type: 'album',
                    uri: 'spotify:album:57KnQqHMB2x5OFcvnm6G8U',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/0GG2cWaonE4JPrjcCCQ1EG',
                        },
                        href: 'https://api.spotify.com/v1/artists/0GG2cWaonE4JPrjcCCQ1EG',
                        id: '0GG2cWaonE4JPrjcCCQ1EG',
                        name: 'SG Lewis',
                        type: 'artist',
                        uri: 'spotify:artist:0GG2cWaonE4JPrjcCCQ1EG',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/6UE7nl9mha6s8z0wFQFIZ2',
                        },
                        href: 'https://api.spotify.com/v1/artists/6UE7nl9mha6s8z0wFQFIZ2',
                        id: '6UE7nl9mha6s8z0wFQFIZ2',
                        name: 'Robyn',
                        type: 'artist',
                        uri: 'spotify:artist:6UE7nl9mha6s8z0wFQFIZ2',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/4cUkGQyhLFqKHBtL58HYVp',
                        },
                        href: 'https://api.spotify.com/v1/artists/4cUkGQyhLFqKHBtL58HYVp',
                        id: '4cUkGQyhLFqKHBtL58HYVp',
                        name: 'Channel Tres',
                        type: 'artist',
                        uri: 'spotify:artist:4cUkGQyhLFqKHBtL58HYVp',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/43mWhBXSflupNLuNjM5vff',
                        },
                        href: 'https://api.spotify.com/v1/artists/43mWhBXSflupNLuNjM5vff',
                        id: '43mWhBXSflupNLuNjM5vff',
                        name: 'Soulwax',
                        type: 'artist',
                        uri: 'spotify:artist:43mWhBXSflupNLuNjM5vff',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 383730,
                explicit: true,
                external_ids: {
                    isrc: 'GBUM72004913',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/2znGP0jPT9Z50JhNE16Zx1',
                },
                href: 'https://api.spotify.com/v1/tracks/2znGP0jPT9Z50JhNE16Zx1',
                id: '2znGP0jPT9Z50JhNE16Zx1',
                is_local: false,
                name: 'Impact - Soulwax Remix',
                popularity: 31,
                preview_url:
                    'https://p.scdn.co/mp3-preview/11d14ccd9a0ccf16110a8408b2a0b6951435134f?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:2znGP0jPT9Z50JhNE16Zx1',
            },
            played_at: '2023-06-04T01:37:07.711Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/5XFQLyJekhzCO7PiTqboOB',
                            },
                            href: 'https://api.spotify.com/v1/artists/5XFQLyJekhzCO7PiTqboOB',
                            id: '5XFQLyJekhzCO7PiTqboOB',
                            name: 'Robert Babicz',
                            type: 'artist',
                            uri: 'spotify:artist:5XFQLyJekhzCO7PiTqboOB',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/0vClj7nDFd3J6mRKNmdZ0O',
                            },
                            href: 'https://api.spotify.com/v1/artists/0vClj7nDFd3J6mRKNmdZ0O',
                            id: '0vClj7nDFd3J6mRKNmdZ0O',
                            name: 'James Harcourt',
                            type: 'artist',
                            uri: 'spotify:artist:0vClj7nDFd3J6mRKNmdZ0O',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/0mgtgQd5C8lbXp7hfsSwbe',
                    },
                    href: 'https://api.spotify.com/v1/albums/0mgtgQd5C8lbXp7hfsSwbe',
                    id: '0mgtgQd5C8lbXp7hfsSwbe',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273125dd21649447fd0c53e4525',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02125dd21649447fd0c53e4525',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851125dd21649447fd0c53e4525',
                            width: 64,
                        },
                    ],
                    name: 'Red (James Harcourt Remix)',
                    release_date: '2022-07-29',
                    release_date_precision: 'day',
                    total_tracks: 1,
                    type: 'album',
                    uri: 'spotify:album:0mgtgQd5C8lbXp7hfsSwbe',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/5XFQLyJekhzCO7PiTqboOB',
                        },
                        href: 'https://api.spotify.com/v1/artists/5XFQLyJekhzCO7PiTqboOB',
                        id: '5XFQLyJekhzCO7PiTqboOB',
                        name: 'Robert Babicz',
                        type: 'artist',
                        uri: 'spotify:artist:5XFQLyJekhzCO7PiTqboOB',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/0vClj7nDFd3J6mRKNmdZ0O',
                        },
                        href: 'https://api.spotify.com/v1/artists/0vClj7nDFd3J6mRKNmdZ0O',
                        id: '0vClj7nDFd3J6mRKNmdZ0O',
                        name: 'James Harcourt',
                        type: 'artist',
                        uri: 'spotify:artist:0vClj7nDFd3J6mRKNmdZ0O',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 425962,
                explicit: false,
                external_ids: {
                    isrc: 'DEY472275536',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/1mPcoVJF26uXKgX5qiyy5L',
                },
                href: 'https://api.spotify.com/v1/tracks/1mPcoVJF26uXKgX5qiyy5L',
                id: '1mPcoVJF26uXKgX5qiyy5L',
                is_local: false,
                name: 'Red - James Harcourt Remix',
                popularity: 13,
                preview_url:
                    'https://p.scdn.co/mp3-preview/63b4020247476a3eed0863cf7d9abd3991054f99?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:1mPcoVJF26uXKgX5qiyy5L',
            },
            played_at: '2023-06-04T01:30:42.983Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'album',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/3ifxHfYz2pqHku0bwx8H5J',
                            },
                            href: 'https://api.spotify.com/v1/artists/3ifxHfYz2pqHku0bwx8H5J',
                            id: '3ifxHfYz2pqHku0bwx8H5J',
                            name: 'Amtrac',
                            type: 'artist',
                            uri: 'spotify:artist:3ifxHfYz2pqHku0bwx8H5J',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/49qaWr7XitNvgKzobKGiGg',
                    },
                    href: 'https://api.spotify.com/v1/albums/49qaWr7XitNvgKzobKGiGg',
                    id: '49qaWr7XitNvgKzobKGiGg',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b27395cedf95755477756ef438d2',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e0295cedf95755477756ef438d2',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d0000485195cedf95755477756ef438d2',
                            width: 64,
                        },
                    ],
                    name: 'Extra Time',
                    release_date: '2023-02-03',
                    release_date_precision: 'day',
                    total_tracks: 13,
                    type: 'album',
                    uri: 'spotify:album:49qaWr7XitNvgKzobKGiGg',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/3ifxHfYz2pqHku0bwx8H5J',
                        },
                        href: 'https://api.spotify.com/v1/artists/3ifxHfYz2pqHku0bwx8H5J',
                        id: '3ifxHfYz2pqHku0bwx8H5J',
                        name: 'Amtrac',
                        type: 'artist',
                        uri: 'spotify:artist:3ifxHfYz2pqHku0bwx8H5J',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 329520,
                explicit: false,
                external_ids: {
                    isrc: 'QMEFH2310008',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/5gegkmkwzQYuWRTzm00juV',
                },
                href: 'https://api.spotify.com/v1/tracks/5gegkmkwzQYuWRTzm00juV',
                id: '5gegkmkwzQYuWRTzm00juV',
                is_local: false,
                name: 'Little Tokyo',
                popularity: 27,
                preview_url:
                    'https://p.scdn.co/mp3-preview/5967190395bd6e29741b3c7f74dc4a7498686d22?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 8,
                type: 'track',
                uri: 'spotify:track:5gegkmkwzQYuWRTzm00juV',
            },
            played_at: '2023-06-04T01:23:36.615Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/2KjAo6wVc9d2WcxdxSArpV',
                            },
                            href: 'https://api.spotify.com/v1/artists/2KjAo6wVc9d2WcxdxSArpV',
                            id: '2KjAo6wVc9d2WcxdxSArpV',
                            name: 'RY X',
                            type: 'artist',
                            uri: 'spotify:artist:2KjAo6wVc9d2WcxdxSArpV',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/5cphbInHk1qgJQRfFsCLwa',
                    },
                    href: 'https://api.spotify.com/v1/albums/5cphbInHk1qgJQRfFsCLwa',
                    id: '5cphbInHk1qgJQRfFsCLwa',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2734bd8fb377174f4ed4440a566',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e024bd8fb377174f4ed4440a566',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048514bd8fb377174f4ed4440a566',
                            width: 64,
                        },
                    ],
                    name: 'Deliverance (Fort Romeau Remix)',
                    release_date: '2016-05-27',
                    release_date_precision: 'day',
                    total_tracks: 1,
                    type: 'album',
                    uri: 'spotify:album:5cphbInHk1qgJQRfFsCLwa',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/2KjAo6wVc9d2WcxdxSArpV',
                        },
                        href: 'https://api.spotify.com/v1/artists/2KjAo6wVc9d2WcxdxSArpV',
                        id: '2KjAo6wVc9d2WcxdxSArpV',
                        name: 'RY X',
                        type: 'artist',
                        uri: 'spotify:artist:2KjAo6wVc9d2WcxdxSArpV',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/5MKqWyqq5CStK7AhkTvzQF',
                        },
                        href: 'https://api.spotify.com/v1/artists/5MKqWyqq5CStK7AhkTvzQF',
                        id: '5MKqWyqq5CStK7AhkTvzQF',
                        name: 'Fort Romeau',
                        type: 'artist',
                        uri: 'spotify:artist:5MKqWyqq5CStK7AhkTvzQF',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 402042,
                explicit: false,
                external_ids: {
                    isrc: 'GB5KW1600496',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/7fsC39Zr4Q2BZInVD0tgOS',
                },
                href: 'https://api.spotify.com/v1/tracks/7fsC39Zr4Q2BZInVD0tgOS',
                id: '7fsC39Zr4Q2BZInVD0tgOS',
                is_local: false,
                name: 'Deliverance - Fort Romeau Remix',
                popularity: 16,
                preview_url:
                    'https://p.scdn.co/mp3-preview/fb0298e9b3ab49cfe5f8b15cd449894db7a6fe0f?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:7fsC39Zr4Q2BZInVD0tgOS',
            },
            played_at: '2023-06-04T01:18:07.071Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/2AFYG90qx36vqWXgGxhFWY',
                            },
                            href: 'https://api.spotify.com/v1/artists/2AFYG90qx36vqWXgGxhFWY',
                            id: '2AFYG90qx36vqWXgGxhFWY',
                            name: 'Kris Davis',
                            type: 'artist',
                            uri: 'spotify:artist:2AFYG90qx36vqWXgGxhFWY',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/19WfpuODWsvrlHGvZYkigs',
                            },
                            href: 'https://api.spotify.com/v1/artists/19WfpuODWsvrlHGvZYkigs',
                            id: '19WfpuODWsvrlHGvZYkigs',
                            name: 'Fabio Vanore',
                            type: 'artist',
                            uri: 'spotify:artist:19WfpuODWsvrlHGvZYkigs',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/0RzfoJA1VVeYENvFuXLsUq',
                    },
                    href: 'https://api.spotify.com/v1/albums/0RzfoJA1VVeYENvFuXLsUq',
                    id: '0RzfoJA1VVeYENvFuXLsUq',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2734d5fd247c518741e93574fbe',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e024d5fd247c518741e93574fbe',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048514d5fd247c518741e93574fbe',
                            width: 64,
                        },
                    ],
                    name: 'Petroleum (Fabio Vanore Remix)',
                    release_date: '2022-12-16',
                    release_date_precision: 'day',
                    total_tracks: 1,
                    type: 'album',
                    uri: 'spotify:album:0RzfoJA1VVeYENvFuXLsUq',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/2AFYG90qx36vqWXgGxhFWY',
                        },
                        href: 'https://api.spotify.com/v1/artists/2AFYG90qx36vqWXgGxhFWY',
                        id: '2AFYG90qx36vqWXgGxhFWY',
                        name: 'Kris Davis',
                        type: 'artist',
                        uri: 'spotify:artist:2AFYG90qx36vqWXgGxhFWY',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/19WfpuODWsvrlHGvZYkigs',
                        },
                        href: 'https://api.spotify.com/v1/artists/19WfpuODWsvrlHGvZYkigs',
                        id: '19WfpuODWsvrlHGvZYkigs',
                        name: 'Fabio Vanore',
                        type: 'artist',
                        uri: 'spotify:artist:19WfpuODWsvrlHGvZYkigs',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 544957,
                explicit: false,
                external_ids: {
                    isrc: 'DEY472279461',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/1tdQXdkWEp1OreYbLqciFi',
                },
                href: 'https://api.spotify.com/v1/tracks/1tdQXdkWEp1OreYbLqciFi',
                id: '1tdQXdkWEp1OreYbLqciFi',
                is_local: false,
                name: 'Petroleum - Fabio Vanore Remix',
                popularity: 47,
                preview_url:
                    'https://p.scdn.co/mp3-preview/df7493268afcee32ce0bafab18e14b29aca68375?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:1tdQXdkWEp1OreYbLqciFi',
            },
            played_at: '2023-06-04T01:11:24.637Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
                            },
                            href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
                            id: '1FY8kqUQKHwjibwLbp5cey',
                            name: 'Eelke Kleijn',
                            type: 'artist',
                            uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/5g8j8qvBmawAMX6xEVBvkg',
                    },
                    href: 'https://api.spotify.com/v1/albums/5g8j8qvBmawAMX6xEVBvkg',
                    id: '5g8j8qvBmawAMX6xEVBvkg',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2735975f95192803c3d147eff09',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e025975f95192803c3d147eff09',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048515975f95192803c3d147eff09',
                            width: 64,
                        },
                    ],
                    name: 'Lovely Sweet Divine / A Tale Of Two Lovers',
                    release_date: '2014-03-10',
                    release_date_precision: 'day',
                    total_tracks: 3,
                    type: 'album',
                    uri: 'spotify:album:5g8j8qvBmawAMX6xEVBvkg',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
                        },
                        href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
                        id: '1FY8kqUQKHwjibwLbp5cey',
                        name: 'Eelke Kleijn',
                        type: 'artist',
                        uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 473880,
                explicit: false,
                external_ids: {
                    isrc: 'BEN581400018',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/2NgYjeotWFvIIqu3cDv21J',
                },
                href: 'https://api.spotify.com/v1/tracks/2NgYjeotWFvIIqu3cDv21J',
                id: '2NgYjeotWFvIIqu3cDv21J',
                is_local: false,
                name: 'Lovely Sweet Divine',
                popularity: 40,
                preview_url:
                    'https://p.scdn.co/mp3-preview/059a00fedc292901b35e0892ff5bd9b322ae6b57?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:2NgYjeotWFvIIqu3cDv21J',
            },
            played_at: '2023-06-03T13:56:17.785Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/7mFvDmqoNYh1Oj6yDVPbXG',
                },
                href: 'https://api.spotify.com/v1/playlists/7mFvDmqoNYh1Oj6yDVPbXG',
                uri: 'spotify:playlist:7mFvDmqoNYh1Oj6yDVPbXG',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/1LZEQNv7sE11VDY3SdxQeN',
                            },
                            href: 'https://api.spotify.com/v1/artists/1LZEQNv7sE11VDY3SdxQeN',
                            id: '1LZEQNv7sE11VDY3SdxQeN',
                            name: 'Bee Gees',
                            type: 'artist',
                            uri: 'spotify:artist:1LZEQNv7sE11VDY3SdxQeN',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/0GG2cWaonE4JPrjcCCQ1EG',
                            },
                            href: 'https://api.spotify.com/v1/artists/0GG2cWaonE4JPrjcCCQ1EG',
                            id: '0GG2cWaonE4JPrjcCCQ1EG',
                            name: 'SG Lewis',
                            type: 'artist',
                            uri: 'spotify:artist:0GG2cWaonE4JPrjcCCQ1EG',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/2iTmTEm55PIjLdYjDCKh96',
                    },
                    href: 'https://api.spotify.com/v1/albums/2iTmTEm55PIjLdYjDCKh96',
                    id: '2iTmTEm55PIjLdYjDCKh96',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273bd8e2af160f4664d666c4132',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02bd8e2af160f4664d666c4132',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851bd8e2af160f4664d666c4132',
                            width: 64,
                        },
                    ],
                    name: "More Than A Woman (SG's Paradise Edit)",
                    release_date: '2021-06-25',
                    release_date_precision: 'day',
                    total_tracks: 1,
                    type: 'album',
                    uri: 'spotify:album:2iTmTEm55PIjLdYjDCKh96',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/1LZEQNv7sE11VDY3SdxQeN',
                        },
                        href: 'https://api.spotify.com/v1/artists/1LZEQNv7sE11VDY3SdxQeN',
                        id: '1LZEQNv7sE11VDY3SdxQeN',
                        name: 'Bee Gees',
                        type: 'artist',
                        uri: 'spotify:artist:1LZEQNv7sE11VDY3SdxQeN',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/0GG2cWaonE4JPrjcCCQ1EG',
                        },
                        href: 'https://api.spotify.com/v1/artists/0GG2cWaonE4JPrjcCCQ1EG',
                        id: '0GG2cWaonE4JPrjcCCQ1EG',
                        name: 'SG Lewis',
                        type: 'artist',
                        uri: 'spotify:artist:0GG2cWaonE4JPrjcCCQ1EG',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 357936,
                explicit: false,
                external_ids: {
                    isrc: 'USUM72109593',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/0L3XCv9i9IHs8cJEVhsJ3J',
                },
                href: 'https://api.spotify.com/v1/tracks/0L3XCv9i9IHs8cJEVhsJ3J',
                id: '0L3XCv9i9IHs8cJEVhsJ3J',
                is_local: false,
                name: "More Than A Woman - SG's Paradise Edit",
                popularity: 71,
                preview_url:
                    'https://p.scdn.co/mp3-preview/8f290229b4967f20a350caf07c648ce5da12ec0d?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:0L3XCv9i9IHs8cJEVhsJ3J',
            },
            played_at: '2023-06-03T06:50:43.758Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/7mFvDmqoNYh1Oj6yDVPbXG',
                },
                href: 'https://api.spotify.com/v1/playlists/7mFvDmqoNYh1Oj6yDVPbXG',
                uri: 'spotify:playlist:7mFvDmqoNYh1Oj6yDVPbXG',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
                            },
                            href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
                            id: '1FY8kqUQKHwjibwLbp5cey',
                            name: 'Eelke Kleijn',
                            type: 'artist',
                            uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/5g8j8qvBmawAMX6xEVBvkg',
                    },
                    href: 'https://api.spotify.com/v1/albums/5g8j8qvBmawAMX6xEVBvkg',
                    id: '5g8j8qvBmawAMX6xEVBvkg',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2735975f95192803c3d147eff09',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e025975f95192803c3d147eff09',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048515975f95192803c3d147eff09',
                            width: 64,
                        },
                    ],
                    name: 'Lovely Sweet Divine / A Tale Of Two Lovers',
                    release_date: '2014-03-10',
                    release_date_precision: 'day',
                    total_tracks: 3,
                    type: 'album',
                    uri: 'spotify:album:5g8j8qvBmawAMX6xEVBvkg',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/1FY8kqUQKHwjibwLbp5cey',
                        },
                        href: 'https://api.spotify.com/v1/artists/1FY8kqUQKHwjibwLbp5cey',
                        id: '1FY8kqUQKHwjibwLbp5cey',
                        name: 'Eelke Kleijn',
                        type: 'artist',
                        uri: 'spotify:artist:1FY8kqUQKHwjibwLbp5cey',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 473880,
                explicit: false,
                external_ids: {
                    isrc: 'BEN581400018',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/2NgYjeotWFvIIqu3cDv21J',
                },
                href: 'https://api.spotify.com/v1/tracks/2NgYjeotWFvIIqu3cDv21J',
                id: '2NgYjeotWFvIIqu3cDv21J',
                is_local: false,
                name: 'Lovely Sweet Divine',
                popularity: 40,
                preview_url:
                    'https://p.scdn.co/mp3-preview/059a00fedc292901b35e0892ff5bd9b322ae6b57?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:2NgYjeotWFvIIqu3cDv21J',
            },
            played_at: '2023-06-03T06:44:45.294Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/7mFvDmqoNYh1Oj6yDVPbXG',
                },
                href: 'https://api.spotify.com/v1/playlists/7mFvDmqoNYh1Oj6yDVPbXG',
                uri: 'spotify:playlist:7mFvDmqoNYh1Oj6yDVPbXG',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/0GG2cWaonE4JPrjcCCQ1EG',
                            },
                            href: 'https://api.spotify.com/v1/artists/0GG2cWaonE4JPrjcCCQ1EG',
                            id: '0GG2cWaonE4JPrjcCCQ1EG',
                            name: 'SG Lewis',
                            type: 'artist',
                            uri: 'spotify:artist:0GG2cWaonE4JPrjcCCQ1EG',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/6UE7nl9mha6s8z0wFQFIZ2',
                            },
                            href: 'https://api.spotify.com/v1/artists/6UE7nl9mha6s8z0wFQFIZ2',
                            id: '6UE7nl9mha6s8z0wFQFIZ2',
                            name: 'Robyn',
                            type: 'artist',
                            uri: 'spotify:artist:6UE7nl9mha6s8z0wFQFIZ2',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/4cUkGQyhLFqKHBtL58HYVp',
                            },
                            href: 'https://api.spotify.com/v1/artists/4cUkGQyhLFqKHBtL58HYVp',
                            id: '4cUkGQyhLFqKHBtL58HYVp',
                            name: 'Channel Tres',
                            type: 'artist',
                            uri: 'spotify:artist:4cUkGQyhLFqKHBtL58HYVp',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/57KnQqHMB2x5OFcvnm6G8U',
                    },
                    href: 'https://api.spotify.com/v1/albums/57KnQqHMB2x5OFcvnm6G8U',
                    id: '57KnQqHMB2x5OFcvnm6G8U',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273ece2cec44a2fc4937d9b668f',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02ece2cec44a2fc4937d9b668f',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851ece2cec44a2fc4937d9b668f',
                            width: 64,
                        },
                    ],
                    name: 'Impact (Soulwax Remix)',
                    release_date: '2020-09-18',
                    release_date_precision: 'day',
                    total_tracks: 3,
                    type: 'album',
                    uri: 'spotify:album:57KnQqHMB2x5OFcvnm6G8U',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/0GG2cWaonE4JPrjcCCQ1EG',
                        },
                        href: 'https://api.spotify.com/v1/artists/0GG2cWaonE4JPrjcCCQ1EG',
                        id: '0GG2cWaonE4JPrjcCCQ1EG',
                        name: 'SG Lewis',
                        type: 'artist',
                        uri: 'spotify:artist:0GG2cWaonE4JPrjcCCQ1EG',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/6UE7nl9mha6s8z0wFQFIZ2',
                        },
                        href: 'https://api.spotify.com/v1/artists/6UE7nl9mha6s8z0wFQFIZ2',
                        id: '6UE7nl9mha6s8z0wFQFIZ2',
                        name: 'Robyn',
                        type: 'artist',
                        uri: 'spotify:artist:6UE7nl9mha6s8z0wFQFIZ2',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/4cUkGQyhLFqKHBtL58HYVp',
                        },
                        href: 'https://api.spotify.com/v1/artists/4cUkGQyhLFqKHBtL58HYVp',
                        id: '4cUkGQyhLFqKHBtL58HYVp',
                        name: 'Channel Tres',
                        type: 'artist',
                        uri: 'spotify:artist:4cUkGQyhLFqKHBtL58HYVp',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/43mWhBXSflupNLuNjM5vff',
                        },
                        href: 'https://api.spotify.com/v1/artists/43mWhBXSflupNLuNjM5vff',
                        id: '43mWhBXSflupNLuNjM5vff',
                        name: 'Soulwax',
                        type: 'artist',
                        uri: 'spotify:artist:43mWhBXSflupNLuNjM5vff',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 383730,
                explicit: true,
                external_ids: {
                    isrc: 'GBUM72004913',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/2znGP0jPT9Z50JhNE16Zx1',
                },
                href: 'https://api.spotify.com/v1/tracks/2znGP0jPT9Z50JhNE16Zx1',
                id: '2znGP0jPT9Z50JhNE16Zx1',
                is_local: false,
                name: 'Impact - Soulwax Remix',
                popularity: 31,
                preview_url:
                    'https://p.scdn.co/mp3-preview/11d14ccd9a0ccf16110a8408b2a0b6951435134f?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:2znGP0jPT9Z50JhNE16Zx1',
            },
            played_at: '2023-06-03T06:36:53.221Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'album',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/3JsMj0DEzyWc0VDlHuy9Bx',
                            },
                            href: 'https://api.spotify.com/v1/artists/3JsMj0DEzyWc0VDlHuy9Bx',
                            id: '3JsMj0DEzyWc0VDlHuy9Bx',
                            name: 'Supertramp',
                            type: 'artist',
                            uri: 'spotify:artist:3JsMj0DEzyWc0VDlHuy9Bx',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/4p0XFT3wsFk8P4rK8PhKqM',
                    },
                    href: 'https://api.spotify.com/v1/albums/4p0XFT3wsFk8P4rK8PhKqM',
                    id: '4p0XFT3wsFk8P4rK8PhKqM',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2736c07aa29a541c11d913ba3e8',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e026c07aa29a541c11d913ba3e8',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048516c07aa29a541c11d913ba3e8',
                            width: 64,
                        },
                    ],
                    name: 'Brother Where You Bound (Remastered)',
                    release_date: '1985-05-14',
                    release_date_precision: 'day',
                    total_tracks: 6,
                    type: 'album',
                    uri: 'spotify:album:4p0XFT3wsFk8P4rK8PhKqM',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/3JsMj0DEzyWc0VDlHuy9Bx',
                        },
                        href: 'https://api.spotify.com/v1/artists/3JsMj0DEzyWc0VDlHuy9Bx',
                        id: '3JsMj0DEzyWc0VDlHuy9Bx',
                        name: 'Supertramp',
                        type: 'artist',
                        uri: 'spotify:artist:3JsMj0DEzyWc0VDlHuy9Bx',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 458083,
                explicit: false,
                external_ids: {
                    isrc: 'USAM19500636',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/7AW4T7G3e8VsZ8D7jV1hMr',
                },
                href: 'https://api.spotify.com/v1/tracks/7AW4T7G3e8VsZ8D7jV1hMr',
                id: '7AW4T7G3e8VsZ8D7jV1hMr',
                is_local: false,
                name: 'Cannonball',
                popularity: 45,
                preview_url:
                    'https://p.scdn.co/mp3-preview/4366c6917ce85b406a6bfac3bc1f6057edc38b3c?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:7AW4T7G3e8VsZ8D7jV1hMr',
            },
            played_at: '2023-06-03T05:13:02.089Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/0vSfjPjAbekoehCpmy1RV1',
                            },
                            href: 'https://api.spotify.com/v1/artists/0vSfjPjAbekoehCpmy1RV1',
                            id: '0vSfjPjAbekoehCpmy1RV1',
                            name: 'Shakedown',
                            type: 'artist',
                            uri: 'spotify:artist:0vSfjPjAbekoehCpmy1RV1',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/4F5OnBWfJa7YfjRZ86bZc8',
                    },
                    href: 'https://api.spotify.com/v1/albums/4F5OnBWfJa7YfjRZ86bZc8',
                    id: '4F5OnBWfJa7YfjRZ86bZc8',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2738935a5af7c581f1e2c9df890',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e028935a5af7c581f1e2c9df890',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048518935a5af7c581f1e2c9df890',
                            width: 64,
                        },
                    ],
                    name: 'At Night (Remixes)',
                    release_date: '2018-07-06',
                    release_date_precision: 'day',
                    total_tracks: 3,
                    type: 'album',
                    uri: 'spotify:album:4F5OnBWfJa7YfjRZ86bZc8',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/0vSfjPjAbekoehCpmy1RV1',
                        },
                        href: 'https://api.spotify.com/v1/artists/0vSfjPjAbekoehCpmy1RV1',
                        id: '0vSfjPjAbekoehCpmy1RV1',
                        name: 'Shakedown',
                        type: 'artist',
                        uri: 'spotify:artist:0vSfjPjAbekoehCpmy1RV1',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 419768,
                explicit: false,
                external_ids: {
                    isrc: 'CH2721800001',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/4cRzA4R5uIFbFyLBpcJfgN',
                },
                href: 'https://api.spotify.com/v1/tracks/4cRzA4R5uIFbFyLBpcJfgN',
                id: '4cRzA4R5uIFbFyLBpcJfgN',
                is_local: false,
                name: "At Night - Shakedown's Galactic Boogie",
                popularity: 37,
                preview_url:
                    'https://p.scdn.co/mp3-preview/e1c5883016d507f8285f3efd5eb09b633d25c8af?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 3,
                type: 'track',
                uri: 'spotify:track:4cRzA4R5uIFbFyLBpcJfgN',
            },
            played_at: '2023-06-03T05:05:23.803Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/0BIEy45aaKCjwertpSGy4K',
                            },
                            href: 'https://api.spotify.com/v1/artists/0BIEy45aaKCjwertpSGy4K',
                            id: '0BIEy45aaKCjwertpSGy4K',
                            name: 'Franz Matthews',
                            type: 'artist',
                            uri: 'spotify:artist:0BIEy45aaKCjwertpSGy4K',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/3Pj0WcDp7Df123RzhrTohk',
                            },
                            href: 'https://api.spotify.com/v1/artists/3Pj0WcDp7Df123RzhrTohk',
                            id: '3Pj0WcDp7Df123RzhrTohk',
                            name: 'Aera',
                            type: 'artist',
                            uri: 'spotify:artist:3Pj0WcDp7Df123RzhrTohk',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/2ZbM7ypKR8jIF6sfyI54Kz',
                            },
                            href: 'https://api.spotify.com/v1/artists/2ZbM7ypKR8jIF6sfyI54Kz',
                            id: '2ZbM7ypKR8jIF6sfyI54Kz',
                            name: 'The Organism',
                            type: 'artist',
                            uri: 'spotify:artist:2ZbM7ypKR8jIF6sfyI54Kz',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/54RKhRE5WtmYPBnkzCLtuz',
                    },
                    href: 'https://api.spotify.com/v1/albums/54RKhRE5WtmYPBnkzCLtuz',
                    id: '54RKhRE5WtmYPBnkzCLtuz',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273f99c2ee5a2848ef8d691cc40',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02f99c2ee5a2848ef8d691cc40',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851f99c2ee5a2848ef8d691cc40',
                            width: 64,
                        },
                    ],
                    name: 'The Question',
                    release_date: '2022-01-28',
                    release_date_precision: 'day',
                    total_tracks: 5,
                    type: 'album',
                    uri: 'spotify:album:54RKhRE5WtmYPBnkzCLtuz',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/0BIEy45aaKCjwertpSGy4K',
                        },
                        href: 'https://api.spotify.com/v1/artists/0BIEy45aaKCjwertpSGy4K',
                        id: '0BIEy45aaKCjwertpSGy4K',
                        name: 'Franz Matthews',
                        type: 'artist',
                        uri: 'spotify:artist:0BIEy45aaKCjwertpSGy4K',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/6HecwOiicwDucFZdQL2non',
                        },
                        href: 'https://api.spotify.com/v1/artists/6HecwOiicwDucFZdQL2non',
                        id: '6HecwOiicwDucFZdQL2non',
                        name: 'Jonathan Lehmann',
                        type: 'artist',
                        uri: 'spotify:artist:6HecwOiicwDucFZdQL2non',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 465305,
                explicit: false,
                external_ids: {
                    isrc: 'US83Z2149717',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/0bkT2iDp5gp0vZiVWjXsCJ',
                },
                href: 'https://api.spotify.com/v1/tracks/0bkT2iDp5gp0vZiVWjXsCJ',
                id: '0bkT2iDp5gp0vZiVWjXsCJ',
                is_local: false,
                name: 'The Question',
                popularity: 7,
                preview_url:
                    'https://p.scdn.co/mp3-preview/a2fc4f18446b4bdf1861f56bbeb2d6e70f94fca6?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:0bkT2iDp5gp0vZiVWjXsCJ',
            },
            played_at: '2023-06-03T04:58:23.279Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/01pAc8SomyAjj2fAncChyZ',
                            },
                            href: 'https://api.spotify.com/v1/artists/01pAc8SomyAjj2fAncChyZ',
                            id: '01pAc8SomyAjj2fAncChyZ',
                            name: 'Peter Makto',
                            type: 'artist',
                            uri: 'spotify:artist:01pAc8SomyAjj2fAncChyZ',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/1Ni9Rg8pHQZ9pNjo5zh7KH',
                    },
                    href: 'https://api.spotify.com/v1/albums/1Ni9Rg8pHQZ9pNjo5zh7KH',
                    id: '1Ni9Rg8pHQZ9pNjo5zh7KH',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273e04c47d7b50a57afc3f3e3ee',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02e04c47d7b50a57afc3f3e3ee',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851e04c47d7b50a57afc3f3e3ee',
                            width: 64,
                        },
                    ],
                    name: 'Sharp Lines EP',
                    release_date: '2018-04-09',
                    release_date_precision: 'day',
                    total_tracks: 4,
                    type: 'album',
                    uri: 'spotify:album:1Ni9Rg8pHQZ9pNjo5zh7KH',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/01pAc8SomyAjj2fAncChyZ',
                        },
                        href: 'https://api.spotify.com/v1/artists/01pAc8SomyAjj2fAncChyZ',
                        id: '01pAc8SomyAjj2fAncChyZ',
                        name: 'Peter Makto',
                        type: 'artist',
                        uri: 'spotify:artist:01pAc8SomyAjj2fAncChyZ',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/5A1sn1Lo2pBoRf7VrpBXrU',
                        },
                        href: 'https://api.spotify.com/v1/artists/5A1sn1Lo2pBoRf7VrpBXrU',
                        id: '5A1sn1Lo2pBoRf7VrpBXrU',
                        name: 'Katya',
                        type: 'artist',
                        uri: 'spotify:artist:5A1sn1Lo2pBoRf7VrpBXrU',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 394426,
                explicit: false,
                external_ids: {
                    isrc: 'HUE871800007',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/1vw9N2JjqnCWybfpaIYH0l',
                },
                href: 'https://api.spotify.com/v1/tracks/1vw9N2JjqnCWybfpaIYH0l',
                id: '1vw9N2JjqnCWybfpaIYH0l',
                is_local: false,
                name: 'Sharp Lines - House Retouch Mix',
                popularity: 1,
                preview_url:
                    'https://p.scdn.co/mp3-preview/323a920310bc182a74cc3ab67417431dac5f8f18?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:1vw9N2JjqnCWybfpaIYH0l',
            },
            played_at: '2023-06-03T04:50:37.486Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
        {
            track: {
                album: {
                    album_type: 'single',
                    artists: [
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/1YkHCcMgZ6fTQMeEQyYKTf',
                            },
                            href: 'https://api.spotify.com/v1/artists/1YkHCcMgZ6fTQMeEQyYKTf',
                            id: '1YkHCcMgZ6fTQMeEQyYKTf',
                            name: 'Moonbootica',
                            type: 'artist',
                            uri: 'spotify:artist:1YkHCcMgZ6fTQMeEQyYKTf',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/4ueT3TFdSmR04bDAiZbjsW',
                            },
                            href: 'https://api.spotify.com/v1/artists/4ueT3TFdSmR04bDAiZbjsW',
                            id: '4ueT3TFdSmR04bDAiZbjsW',
                            name: 'Ante Perry',
                            type: 'artist',
                            uri: 'spotify:artist:4ueT3TFdSmR04bDAiZbjsW',
                        },
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/2XBuvmyzhH85j6sqv1fV3l',
                            },
                            href: 'https://api.spotify.com/v1/artists/2XBuvmyzhH85j6sqv1fV3l',
                            id: '2XBuvmyzhH85j6sqv1fV3l',
                            name: 'Robosonic',
                            type: 'artist',
                            uri: 'spotify:artist:2XBuvmyzhH85j6sqv1fV3l',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/48cljWcr0l0FROAm0Suv0F',
                    },
                    href: 'https://api.spotify.com/v1/albums/48cljWcr0l0FROAm0Suv0F',
                    id: '48cljWcr0l0FROAm0Suv0F',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273ae9829ba374eaaeda8ac2921',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02ae9829ba374eaaeda8ac2921',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851ae9829ba374eaaeda8ac2921',
                            width: 64,
                        },
                    ],
                    name: 'So Simple (Incl. Robosonic Remix)',
                    release_date: '2023-01-26',
                    release_date_precision: 'day',
                    total_tracks: 4,
                    type: 'album',
                    uri: 'spotify:album:48cljWcr0l0FROAm0Suv0F',
                },
                artists: [
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/1YkHCcMgZ6fTQMeEQyYKTf',
                        },
                        href: 'https://api.spotify.com/v1/artists/1YkHCcMgZ6fTQMeEQyYKTf',
                        id: '1YkHCcMgZ6fTQMeEQyYKTf',
                        name: 'Moonbootica',
                        type: 'artist',
                        uri: 'spotify:artist:1YkHCcMgZ6fTQMeEQyYKTf',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/4ueT3TFdSmR04bDAiZbjsW',
                        },
                        href: 'https://api.spotify.com/v1/artists/4ueT3TFdSmR04bDAiZbjsW',
                        id: '4ueT3TFdSmR04bDAiZbjsW',
                        name: 'Ante Perry',
                        type: 'artist',
                        uri: 'spotify:artist:4ueT3TFdSmR04bDAiZbjsW',
                    },
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/2XBuvmyzhH85j6sqv1fV3l',
                        },
                        href: 'https://api.spotify.com/v1/artists/2XBuvmyzhH85j6sqv1fV3l',
                        id: '2XBuvmyzhH85j6sqv1fV3l',
                        name: 'Robosonic',
                        type: 'artist',
                        uri: 'spotify:artist:2XBuvmyzhH85j6sqv1fV3l',
                    },
                ],
                available_markets: ['AD', 'AE', 'AG'],
                disc_number: 1,
                duration_ms: 434033,
                explicit: false,
                external_ids: {
                    isrc: 'DEW872207824',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/59IizRcE3BVBEl7KhkxbTD',
                },
                href: 'https://api.spotify.com/v1/tracks/59IizRcE3BVBEl7KhkxbTD',
                id: '59IizRcE3BVBEl7KhkxbTD',
                is_local: false,
                name: 'So Simple - Robosonic Remix',
                popularity: 7,
                preview_url:
                    'https://p.scdn.co/mp3-preview/0ddca9be98e0a6686f685ccc4e8b170f628a5e3e?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:59IizRcE3BVBEl7KhkxbTD',
            },
            played_at: '2023-06-03T04:44:03.042Z',
            context: {
                type: 'playlist',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/2ZnKIU3BlPLCW1bIDdzXjr',
                },
                href: 'https://api.spotify.com/v1/playlists/2ZnKIU3BlPLCW1bIDdzXjr',
                uri: 'spotify:playlist:2ZnKIU3BlPLCW1bIDdzXjr',
            },
        },
    ],
    next: 'https://api.spotify.com/v1/me/player/recently-played?before=1685767443042',
    cursors: {
        after: '1685845274196',
        before: '1685767443042',
    },
    limit: 20,
    href: 'https://api.spotify.com/v1/me/player/recently-played',
};
