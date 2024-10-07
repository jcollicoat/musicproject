import { FC } from 'react';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import { Chart } from './Chart/Chart';
import { Grid } from './Grid/Grid';

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

    return (
        <Panel {...props}>
            {display === 'grid' ? (
                <Grid audio_features={audio_features} />
            ) : (
                <Chart audio_features={audio_features} />
            )}
        </Panel>
    );
};
