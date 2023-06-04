import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const me = async (accessToken: string) => {
    const me = await spotify.user.get(accessToken);
    return builders.user.buildUser(me);
};

const full = async (accessToken: string) => {
    const details = await spotify.user.get(accessToken);
    const followedArtists = await spotify.user.artists.followed(accessToken);

    return builders.user.buildFullUser(details, followedArtists);
};

const user = { me, full };
export { user };
