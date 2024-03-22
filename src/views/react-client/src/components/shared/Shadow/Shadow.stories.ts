import type { Meta, StoryObj } from '@storybook/react';
import ShadowComponent from './Shadow';

const meta = {
  title: 'shared/Shadow',
  component: ShadowComponent
} satisfies Meta<typeof ShadowComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Shadow: Story = {};
