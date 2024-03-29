import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env
    },
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'We got lyrics',
          short_name: 'WG.lyrics',
          description: 'Your favorite site for consulting lyrics.',
          theme_color: '#000000',
          background_color: '#000000',
          display: 'standalone',
          orientation: 'portrait',
          scope: 'https://we-got-lyrics.vercel.app/',
          id: 'we-got-lyrics',
          start_url: 'https://we-got-lyrics.vercel.app/',
          icons: [
            {
              src: './public/pwa/icon-96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: './public/pwa/icon-128.png',
              sizes: '128x128',
              type: 'image/png'
            },
            {
              src: './public/pwa/icon-128.png',
              sizes: '128x128',
              type: 'image/png',
              purpose: 'apple touch icon'
            },
            {
              src: './public/pwa/icon-256.png',
              sizes: '256x256',
              type: 'image/png'
            },
            {
              src: './public/pwa/icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ],
          screenshots: [
            {
              src: './public/pwa/app-screenshot-android.png',
              sizes: '414x896',
              type: 'image/png',
              form_factor: 'narrow',
              label: 'Homescreen of WG.lyrics'
            },
            {
              src: './public/pwa/app-screenshot-desktop.png',
              sizes: '1920x1080',
              type: 'image/png',
              form_factor: 'wide',
              label: 'Homescreen of WG.lyrics'
            }
          ]
        }
      })
    ],
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
        '@utils': `${path.resolve(__dirname, './src/utils/')}`,

        // core
        '@core': `${path.resolve(__dirname, '../../core/')}`
      }
    }
  };
});
