import { SpotifyUser } from '@spotify/types/user.types';

export const User: SpotifyUser = {
    country: 'NZ',
    display_name: 'Joe Collicoat',
    email: 'jcollicoat@gmail.com',
    explicit_content: {
        filter_enabled: false,
        filter_locked: false,
    },
    external_urls: {
        spotify: 'https://open.spotify.com/user/jcollicoat',
    },
    followers: {
        href: null,
        total: 19,
    },
    href: 'https://api.spotify.com/v1/users/jcollicoat',
    id: 'jcollicoat',
    images: [
        {
            height: null,
            url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=869186466440703&height=300&width=300&ext=1688426805&hash=AeT8atD7UtnKW9eEB_4',
            width: null,
        },
    ],
    product: 'premium',
    type: 'user',
    uri: 'spotify:user:jcollicoat',
};
