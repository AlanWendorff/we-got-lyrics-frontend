import type { Meta, StoryObj } from '@storybook/react';
import SongItem from './SongItem';
import { SongMock } from '@/mocks/Song.mock';

import { ROUTER_WRAP_ROOT } from '../../../../.storybook/decorators';

const meta = {
  title: 'shared/Song Item',
  component: SongItem,
  decorators: [ROUTER_WRAP_ROOT]
} satisfies Meta<typeof SongItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Song: Story = {
  args: SongMock
};
