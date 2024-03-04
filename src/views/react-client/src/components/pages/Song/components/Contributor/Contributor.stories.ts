import type { Meta, StoryObj } from '@storybook/react';
import ContributorComponent from './Contributor';
import { ContributorMock } from '@/mocks/Song.mock';

const meta = {
  title: 'Pages/Song/Contributor',
  component: ContributorComponent
} satisfies Meta<typeof ContributorComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contributor: Story = {
  args: ContributorMock
};
