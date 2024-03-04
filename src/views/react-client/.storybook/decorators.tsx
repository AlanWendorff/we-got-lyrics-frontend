import { MemoryRouter } from 'react-router-dom';

export const ROUTER_WRAP_ROOT = (Story) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

export const ROUTER_WRAP_DIF_PATH = (Story) => (
  <MemoryRouter initialEntries={['/different-path']}>
    <Story />
  </MemoryRouter>
);
