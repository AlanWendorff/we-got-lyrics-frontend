import type { Meta, StoryObj } from '@storybook/react';
import DescriptionComponent from './Description';
import { DescriptionMock } from '@core/configuration/mocks/Artist.mock';
import { Skeleton } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'Pages/Artist/Description',
  component: DescriptionComponent,
  decorators: [Skeleton]
} satisfies Meta<typeof DescriptionComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Description: Story = {
  args: DescriptionMock
};

export const DescriptionSkeleton: Story = {
  args: {
    name: undefined,
    description: undefined
  }
};
