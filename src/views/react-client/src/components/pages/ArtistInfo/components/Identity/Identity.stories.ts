import type { Meta, StoryObj } from '@storybook/react';
import IdentityComponent from './Identity';
import { IdentityMock } from '@/mocks/Artist.mock';
import { ROUTER_WRAP_ROOT } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'Pages/Artist/Identity',
  component: IdentityComponent,
  decorators: [ROUTER_WRAP_ROOT]
} satisfies Meta<typeof IdentityComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Identity: Story = {
  args: IdentityMock
};

export const IdentitySkeleton: Story = {
  args: {
    name: undefined,
    aka: undefined
  }
};
