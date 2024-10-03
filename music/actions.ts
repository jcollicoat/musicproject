'use server';

import { spotify } from 'spotify/api';

export interface FollowAction {
    action: 'add' | 'remove';
    type: 'artist' | 'playlist';
    id: string;
}

export const follow = async ({ action, type, id }: FollowAction) => {
    if (type === 'artist') {
        const response = await spotify.follow[action].artistIds([id]);
        return response;
    }
};
