import { Meta, StoryObj } from '@storybook/react';
import NavMenu from './NavMenu';

const meta: Meta<typeof NavMenu> = {
  title: 'components/NavMenu/NavMenu',
  component: NavMenu,
};

export default meta;
type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  tags: ['autodocs'],
};

export const Shown: Story = {
  args: {
    active: true,
    resetMenu(event) {
      this.active = false;
    },
  },
};
