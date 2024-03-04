import type { Meta, StoryObj } from '@storybook/react';

import TopComponent from './Top';
import { ROUTER_WRAP_DIF_PATH } from '../../../../../../.storybook/decorators';

const meta = {
  title: 'shared/Top',
  component: TopComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [ROUTER_WRAP_DIF_PATH]
} satisfies Meta<typeof TopComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopDiffPath: Story = {};
