import { Meta, StoryObj } from '@storybook/react';
import { TrackMock } from 'mocks/music/tracks';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
    argTypes: {
        data: {
            control: { type: 'radio' },
            options: ['None', 'Track'],
            mapping: {
                None: undefined,
                Track: TrackMock,
            },
        },
        hasPanel: {
            table: {
                disable: true,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    args: {
        title: 'Music Project',
        subtitle: '',
        isSticky: false,
    },
};
