import { FC } from 'react';
import { ClientLogger } from '@components/ClientLogger/ClientLogger';
// import { ReactChartsTest } from '@components/ReactChartsTest/ReactChartsTest';
import { ReChartsTest } from '@components/ReChartsTest/ReChartsTest';
import { music } from '@music/api';
import styles from './AudioAnalysis.module.scss';

interface Props {
    trackId: string;
}

export const AudioAnalysis: FC<Props> = async ({ trackId }) => {
    const analysis = await music.audio.analysis.id(trackId);

    return (
        <div className={styles.wrapper}>
            <ClientLogger data={analysis} />
            {/* <ReactChartsTest analysis={analysis} /> */}
            <ReChartsTest analysis={analysis} />
        </div>
    );
};
