// Auto-generated from tokens/export.json — do not edit directly.

import { lightPalette, darkPalette } from './palette';

export type ColorTheme = {
  background: {
    default: string;
    subtle: string;
    accentPrimaryPersistent: string;
  };
  surface: {
    default: string;
    subtle: string;
    subtleOnSubtle: string;
    accent: {
      primary: string;
      primarySuperSubtle: string;
      primarySubtle: string;
      primarySubtleOnSubtle: string;
      primaryPersistent: string;
      secondary: string;
      secondarySubtle: string;
      secondarySubtleOnSubtle: string;
      secondaryPersistent: string;
    };
    common: {
      disabled: string;
      ghost: string;
      hover: string;
      pressed: string;
      selected: string;
      onColor: string;
      onColorSubtle: string;
      overlay: string;
      overlaySuble: string;
    };
    feedback: {
      info: string;
      infoSubtle: string;
      infoSubtleOnSubtle: string;
      critical: string;
      criticalSubtle: string;
      criticalSubtleOnSubtle: string;
      success: string;
      successSubtle: string;
      successSubtleOnSubtle: string;
      warning: string;
      warningSubtle: string;
      warningSubtleOnSubtle: string;
    };
    inverse: string;
  };
  content: {
    default: string;
    subtle: string;
    accent: {
      primary: string;
      primaryPersistent: string;
      secondary: string;
      secondaryPersistent: string;
    };
    common: {
      disabled: string;
      onColor: string;
      onColorSubtle: string;
      onColorDisabled: string;
      selected: string;
    };
    feedback: {
      info: string;
      critical: string;
      success: string;
      warning: string;
    };
    inverse: string;
  };
  stroke: {
    default: string;
    accent: {
      primary: string;
      secondary: string;
    };
    common: {
      disabled: string;
      onColor: string;
      selected: string;
    };
    feedback: {
      info: string;
      infoSubtle: string;
      critical: string;
      criticalSubtle: string;
      success: string;
      successSubtle: string;
      warning: string;
      warningSubtle: string;
    };
  };
  elevation: {
    default: string;
    sheet: string;
  };
};

export const light: ColorTheme = {
  background: {
    default: lightPalette.whiteAlpha['1000'],
    subtle: lightPalette.charcoal['100'],
    accentPrimaryPersistent: lightPalette.cobalt['800'],
  },
  surface: {
    default: lightPalette.whiteAlpha['1000'],
    subtle: lightPalette.charcoal['100'],
    subtleOnSubtle: lightPalette.charcoal['200'],
    accent: {
      primary: lightPalette.cobalt['800'],
      primarySuperSubtle: lightPalette.cobalt['50'],
      primarySubtle: lightPalette.cobalt['200'],
      primarySubtleOnSubtle: lightPalette.cobalt['400'],
      primaryPersistent: lightPalette.cobalt['800'],
      secondary: lightPalette.gold['700'],
      secondarySubtle: lightPalette.gold['200'],
      secondarySubtleOnSubtle: lightPalette.gold['400'],
      secondaryPersistent: lightPalette.gold['700'],
    },
    common: {
      disabled: lightPalette.grey['50'],
      ghost: lightPalette.cobaltAlpha['0'],
      hover: lightPalette.whiteAlpha['200'],
      pressed: lightPalette.whiteAlpha['400'],
      selected: lightPalette.cobalt['200'],
      onColor: lightPalette.whiteAlpha['1000'],
      onColorSubtle: lightPalette.whiteAlpha['400'],
      overlay: lightPalette.blackAlpha['800'],
      overlaySuble: lightPalette.blackAlpha['600'],
    },
    feedback: {
      info: lightPalette.mariner['800'],
      infoSubtle: lightPalette.mariner['200'],
      infoSubtleOnSubtle: lightPalette.mariner['400'],
      critical: lightPalette.cardinal['700'],
      criticalSubtle: lightPalette.cardinal['200'],
      criticalSubtleOnSubtle: lightPalette.cardinal['300'],
      success: lightPalette.forestGreen['700'],
      successSubtle: lightPalette.forestGreen['200'],
      successSubtleOnSubtle: lightPalette.forestGreen['400'],
      warning: lightPalette.bronze['900'],
      warningSubtle: lightPalette.bronze['200'],
      warningSubtleOnSubtle: lightPalette.bronze['400'],
    },
    inverse: lightPalette.charcoal['1000'],
  },
  content: {
    default: lightPalette.charcoal['1000'],
    subtle: lightPalette.blackAlpha['600'],
    accent: {
      primary: lightPalette.cobalt['800'],
      primaryPersistent: lightPalette.cobalt['800'],
      secondary: lightPalette.gold['1000'],
      secondaryPersistent: lightPalette.gold['1000'],
    },
    common: {
      disabled: lightPalette.grey['400'],
      onColor: lightPalette.whiteAlpha['1000'],
      onColorSubtle: lightPalette.whiteAlpha['600'],
      onColorDisabled: lightPalette.whiteAlpha['400'],
      selected: lightPalette.cobalt['800'],
    },
    feedback: {
      info: lightPalette.mariner['800'],
      critical: lightPalette.cardinal['800'],
      success: lightPalette.forestGreen['700'],
      warning: lightPalette.bronze['900'],
    },
    inverse: lightPalette.whiteAlpha['1000'],
  },
  stroke: {
    default: lightPalette.cobaltAlpha['50'],
    accent: {
      primary: lightPalette.cobalt['800'],
      secondary: lightPalette.gold['900'],
    },
    common: {
      disabled: lightPalette.grey['200'],
      onColor: lightPalette.whiteAlpha['200'],
      selected: lightPalette.cobalt['800'],
    },
    feedback: {
      info: lightPalette.mariner['800'],
      infoSubtle: lightPalette.mariner['400'],
      critical: lightPalette.cardinal['800'],
      criticalSubtle: lightPalette.cardinal['400'],
      success: lightPalette.forestGreen['700'],
      successSubtle: lightPalette.forestGreen['400'],
      warning: lightPalette.bronze['900'],
      warningSubtle: lightPalette.bronze['400'],
    },
  },
  elevation: {
    default: lightPalette.cobaltAlpha['400'],
    sheet: lightPalette.blackAlpha['50'],
  },
};

export const dark: ColorTheme = {
  background: {
    default: darkPalette.whiteAlpha['1000'],
    subtle: darkPalette.charcoal['100'],
    accentPrimaryPersistent: darkPalette.cobalt['300'],
  },
  surface: {
    default: darkPalette.whiteAlpha['1000'],
    subtle: darkPalette.charcoal['100'],
    subtleOnSubtle: darkPalette.charcoal['200'],
    accent: {
      primary: darkPalette.cobalt['600'],
      primarySuperSubtle: darkPalette.cobalt['50'],
      primarySubtle: darkPalette.cobalt['100'],
      primarySubtleOnSubtle: darkPalette.cobalt['200'],
      primaryPersistent: darkPalette.cobalt['300'],
      secondary: darkPalette.gold['300'],
      secondarySubtle: darkPalette.gold['100'],
      secondarySubtleOnSubtle: darkPalette.gold['200'],
      secondaryPersistent: darkPalette.gold['600'],
    },
    common: {
      disabled: darkPalette.grey['50'],
      ghost: darkPalette.cobaltAlpha['0'],
      hover: darkPalette.blackAlpha['200'],
      pressed: darkPalette.blackAlpha['400'],
      selected: darkPalette.cobalt['200'],
      onColor: darkPalette.blackAlpha['1000'],
      onColorSubtle: darkPalette.blackAlpha['400'],
      overlay: darkPalette.whiteAlpha['800'],
      overlaySuble: darkPalette.whiteAlpha['600'],
    },
    feedback: {
      info: darkPalette.mariner['400'],
      infoSubtle: darkPalette.mariner['100'],
      infoSubtleOnSubtle: darkPalette.mariner['200'],
      critical: darkPalette.cardinal['400'],
      criticalSubtle: darkPalette.cardinal['100'],
      criticalSubtleOnSubtle: darkPalette.cardinal['200'],
      success: darkPalette.forestGreen['400'],
      successSubtle: darkPalette.forestGreen['100'],
      successSubtleOnSubtle: darkPalette.forestGreen['200'],
      warning: darkPalette.bronze['400'],
      warningSubtle: darkPalette.bronze['100'],
      warningSubtleOnSubtle: darkPalette.bronze['200'],
    },
    inverse: darkPalette.blackAlpha['1000'],
  },
  content: {
    default: darkPalette.blackAlpha['1000'],
    subtle: darkPalette.blackAlpha['600'],
    accent: {
      primary: darkPalette.cobalt['700'],
      primaryPersistent: darkPalette.cobalt['300'],
      secondary: darkPalette.gold['700'],
      secondaryPersistent: darkPalette.gold['100'],
    },
    common: {
      disabled: darkPalette.grey['400'],
      onColor: darkPalette.blackAlpha['1000'],
      onColorSubtle: darkPalette.blackAlpha['600'],
      onColorDisabled: darkPalette.blackAlpha['400'],
      selected: darkPalette.cobalt['700'],
    },
    feedback: {
      info: darkPalette.mariner['700'],
      critical: darkPalette.cardinal['700'],
      success: darkPalette.forestGreen['700'],
      warning: darkPalette.bronze['700'],
    },
    inverse: darkPalette.whiteAlpha['1000'],
  },
  stroke: {
    default: darkPalette.cobaltAlpha['200'],
    accent: {
      primary: darkPalette.cobalt['700'],
      secondary: darkPalette.gold['700'],
    },
    common: {
      disabled: darkPalette.grey['200'],
      onColor: darkPalette.blackAlpha['200'],
      selected: darkPalette.cobalt['700'],
    },
    feedback: {
      info: darkPalette.mariner['700'],
      infoSubtle: darkPalette.mariner['300'],
      critical: darkPalette.cardinal['700'],
      criticalSubtle: darkPalette.cardinal['300'],
      success: darkPalette.forestGreen['700'],
      successSubtle: darkPalette.forestGreen['300'],
      warning: darkPalette.bronze['700'],
      warningSubtle: darkPalette.bronze['300'],
    },
  },
  elevation: {
    default: darkPalette.cobaltAlpha['400'],
    sheet: darkPalette.blackAlpha['600'],
  },
};
