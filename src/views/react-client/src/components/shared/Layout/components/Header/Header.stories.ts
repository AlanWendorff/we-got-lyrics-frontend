import type { Meta, StoryObj } from '@storybook/react';
import HeaderComponent from './Header';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import { ARTIST } from '@/constants/routes';

const meta = {
  title: 'layout/Header',
  component: HeaderComponent,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: '1177', name: 'Taylor%20Swift' }
      },
      routing: {
        path: ARTIST
      }
    })
  }
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {};
