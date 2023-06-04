import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const me = async (accessToken: string) => {
    const me = await spotify.user.me(accessToken);
    return builders.user.buildUser(me);
};

const full = async (accessToken: string) => {
    const details = await spotify.user.me(accessToken);
    const followedArtists = await spotify.user.followedArtists(accessToken);

    return builders.user.buildFullUser(details, followedArtists);
};

const user = { me, full };
export { user };
