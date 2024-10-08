import { FC } from 'react';
import { Panel, PanelProps } from 'Panels/Panel';
import { spotify } from 'spotify/api';
import { Chart } from './Chart/Chart';
import { Grid } from './Grid/Grid';

interface Props extends PanelProps {
    trackIds: string[];
    secondaryTrackIds?: string[];
    display?: 'grid';
}

export const AudioFeatures: FC<Props> = async ({
    trackIds,
    secondaryTrackIds,
    display,
    ...props
}) => {
    const { audio_features: primary } =
        await spotify.audio.features.ids(trackIds);
    const { audio_features: secondary } = secondaryTrackIds
        ? await spotify.audio.features.ids(secondaryTrackIds)
        : { audio_features: undefined };

    return (
        <Panel {...props}>
            {display === 'grid' ? (
                <Grid audio_features={primary} />
            ) : (
                <Chart primary={primary} secondary={secondary} />
            )}
        </Panel>
    );
};
