import { StoryFn } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export const ROUTER_WRAP_ROOT = (Story: StoryFn) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

export const ROUTER_WRAP_DIF_PATH = (Story: StoryFn) => (
  <MemoryRouter initialEntries={['/different-path']}>
    <Story />
  </MemoryRouter>
);
