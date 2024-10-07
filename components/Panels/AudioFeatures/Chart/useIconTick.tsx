import { ComponentProps, useCallback } from 'react';
import { Icon } from 'Generics/Icon/Icon';

interface Input {
    payload: {
        value: string;
    };
    x: number;
    y: number;
}

export const useIconTick = () => {
    const tickFunction = useCallback(({ payload, x, y }: Input) => {
        let icon: ComponentProps<typeof Icon>['icon'] = 'Heart';

        switch (payload.value) {
            case 'Acousticness':
                icon = 'Playlist';
                break;
            case 'Danceability':
                icon = 'Pulse';
                break;
            case 'Energy':
                icon = 'Spark';
                break;
        }

        return (
            <foreignObject
                x={x}
                y={y}
                dy="0em"
                width="1.25em"
                height="1.25em"
                style={{
                    fontSize: '1.25em',
                    transform: 'scale(105%) translate(-0.5em, -0.5em)',
                    transformOrigin: 'center',
                }}
            >
                <Icon icon={icon} />
            </foreignObject>
        );
    }, []);

    return { tickFunction };
};
