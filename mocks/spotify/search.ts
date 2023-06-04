import { SpotifySearch } from '@spotify/types/search.types';

export const Search: SpotifySearch = {
    albums: {
        href: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=album&offset=0&limit=50',
        items: [
            {
                album_type: 'album',
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
                        'https://open.spotify.com/album/4QrUTGnqrfWOAwnws2VvFb',
                },
                href: 'https://api.spotify.com/v1/albums/4QrUTGnqrfWOAwnws2VvFb',
                id: '4QrUTGnqrfWOAwnws2VvFb',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ab67616d0000b273110c433fb7404ecd63a24578',
                        width: 640,
                    },
                    {
                        height: 300,
                        url: 'https://i.scdn.co/image/ab67616d00001e02110c433fb7404ecd63a24578',
                        width: 300,
                    },
                    {
                        height: 64,
                        url: 'https://i.scdn.co/image/ab67616d00004851110c433fb7404ecd63a24578',
                        width: 64,
                    },
                ],
                name: 'Eelke Kleijn presents DAYS like NIGHTS',
                release_date: '2020-04-10',
                release_date_precision: 'day',
                total_tracks: 24,
                type: 'album',
                uri: 'spotify:album:4QrUTGnqrfWOAwnws2VvFb',
            },
            {
                album_type: 'album',
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
                        'https://open.spotify.com/album/4BjGsYlf59vSwoU2fJ2oxC',
                },
                href: 'https://api.spotify.com/v1/albums/4BjGsYlf59vSwoU2fJ2oxC',
                id: '4BjGsYlf59vSwoU2fJ2oxC',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ab67616d0000b273bec7289290a5a66f0ac0426f',
                        width: 640,
                    },
                    {
                        height: 300,
                        url: 'https://i.scdn.co/image/ab67616d00001e02bec7289290a5a66f0ac0426f',
                        width: 300,
                    },
                    {
                        height: 64,
                        url: 'https://i.scdn.co/image/ab67616d00004851bec7289290a5a66f0ac0426f',
                        width: 64,
                    },
                ],
                name: 'Oscillations (The Remixes)',
                release_date: '2022-02-04',
                release_date_precision: 'day',
                total_tracks: 11,
                type: 'album',
                uri: 'spotify:album:4BjGsYlf59vSwoU2fJ2oxC',
            },
            {
                album_type: 'album',
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
                        'https://open.spotify.com/album/7abALHPvL5mIbokvxsAAhH',
                },
                href: 'https://api.spotify.com/v1/albums/7abALHPvL5mIbokvxsAAhH',
                id: '7abALHPvL5mIbokvxsAAhH',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ab67616d0000b2738fa2900c5870c43c27a2cf5e',
                        width: 640,
                    },
                    {
                        height: 300,
                        url: 'https://i.scdn.co/image/ab67616d00001e028fa2900c5870c43c27a2cf5e',
                        width: 300,
                    },
                    {
                        height: 64,
                        url: 'https://i.scdn.co/image/ab67616d000048518fa2900c5870c43c27a2cf5e',
                        width: 64,
                    },
                ],
                name: 'Oscillations',
                release_date: '2020-09-25',
                release_date_precision: 'day',
                total_tracks: 11,
                type: 'album',
                uri: 'spotify:album:7abALHPvL5mIbokvxsAAhH',
            },
        ],
        limit: 50,
        next: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=album&offset=50&limit=50',
        offset: 0,
        previous: null,
        total: 417,
    },
    artists: {
        href: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=artist&offset=0&limit=50',
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
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/121hMKvvTiXstBTEXTVysz',
                },
                followers: {
                    href: null,
                    total: 58,
                },
                genres: [],
                href: 'https://api.spotify.com/v1/artists/121hMKvvTiXstBTEXTVysz',
                id: '121hMKvvTiXstBTEXTVysz',
                images: [],
                name: 'Eelke Kleijn',
                popularity: 1,
                type: 'artist',
                uri: 'spotify:artist:121hMKvvTiXstBTEXTVysz',
            },
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/3ayjKYI0Y6EcsxRo6bz7t8',
                },
                followers: {
                    href: null,
                    total: 64,
                },
                genres: [],
                href: 'https://api.spotify.com/v1/artists/3ayjKYI0Y6EcsxRo6bz7t8',
                id: '3ayjKYI0Y6EcsxRo6bz7t8',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ab67616d0000b27347673717df2d461c521a816e',
                        width: 640,
                    },
                    {
                        height: 300,
                        url: 'https://i.scdn.co/image/ab67616d00001e0247673717df2d461c521a816e',
                        width: 300,
                    },
                    {
                        height: 64,
                        url: 'https://i.scdn.co/image/ab67616d0000485147673717df2d461c521a816e',
                        width: 64,
                    },
                ],
                name: 'Nick Hogendoorn & Eelke Kleijn',
                popularity: 0,
                type: 'artist',
                uri: 'spotify:artist:3ayjKYI0Y6EcsxRo6bz7t8',
            },
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/4wL3sNm5ha6gzDXjTjWl49',
                },
                followers: {
                    href: null,
                    total: 0,
                },
                genres: [],
                href: 'https://api.spotify.com/v1/artists/4wL3sNm5ha6gzDXjTjWl49',
                id: '4wL3sNm5ha6gzDXjTjWl49',
                images: [],
                name: 'Eelke Kleijn pres. The World',
                popularity: 0,
                type: 'artist',
                uri: 'spotify:artist:4wL3sNm5ha6gzDXjTjWl49',
            },
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/6u3dG66gSTkP9OZ5w1RBTu',
                },
                followers: {
                    href: null,
                    total: 3,
                },
                genres: [],
                href: 'https://api.spotify.com/v1/artists/6u3dG66gSTkP9OZ5w1RBTu',
                id: '6u3dG66gSTkP9OZ5w1RBTu',
                images: [],
                name: 'Mitiska,Cerf,Eelke Kleijn,DJ Mark Lewis',
                popularity: 0,
                type: 'artist',
                uri: 'spotify:artist:6u3dG66gSTkP9OZ5w1RBTu',
            },
        ],
        limit: 50,
        next: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=artist&offset=50&limit=50',
        offset: 0,
        previous: null,
        total: 60,
    },
    tracks: {
        href: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=track&offset=0&limit=50',
        items: [
            {
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
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/4h8hm6TjKsvgmLajBgaI9w',
                            },
                            href: 'https://api.spotify.com/v1/artists/4h8hm6TjKsvgmLajBgaI9w',
                            id: '4h8hm6TjKsvgmLajBgaI9w',
                            name: 'Lee Cabrera',
                            type: 'artist',
                            uri: 'spotify:artist:4h8hm6TjKsvgmLajBgaI9w',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/1ayNg7DJVJ7fjR2ujT4FT5',
                    },
                    href: 'https://api.spotify.com/v1/albums/1ayNg7DJVJ7fjR2ujT4FT5',
                    id: '1ayNg7DJVJ7fjR2ujT4FT5',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b2736556adc215b4b0f66ec177a0',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e026556adc215b4b0f66ec177a0',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d000048516556adc215b4b0f66ec177a0',
                            width: 64,
                        },
                    ],
                    name: 'Self Control',
                    release_date: '2023-04-21',
                    release_date_precision: 'day',
                    total_tracks: 2,
                    type: 'album',
                    uri: 'spotify:album:1ayNg7DJVJ7fjR2ujT4FT5',
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
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/4h8hm6TjKsvgmLajBgaI9w',
                        },
                        href: 'https://api.spotify.com/v1/artists/4h8hm6TjKsvgmLajBgaI9w',
                        id: '4h8hm6TjKsvgmLajBgaI9w',
                        name: 'Lee Cabrera',
                        type: 'artist',
                        uri: 'spotify:artist:4h8hm6TjKsvgmLajBgaI9w',
                    },
                ],
                available_markets: ['AR', 'AU', 'BE'],
                disc_number: 1,
                duration_ms: 588196,
                explicit: false,
                external_ids: {
                    isrc: 'NLF712301584',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/5gqNLhHCBXsiDyEbrxSBXP',
                },
                href: 'https://api.spotify.com/v1/tracks/5gqNLhHCBXsiDyEbrxSBXP',
                id: '5gqNLhHCBXsiDyEbrxSBXP',
                is_local: false,
                name: 'Self Control - Eelke Kleijn 12AU Cosmic Aeroplane Mix',
                popularity: 26,
                preview_url:
                    'https://p.scdn.co/mp3-preview/a09be1b45b7933d0f917a7f4e510795013817d8f?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 2,
                type: 'track',
                uri: 'spotify:track:5gqNLhHCBXsiDyEbrxSBXP',
            },
            {
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
                available_markets: ['AR', 'AU', 'AT'],
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
            {
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
                        {
                            external_urls: {
                                spotify:
                                    'https://open.spotify.com/artist/4jGpKAmwvU263l0tUh4xKU',
                            },
                            href: 'https://api.spotify.com/v1/artists/4jGpKAmwvU263l0tUh4xKU',
                            id: '4jGpKAmwvU263l0tUh4xKU',
                            name: 'Joris Voorn',
                            type: 'artist',
                            uri: 'spotify:artist:4jGpKAmwvU263l0tUh4xKU',
                        },
                    ],
                    available_markets: ['AD', 'AE', 'AG'],
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/album/0140Vqwx9gWCGWQKTsQ8Cx',
                    },
                    href: 'https://api.spotify.com/v1/albums/0140Vqwx9gWCGWQKTsQ8Cx',
                    id: '0140Vqwx9gWCGWQKTsQ8Cx',
                    images: [
                        {
                            height: 640,
                            url: 'https://i.scdn.co/image/ab67616d0000b273775834603bba17b2244054f6',
                            width: 640,
                        },
                        {
                            height: 300,
                            url: 'https://i.scdn.co/image/ab67616d00001e02775834603bba17b2244054f6',
                            width: 300,
                        },
                        {
                            height: 64,
                            url: 'https://i.scdn.co/image/ab67616d00004851775834603bba17b2244054f6',
                            width: 64,
                        },
                    ],
                    name: 'Transmission (Joris Voorn Remix)',
                    release_date: '2022-10-28',
                    release_date_precision: 'day',
                    total_tracks: 2,
                    type: 'album',
                    uri: 'spotify:album:0140Vqwx9gWCGWQKTsQ8Cx',
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
                    {
                        external_urls: {
                            spotify:
                                'https://open.spotify.com/artist/4jGpKAmwvU263l0tUh4xKU',
                        },
                        href: 'https://api.spotify.com/v1/artists/4jGpKAmwvU263l0tUh4xKU',
                        id: '4jGpKAmwvU263l0tUh4xKU',
                        name: 'Joris Voorn',
                        type: 'artist',
                        uri: 'spotify:artist:4jGpKAmwvU263l0tUh4xKU',
                    },
                ],
                available_markets: ['AR', 'AU', 'BE'],
                disc_number: 1,
                duration_ms: 224274,
                explicit: false,
                external_ids: {
                    isrc: 'NLF712208018',
                },
                external_urls: {
                    spotify:
                        'https://open.spotify.com/track/6ziqWx82jgkQYhyIALoraH',
                },
                href: 'https://api.spotify.com/v1/tracks/6ziqWx82jgkQYhyIALoraH',
                id: '6ziqWx82jgkQYhyIALoraH',
                is_local: false,
                name: 'Transmission - Joris Voorn Remix',
                popularity: 68,
                preview_url:
                    'https://p.scdn.co/mp3-preview/e83f4ceef7e46ef2ecd60f8204d2f220d153d232?cid=918fdfaf405e4320abbbdf7cc10fd935',
                track_number: 1,
                type: 'track',
                uri: 'spotify:track:6ziqWx82jgkQYhyIALoraH',
            },
        ],
        limit: 50,
        next: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=playlist&offset=50&limit=50',
        offset: 0,
        previous: null,
        total: 81,
    },
    playlists: {
        href: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=playlist&offset=0&limit=50',
        items: [
            {
                collaborative: false,
                description: '',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/5ulVSXovjp5wYpUq6GAsLz',
                },
                href: 'https://api.spotify.com/v1/playlists/5ulVSXovjp5wYpUq6GAsLz',
                id: '5ulVSXovjp5wYpUq6GAsLz',
                images: [
                    {
                        height: 640,
                        url: 'https://mosaic.scdn.co/640/ab67616d0000b2733f30a28366fccdef430e3c21ab67616d0000b273675e0f81da36bf5dccb48fc3ab67616d0000b273adeb1686d2baa3141eec6540ab67616d0000b273eaafb14d9b2c3be935ccf82d',
                        width: 640,
                    },
                    {
                        height: 300,
                        url: 'https://mosaic.scdn.co/300/ab67616d0000b2733f30a28366fccdef430e3c21ab67616d0000b273675e0f81da36bf5dccb48fc3ab67616d0000b273adeb1686d2baa3141eec6540ab67616d0000b273eaafb14d9b2c3be935ccf82d',
                        width: 300,
                    },
                    {
                        height: 60,
                        url: 'https://mosaic.scdn.co/60/ab67616d0000b2733f30a28366fccdef430e3c21ab67616d0000b273675e0f81da36bf5dccb48fc3ab67616d0000b273adeb1686d2baa3141eec6540ab67616d0000b273eaafb14d9b2c3be935ccf82d',
                        width: 60,
                    },
                ],
                name: "Eelke Kleijn: Sunset Stream at Woodstock '69 2020",
                owner: {
                    display_name: 'nickvanderlinde',
                    external_urls: {
                        spotify:
                            'https://open.spotify.com/user/nickvanderlinde',
                    },
                    href: 'https://api.spotify.com/v1/users/nickvanderlinde',
                    id: 'nickvanderlinde',
                    type: 'user',
                    uri: 'spotify:user:nickvanderlinde',
                },
                primary_color: null,
                public: null,
                snapshot_id:
                    'MjQsMjNmZGFlYmI4YmUxZThmNjIxZGExZjcyOGM0YjdhOWU2MTQyMThiYg==',
                tracks: {
                    href: 'https://api.spotify.com/v1/playlists/5ulVSXovjp5wYpUq6GAsLz/tracks',
                    total: 13,
                },
                type: 'playlist',
                uri: 'spotify:playlist:5ulVSXovjp5wYpUq6GAsLz',
            },
            {
                collaborative: false,
                description: 'All credits go to Eelke Kleijn and Cercle.',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/5z7pgwwhsiQAVQ2LIn9NVH',
                },
                href: 'https://api.spotify.com/v1/playlists/5z7pgwwhsiQAVQ2LIn9NVH',
                id: '5z7pgwwhsiQAVQ2LIn9NVH',
                images: [
                    {
                        height: null,
                        url: 'https://i.scdn.co/image/ab67706c0000bebbebefcae037e1e22fc8dee795',
                        width: null,
                    },
                ],
                name: 'Eelke Kleijn live at Mont Saint-Michel for Cercle',
                owner: {
                    display_name: 'Teun',
                    external_urls: {
                        spotify: 'https://open.spotify.com/user/113617009',
                    },
                    href: 'https://api.spotify.com/v1/users/113617009',
                    id: '113617009',
                    type: 'user',
                    uri: 'spotify:user:113617009',
                },
                primary_color: null,
                public: null,
                snapshot_id:
                    'MTksZTU0Y2MxMTI3MGQ2NTVjZDhhMTc4MTUwYzJlN2U3MWI0YjUyNTk2YQ==',
                tracks: {
                    href: 'https://api.spotify.com/v1/playlists/5z7pgwwhsiQAVQ2LIn9NVH/tracks',
                    total: 14,
                },
                type: 'playlist',
                uri: 'spotify:playlist:5z7pgwwhsiQAVQ2LIn9NVH',
            },
            {
                collaborative: false,
                description:
                    'Songs that have been played during Eelke Klein&#x27;s Days Like Nights Radio',
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/3Stof3mBPHsuksl8CMgdTt',
                },
                href: 'https://api.spotify.com/v1/playlists/3Stof3mBPHsuksl8CMgdTt',
                id: '3Stof3mBPHsuksl8CMgdTt',
                images: [
                    {
                        height: null,
                        url: 'https://i.scdn.co/image/ab67706c0000bebb970e8f16923202c688d8cc0b',
                        width: null,
                    },
                ],
                name: 'Eelke Kleijn - Days Like Nights Radio',
                owner: {
                    display_name: 'Jarno Steursma',
                    external_urls: {
                        spotify: 'https://open.spotify.com/user/1124240939',
                    },
                    href: 'https://api.spotify.com/v1/users/1124240939',
                    id: '1124240939',
                    type: 'user',
                    uri: 'spotify:user:1124240939',
                },
                primary_color: null,
                public: null,
                snapshot_id:
                    'NjQsYmFmMzI5ZWE4ZDBkNTE3ZGQ2MDVjZGRjNzBiOTAwMDhmNmNjNzQxYw==',
                tracks: {
                    href: 'https://api.spotify.com/v1/playlists/3Stof3mBPHsuksl8CMgdTt/tracks',
                    total: 148,
                },
                type: 'playlist',
                uri: 'spotify:playlist:3Stof3mBPHsuksl8CMgdTt',
            },
        ],
        limit: 50,
        next: 'https://api.spotify.com/v1/search?query=Eelke+Kleijn&type=playlist&offset=50&limit=50',
        offset: 0,
        previous: null,
        total: 81,
    },
};
