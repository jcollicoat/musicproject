import { api } from '@spotify/requests';
import { SpotifySearchResults } from '@spotify/types/search.types';

const search = async (query: string, types: string[], accessToken: string) =>
    await api.get<SpotifySearchResults>('search', accessToken, {
        q: query,
        type: types.join(','),
    });

export { search };
