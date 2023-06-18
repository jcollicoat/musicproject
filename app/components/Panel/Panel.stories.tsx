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
                    <Button
                        onClick={() => alert('Clicked')}
                        ariaLabel="Button"
                        text="Button"
                    />
                ),
                'Secondary Button': (
                    <Button
                        onClick={() => alert('Clicked')}
                        ariaLabel="Secondary Button"
                        text="Secondary Button"
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
