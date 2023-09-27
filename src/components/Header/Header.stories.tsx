import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Header from '../Header/Header';

const meta: Meta<typeof Header> = {
  title: 'components/Header/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = { tags: ['autodocs'] };

export const ShowNav: Story = {
  parameters: { chromatic: { pauseAnimationAtEnd: true } },
  tags: ['autodocs'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuToggle = canvas.getByRole('button');
    await userEvent.click(menuToggle, {
      delay: 100,
    });
    await userEvent.click(menuToggle, {
      delay: 300,
    });
  },
};
