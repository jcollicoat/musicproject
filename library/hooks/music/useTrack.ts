import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Track } from '@music/types/tracks.types';

export const useTrack = (trackId: string) => {
    const { data: track } = useQuery({
        queryKey: ['track', trackId],
        queryFn: () => axios.get<Track>(`/api/tracks/${trackId}`),
        staleTime: Infinity,
    });

    return track?.data;
};
