import type { Meta, StoryObj } from '@storybook/react';
import { TSong } from '@core/storeAssets/domain/models/StoreAssets.model';
import ControlsComponent from './Controls';
import { FullSongMock } from '@core/configuration/mocks/Song.mock';

const meta = {
  title: 'Pages/Song/Controls',
  component: ControlsComponent
} satisfies Meta<typeof ControlsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controls: Story = {
  args: {
    isSongStored: true,
    song: FullSongMock,
    handleSongFav: (song: TSong) => {}
  }
};

export const ControlsComponentSkeleton: Story = {
  args: {
    isSongStored: false,
    song: null,
    handleSongFav: (song: TSong) => {}
  }
};
