import { addons } from '@storybook/manager-api';

addons.setConfig({
  toolbar: {
    'remount': { hidden: true },
    'zoom': { hidden: true },
    'eject': { hidden: true },
    'copy': { hidden: true },
    'fullscreen': { hidden: true },
    'storybook/measure-addon/tool': { hidden: true },
    'storybook/outline': { hidden: true },
    'storybook/background/tool': { hidden: true },
    'storybook/viewport/tool': { hidden: true },
    'storybook/viewport/tool-rotate': { hidden: true },
  },
});
