import type { Meta, StoryObj } from '@storybook/react';
import AddToFavComponent from './AddToFav';

const meta = {
  title: 'shared/AddToFav',
  component: AddToFavComponent
} satisfies Meta<typeof AddToFavComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AddToFav: Story = { args: { favouriteStatus: true } };

export const AddToFavSlim: Story = { args: { favouriteStatus: true, slim: true } };
