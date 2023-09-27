import { Meta, StoryObj } from '@storybook/react';
import Controls from './Controls';

const meta: Meta<typeof Controls> = {
  title: 'components/Controls/Controls',
  component: Controls,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export default meta;
type Story = StoryObj<typeof Controls>;

export const Default: Story = { tags: ['autodocs'] };
