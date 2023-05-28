import { SpotifyArtist } from "@/library/spotify/artists/types";
import { Artist } from "@/library/data/artists/types";

export const buildSpotifyArtist = (artist: SpotifyArtist): Artist => {
    const { genres, id, images, name, popularity } = artist;

    return {
        followers: artist.followers.total,
        genres: genres,
        id: id,
        images: images,
        name: name,
        popularity: popularity,
    };
};
