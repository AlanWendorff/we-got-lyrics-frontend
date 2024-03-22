import type { Meta, StoryObj } from '@storybook/react';
import BannerComponent from './Banner';
import { BannerMock } from '@core/configuration/mocks/Song.mock';

const meta = {
  title: 'Pages/Song/Banner',
  component: BannerComponent,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BannerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: BannerMock
};
