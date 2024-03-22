import type { Meta, StoryObj } from '@storybook/react';
import ControlsComponent from './Controls';
import { FullSongMock } from '@core/configuration/mocks/Song.mock';
import { Skeleton } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'Pages/Song/Controls',
  component: ControlsComponent,
  decorators: [Skeleton]
} satisfies Meta<typeof ControlsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controls: Story = {
  args: {
    isSongStored: true,
    song: FullSongMock,
    handleSongFav: () => {}
  }
};

export const ControlsComponentSkeleton: Story = {
  args: {
    isSongStored: false,
    song: null,
    handleSongFav: () => {}
  }
};
