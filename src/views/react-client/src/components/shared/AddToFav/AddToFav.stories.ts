import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../../../../.storybook/decorators';
import AddToFavComponent from './AddToFav';

const meta = {
  title: 'shared/Save',
  component: AddToFavComponent,
  decorators: [Skeleton]
} satisfies Meta<typeof AddToFavComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Save: Story = { args: { favouriteStatus: true } };

export const SaveSkeleton: Story = { args: { favouriteStatus: false, skeletonStatus: true } };

export const SaveSlim: Story = { args: { favouriteStatus: true, slim: true } };
