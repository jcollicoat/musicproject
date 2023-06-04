import { builders } from '@music/builders';
import { spotify } from '@spotify/api';

const search = async (query: string, types: string[], accessToken: string) => {
    const search = await spotify.search(query, types, accessToken);
    return builders.search.buildSearch(search);
};

export { search };
