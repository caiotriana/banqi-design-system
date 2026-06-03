import { fileURLToPath } from 'url';
import { resolve } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
  staticDirs: ['../assets'],
  viteFinal: (viteConfig, { configType }) =>
    mergeConfig(viteConfig, {
      define: {
        '__DEV__': JSON.stringify(configType !== 'PRODUCTION'),
        'process.env.NODE_ENV': JSON.stringify(
          configType === 'PRODUCTION' ? 'production' : 'development'
        ),
      },
      // Impede o Vite de pré-bundlizar react-native-svg (usa APIs nativas do RN)
      // e banqi-icons (que a importa como dependência).
      optimizeDeps: {
        exclude: ['react-native-svg', 'banqi-icons'],
      },
      resolve: {
        alias: {
          'react-native': 'react-native-web',
          // Mapeia react-native-svg para um stub web, evitando codegenNativeComponent
          // e demais APIs nativas que não existem no ambiente web do Storybook.
          'react-native-svg': resolve(
            fileURLToPath(new URL('.', import.meta.url)),
            'mocks/react-native-svg.tsx'
          ),
        },
        extensions: [
          '.web.tsx',
          '.web.ts',
          '.web.jsx',
          '.web.js',
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
        ],
      },
      server: {
        fs: {
          // `banqi-tokens` is linked via a portal symlink to a sibling folder
          // outside this project; allow Vite's dev server to read it.
          allow: [fileURLToPath(new URL('../..', import.meta.url))],
        },
      },
    }),
};

export default config;
