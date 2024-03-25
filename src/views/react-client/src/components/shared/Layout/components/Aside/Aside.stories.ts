import type { Meta, StoryObj } from '@storybook/react';
import AsideComponent from './Aside';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'layout/Aside',
  component: AsideComponent,
  decorators: [withRouter]
} satisfies Meta<typeof AsideComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Aside: Story = {};
