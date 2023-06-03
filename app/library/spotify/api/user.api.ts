import axios from 'axios';

const spotifyEndpoint = 'https://api.spotify.com/v1/me/tracks/contains';

const checkSaved = async (trackIds: string[], accessToken: string) => {
    const result = await axios.get<boolean[]>(spotifyEndpoint, {
        headers: {
            Authorization: accessToken,
        },
        params: {
            ids: trackIds.join(','),
        },
    });
    return result.data;
};

const user = { checkSaved };
export { user };
