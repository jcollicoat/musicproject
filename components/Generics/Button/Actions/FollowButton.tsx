'use client';

import { FC, useState, useTransition } from 'react';
import { PiHeart, PiSpinner } from 'react-icons/pi';
import { follow, FollowAction } from 'music/actions';
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

    const text = state === 'add' ? 'Follow' : 'Unfollow';

    return (
        <Button
            ariaLabel={text}
            onClick={onClick}
            style={state === 'add' ? 'cta' : 'tertiary'}
        >
            {isPending ? <PiSpinner /> : <PiHeart />}
            {text}
        </Button>
    );
};
