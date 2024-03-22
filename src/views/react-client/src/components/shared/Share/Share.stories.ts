import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../../../../.storybook/decorators';
import ShareComponent from './Share';

const meta = {
  title: 'shared/Share',
  component: ShareComponent,
  decorators: [Skeleton]
} satisfies Meta<typeof ShareComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Share: Story = {
  args: {
    message: 'Shearing...'
  }
};

export const ShareSkeleton: Story = {
  args: {
    message: '',
    skeletonStatus: true
  }
};
