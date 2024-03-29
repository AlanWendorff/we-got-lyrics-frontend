import type { Meta, StoryObj } from '@storybook/react';
import ThumbnailComponent from './Thumbnail';
import { ArtistMock } from '@core/configuration/mocks/Artist.mock';
import { Skeleton } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'Pages/Artist/Thumbnail',
  component: ThumbnailComponent,
  decorators: [Skeleton]
} satisfies Meta<typeof ThumbnailComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Thumbnail: Story = {
  args: {
    image: ArtistMock.thumbnail
  }
};

export const ThumbnailSkeleton: Story = {
  args: {
    image: undefined
  }
};
