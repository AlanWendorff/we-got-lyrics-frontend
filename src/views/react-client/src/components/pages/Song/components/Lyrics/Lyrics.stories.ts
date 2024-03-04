import type { Meta, StoryObj } from '@storybook/react';
import LyricsComponent from './Lyrics';
import { LyricsMock } from '@/mocks/Song.mock';

const meta = {
  title: 'Song/Lyrics',
  component: LyricsComponent
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
