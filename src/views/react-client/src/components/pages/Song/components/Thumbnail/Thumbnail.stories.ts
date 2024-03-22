import type { Meta, StoryObj } from '@storybook/react';
import ThumbnailComponent from './Thumbnail';
import { SongMock } from '@core/configuration/mocks/Song.mock';

const meta = {
  title: 'Pages/Song/Thumbnail',
  component: ThumbnailComponent
} satisfies Meta<typeof ThumbnailComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Thumbnail: Story = {
  args: {
    image: SongMock.thumbnail
  }
};

export const ThumbnailSkeleton: Story = {
  args: {
    image: undefined
  }
};
