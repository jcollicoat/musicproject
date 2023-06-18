import { Track } from '@music/types/tracks.types';

export const TrackMock: Track = {
    artists: [
        {
            id: '0GG2cWaonE4JPrjcCCQ1EG',
            name: 'SG Lewis',
        },
    ],
    durationMs: 197052,
    explicit: false,
    id: '21p0edNF107qz1uPc9F7EK',
    name: 'Coming Up',
    previewUrl:
        'https://p.scdn.co/mp3-preview/8cc3f079e643ba25b7dd63dc8292077f06ffc249?cid=918fdfaf405e4320abbbdf7cc10fd935',
    album: {
        albumType: 'single',
        artists: [
            {
                id: '0GG2cWaonE4JPrjcCCQ1EG',
                name: 'SG Lewis',
            },
        ],
        id: '2gwNU1WsZEOcCSyKHsXKs5',
        images: [
            {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b2737a57c79de5138d173331183d',
                width: 640,
            },
            {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e027a57c79de5138d173331183d',
                width: 300,
            },
            {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d000048517a57c79de5138d173331183d',
                width: 64,
            },
        ],
        name: 'Dusk',
        releaseDate: '2018-04-06',
        releaseDatePrecision: 'day',
        totalTracks: 6,
    },
    popularity: 45,
    saved: true,
    audioFeatures: {
        acousticness: 0.0168,
        danceability: 0.721,
        energy: 0.686,
        id: '21p0edNF107qz1uPc9F7EK',
        instrumentalness: 0.00767,
        key: 'B',
        liveness: 0.298,
        loudness: -5.966,
        mode: 'Minor',
        speechiness: 0.0792,
        tempo: 104.985,
        timeSignature: 4,
        valence: 0.738,
    },
};
