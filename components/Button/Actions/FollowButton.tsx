'use client';

import { FC, useState, useTransition } from 'react';
import { follow, FollowAction } from '@music/actions';
import { Button } from '../Button';

export const FollowButton: FC<FollowAction> = ({ action, type, id }) => {
    const [state, setState] = useState(action);
    const [isPending, startTransition] = useTransition();

    const onClick = () => {
        startTransition(async () => {
            const response = await follow({ action: state, type, id });
            if (response === 204) {
                state === 'add' ? setState('remove') : setState('add');
            }
        });
    };

    return (
        <Button
            onClick={onClick}
            text={state === 'add' ? 'Follow' : 'Unfollow'}
            iconStart={{ icon: isPending ? 'Loading' : 'Heart' }}
            style={state === 'add' ? 'cta' : 'tertiary'}
        />
    );
};
