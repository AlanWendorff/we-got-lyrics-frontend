import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@shared': `${path.resolve(__dirname, './src/components/shared/')}`,
        '@elements': `${path.resolve(__dirname, './src/components/elements/')}`,
        '@pages': `${path.resolve(__dirname, './src/pages/')}`,
        '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
        '@hocs': `${path.resolve(__dirname, './src/hocs/')}`,
        '@context': `${path.resolve(__dirname, './src/context/')}`,
        '@types': `${path.resolve(__dirname, './src/types/')}`,
        '@images': `${path.resolve(__dirname, './src/assets/images/')}`,
        '@services': `${path.resolve(__dirname, './src/services/')}`,
        '@styles': `${path.resolve(__dirname, './src/styles/')}`,

        // core
        '@core': `${path.resolve(__dirname, '../../core/')}`
      }
    }
  };
});
