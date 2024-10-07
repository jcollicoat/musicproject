import { FC } from 'react';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import { Chart } from './Chart/Chart';
import { useAudioFeatures } from './useAudioFeatures';

interface Props extends PanelProps {
    trackIds: string[];
}

export const AudioFeatures: FC<Props> = async ({ trackIds, ...props }) => {
    const { audio_features } = await spotify.audio.features.ids(trackIds);
    const { data, datasets } = useAudioFeatures({ features: audio_features });

    return (
        <Panel {...props}>
            <Chart data={data} datasets={datasets} />
        </Panel>
    );
};
