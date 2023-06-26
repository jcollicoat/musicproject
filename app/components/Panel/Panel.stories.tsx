import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/Button/Button';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
    title: 'Panel',
    component: Panel,
    argTypes: {
        children: {
            control: { type: 'radio' },
            options: ['Button', 'Secondary Button'],
            mapping: {
                Button: (
                    <Button text="Button" onClick={() => alert('Clicked')} />
                ),
                'Secondary Button': (
                    <Button
                        text="Secondary Button"
                        onClick={() => alert('Clicked')}
                        style="secondary"
                    />
                ),
            },
        },
        position: { table: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};
