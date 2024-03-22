import type { Meta, StoryObj } from '@storybook/react';
import BannerComponent from './Banner';
import { BannerMock } from '@core/configuration/mocks/Artist.mock';

const meta = {
  title: 'Pages/Artist/Banner',
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

export const BannerSkeleton: Story = {
  args: {
    banner: undefined,
    bannerColors: undefined
  }
};
