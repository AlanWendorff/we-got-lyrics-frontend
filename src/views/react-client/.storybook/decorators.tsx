import { StoryFn } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

export const RouterOnRoot = (Story: StoryFn) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

export const RouterOnDifPath = (Story: StoryFn) => (
  <MemoryRouter initialEntries={['/different-path']}>
    <Story />
  </MemoryRouter>
);

export const Skeleton = (Story: StoryFn) => (
  <SkeletonTheme baseColor='#2a2a2a' highlightColor='#525252'>
    <Story />
  </SkeletonTheme>
);
