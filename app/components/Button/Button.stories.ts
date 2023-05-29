import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            table: {
                disable: true,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        ariaLabel: 'Button',
        text: 'Button',
        onClick: () => alert('Button clicked!'),
    },
};
