'use client';

import { useRouter } from 'next/navigation';
import { FC, useContext } from 'react';
import { SelectorContext } from 'context/SelectorContext';
import { Panel, PanelProps } from 'Panels/Panel';
import styles from './Selector.module.scss';

export const Selector: FC<PanelProps> = (props) => {
    const {
        state: { primary, secondary },
        dispatch,
    } = useContext(SelectorContext);
    console.log(primary, secondary);

    const router = useRouter();

    return (
        <Panel {...props}>
            <div className={styles.wrapper}>
                <Panel>
                    <select
                        onChange={(e) => {
                            dispatch({
                                type: 'primary',
                                trackId: e.currentTarget.value,
                            });
                            // router.refresh();
                        }}
                    >
                        <option disabled hidden>
                            Select an Option
                        </option>
                        <option
                            value="4a8P8qqreTbmxsd0Eais85"
                            onChange={(e) => {
                                console.log(e);
                            }}
                        >
                            4a8P8qqreTbmxsd0Eais85
                        </option>
                        <option value="6i0s4IJiM6hzhh4eBbtnme">
                            6i0s4IJiM6hzhh4eBbtnme
                        </option>
                    </select>
                </Panel>
                <Panel>
                    <select
                        onChange={(e) => {
                            dispatch({
                                type: 'secondary',
                                trackId: e.currentTarget.value,
                            });
                            // router.refresh();
                        }}
                    >
                        <option disabled hidden>
                            Select an Option
                        </option>
                        <option value="4a8P8qqreTbmxsd0Eais85">
                            4a8P8qqreTbmxsd0Eais85
                        </option>
                        <option value="6i0s4IJiM6hzhh4eBbtnme">
                            6i0s4IJiM6hzhh4eBbtnme
                        </option>
                    </select>
                </Panel>
            </div>
        </Panel>
    );
};
