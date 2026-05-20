import { fileURLToPath } from 'url';
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
      resolve: {
        alias: {
          'react-native': 'react-native-web',
          'banqi-tokens/rn': fileURLToPath(
            new URL('../src/tokens/index.ts', import.meta.url)
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
    }),
};

export default config;
