import type { Meta, StoryObj } from '@storybook/react';
import IdentityComponent from './Identity';
import { IdentityMock } from '@core/configuration/mocks/Artist.mock';
import { RouterOnRoot, Skeleton } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'Pages/Artist/Identity',
  component: IdentityComponent,
  decorators: [RouterOnRoot, Skeleton]
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
