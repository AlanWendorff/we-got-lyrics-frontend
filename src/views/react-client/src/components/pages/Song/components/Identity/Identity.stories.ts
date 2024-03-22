import type { Meta, StoryObj } from '@storybook/react';
import IdentityComponent from './Identity';
import { IdentityMock } from '@core/configuration/mocks/Song.mock';
import { RouterOnRoot, Skeleton } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'Pages/Song/Identity',
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
    artistId: undefined,
    artistName: undefined,
    albumName: undefined,
    title: undefined,
    date: undefined,
    views: undefined
  }
};
