import type { Meta, StoryObj } from '@storybook/react';
import LyricsComponent from './Lyrics';
import { LyricsMock } from '@core/configuration/mocks/Song.mock';
import { Skeleton } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'Pages/Song/Lyrics',
  component: LyricsComponent,
  decorators: [Skeleton]
} satisfies Meta<typeof LyricsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Lyrics: Story = {
  args: LyricsMock
};

export const LyricsSkeleton: Story = {
  args: {
    lyrics: undefined,
    songTitle: undefined
  }
};
