import type { Meta, StoryObj } from '@storybook/react';
import GradientComponent from './Gradient';

const meta = {
  title: 'shared/Gradient',
  component: GradientComponent,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof GradientComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gradient: Story = { args: { color: 'c46438' } };
