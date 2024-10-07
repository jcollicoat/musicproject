import { FC } from 'react';
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
    const { data, datasets, audio } = useAudioFeatures({
        audio_features,
        display,
    });

    return (
        <Panel {...props}>
            {audio ? (
                <Grid audio={audio} />
            ) : (
                <Chart data={data} datasets={datasets} />
            )}
        </Panel>
    );
};
