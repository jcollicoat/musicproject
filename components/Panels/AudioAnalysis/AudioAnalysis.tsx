import { FC } from 'react';
import { spotify } from 'spotify/api';

const Loading: FC = () => {
    return 'Loading Component...';
};

interface Props {
    trackId: string;
}

const Component: FC<Props> = async ({ trackId }) => {
    const analysis = await spotify.audio.analysis.id(trackId);
    console.log(analysis);

    return 'Loaded!';
};

export const AudioAnalysis = {
    Loading,
    Component,
};
