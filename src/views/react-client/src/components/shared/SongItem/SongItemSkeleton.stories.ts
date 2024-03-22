import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../../../../.storybook/decorators';
import SongItemSkeleton from './SongItem.skeleton';

const meta = {
  title: 'shared/Song Item',
  component: SongItemSkeleton,
  decorators: [Skeleton]
} satisfies Meta<typeof SongItemSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SongSkeleton: Story = {};
