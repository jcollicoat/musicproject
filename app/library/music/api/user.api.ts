import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const me = async (accessToken: string) => {
    const me = await spotify.user.me(accessToken);
    return builders.user.buildUser(me);
};

const user = { me };
export { user };
