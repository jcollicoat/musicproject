import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '@music/types/user.types';

export const useUserProfile = () => {
    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: () => axios.get<User>('/api/user'),
        staleTime: Infinity,
    });

    return user?.data;
};
