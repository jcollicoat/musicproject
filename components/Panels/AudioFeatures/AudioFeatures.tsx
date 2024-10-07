import { FC } from 'react';
import { builders } from 'builders';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import { Chart } from './Chart/Chart';
import { Grid } from './Grid/Grid';
import { useAudioFeatures } from './useAudioFeatures';

interface Props extends PanelProps {
    trackIds: string[];
    display?: 'grid';
}

export const AudioFeatures: FC<Props> = async ({
    trackIds,
    display,
    ...props
}) => {
    const { audio_features } = await spotify.audio.features.ids(trackIds);
    const { data, datasets } = useAudioFeatures({ features: audio_features });

    const audio = builders.audio.features.multiple(audio_features);

    return (
        <Panel {...props}>
            {display === 'grid' ? (
                <Grid audio={audio} />
            ) : (
                <Chart data={data} datasets={datasets} />
            )}
        </Panel>
    );
};
