import { FC } from 'react';
import { spotify } from 'spotify/api';
import { Chart } from './Chart/Chart';
import { useAudioFeatures } from './useAudioFeatures';

const Loading: FC = () => {
    return (
        <Chart
            data={[
                { name: '', default: 50 },
                { name: '', default: 50 },
            ]}
            datasets={[{ id: 'default', color: 'var(--color-primary-2)' }]}
        />
    );
};

interface Props {
    trackIds: string[];
}

const Component: FC<Props> = async ({ trackIds }) => {
    const { audio_features } = await spotify.audio.features.ids(trackIds);
    const { data, datasets } = useAudioFeatures({ features: audio_features });

    return <Chart data={data} datasets={datasets} />;
};

export const AudioFeatures = {
    Loading,
    Component,
};
