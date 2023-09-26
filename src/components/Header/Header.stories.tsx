import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Header from './Header';
const meta: Meta<typeof Header> = {
  title: 'components/Header/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const ShowNav: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuToggle = canvas.getByRole('button');

    await userEvent.hover(menuToggle, {
      delay: 100,
    });

    await userEvent.click(menuToggle);

    await userEvent.unhover(menuToggle);
  },
};
