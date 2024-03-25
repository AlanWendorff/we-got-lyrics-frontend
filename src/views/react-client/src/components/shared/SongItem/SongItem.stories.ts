import type { Meta, StoryObj } from '@storybook/react';
import SongItem from './SongItem';
import { SongMock } from '@core/configuration/mocks/Song.mock';
import { RouterOnRoot } from '../../../../.storybook/decorators';

const meta = {
  title: 'shared/Song Item',
  component: SongItem,
  decorators: [RouterOnRoot]
} satisfies Meta<typeof SongItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Song: Story = {
  args: SongMock
};

export const SongWithSaveBtn: Story = {
  args: { ...SongMock, showControls: true }
};
