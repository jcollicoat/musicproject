import { builders } from '@music/builders';
import { Album } from '@music/types/albums.types';
import { SpotifyAlbum } from '@spotify/types/albums.types';

const albumDuration = (tracks: SpotifyAlbum['tracks']['items']) => {
    let durationMs = 0;
    tracks.forEach((track) => {
        durationMs = durationMs + track.duration_ms;
    });
    return durationMs;
};

const albumArtist = (artist: SpotifyAlbum['artists'][0]) => ({
    id: artist.id,
    name: artist.name,
});

const albumArtists = (artists: SpotifyAlbum['artists']) =>
    artists.map((artist) => albumArtist(artist));

const albumTrack = (track: SpotifyAlbum['tracks']['items'][0]) => ({
    id: track.id,
    name: track.name,
});

const albumTracks = (tracks: SpotifyAlbum['tracks']['items']) =>
    tracks.map((track) => albumTrack(track));

const albumId = (album: SpotifyAlbum): Album => ({
    albumType: album.album_type,
    artists: albumArtists(album.artists),
    genres: album.genres,
    id: album.id,
    images: builders.images(album.images),
    label: album.label,
    length: albumDuration(album.tracks.items),
    name: album.name,
    popularity: album.popularity,
    releaseDate: {
        display: new Date(album.release_date).toDateString(),
        exact: album.release_date,
    },
    totalTracks: album.total_tracks,
    tracks: albumTracks(album.tracks.items),
});

export { albumId };
