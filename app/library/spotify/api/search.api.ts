import { api } from '@spotify/requests';
import { SpotifySearch } from '@spotify/types/search.types';

const search = async (query: string, types: string[], accessToken: string) =>
    await api.get<SpotifySearch>('search', accessToken, {
        q: query,
        type: types.join(','),
    });

export { search };
