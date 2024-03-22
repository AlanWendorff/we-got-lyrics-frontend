import type { Meta, StoryObj } from '@storybook/react';
import ShareComponent from './Share';

const meta = {
  title: 'shared/Share',
  component: ShareComponent
} satisfies Meta<typeof ShareComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Share: Story = {
  args: {
    message: 'Shearing...'
  }
};
