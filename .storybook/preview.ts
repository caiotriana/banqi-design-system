import type { Preview } from '@storybook/react';
import { withThemeProvider } from '../src/components/ThemeProvider/withThemeProvider';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Tema global dos componentes',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        type: 'dynamic',
        language: 'tsx',
      },
    },
    backgrounds: { disable: true },
    actions: { disable: true },
    interactions: { disable: true },
    viewport: { disable: true },
    measure: { disable: true },
    outline: { disable: true },
  },
};

export default preview;
