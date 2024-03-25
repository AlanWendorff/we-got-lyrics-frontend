import type { Meta, StoryObj } from '@storybook/react';
import MobileNavbarComponent from './MobileNavbar';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'layout/MobileNavbar',
  component: MobileNavbarComponent,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof MobileNavbarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MobileNavbar: Story = {};
