import type { Meta, StoryObj } from '@storybook/react';
import NotFoundComponent from './NotFound';

const meta = {
  title: 'Pages/NotFound',
  component: NotFoundComponent
} satisfies Meta<typeof NotFoundComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {};
