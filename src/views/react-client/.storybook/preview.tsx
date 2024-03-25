import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
