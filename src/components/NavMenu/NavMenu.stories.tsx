import { Meta, StoryObj } from '@storybook/react';
import NavMenu from './NavMenu';
import { NavMenuStatus } from '@/types';

const meta: Meta<typeof NavMenu> = {
  title: 'components/NavMenu/NavMenu',
  component: NavMenu,
};

export default meta;
type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  args: {
    active: false,
    resetMenu(event) {
      this.active = !this.active;
    },
  },
};

export const Open: Story = {
  args: {
    active: true,
    resetMenu(event) {
      this.active = !this.active;
    },
  },
};
