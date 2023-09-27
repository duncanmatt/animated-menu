import { Meta, StoryObj } from '@storybook/react';
import NavMenu from './NavMenu';

const meta: Meta<typeof NavMenu> = {
  title: 'components/NavMenu/NavMenu',
  component: NavMenu,
};

export default meta;
type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  parameters: { chromatic: { pauseAnimationAtEnd: true } },
  tags: ['autodocs'],
};

export const Hidden: Story = {
  parameters: { chromatic: { pauseAnimationAtEnd: true } },
  args: {
    active: false,
    resetMenu(event) {
      this.active = false;
    },
  },
};

export const Shown: Story = {
  parameters: { chromatic: { pauseAnimationAtEnd: true } },
  args: {
    active: true,
    resetMenu(event) {
      this.active = false;
    },
  },
};
