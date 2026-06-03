import { StyleSheet } from 'react-native';
import { radii, sizing, border, type ColorTheme } from 'banqi-tokens/rn';
import type { IconButtonVariant, IconButtonSize } from './IconButton.types';

export type VariantTokens = {
  backgroundColor: string;
  iconColor: string;
  borderColor: string;
  borderWidth: number;
};

export function getVariantTokens(
  variant: IconButtonVariant,
  theme: ColorTheme,
  disabled: boolean
): VariantTokens {
  if (disabled) {
    return {
      backgroundColor: theme.surface.common.disabled,
      iconColor: theme.content.common.disabled,
      borderColor: 'transparent',
      borderWidth: border.none,
    };
  }

  const map: Record<IconButtonVariant, VariantTokens> = {
    'primary': {
      backgroundColor: theme.surface.accent.primaryPersistent,
      iconColor: theme.content.common.onColor,
      borderColor: 'transparent',
      borderWidth: border.none,
    },
    'secondary': {
      backgroundColor: theme.surface.accent.primarySubtleOnSubtle,
      iconColor: theme.content.accent.primaryPersistent,
      borderColor: theme.stroke.default,
      borderWidth: border.quarter,
    },
    'ghost': {
      backgroundColor: theme.surface.common.ghost,
      iconColor: theme.content.accent.primaryPersistent,
      borderColor: 'transparent',
      borderWidth: border.none,
    },
    'ghost-oncolor': {
      backgroundColor: theme.surface.common.ghost,
      iconColor: theme.content.common.onColor,
      borderColor: 'transparent',
      borderWidth: border.none,
    },
    'oncolor': {
      backgroundColor: theme.surface.common.onColor,
      iconColor: theme.content.accent.primaryPersistent,
      borderColor: 'transparent',
      borderWidth: border.none,
    },
    'critical': {
      backgroundColor: theme.surface.feedback.critical,
      iconColor: theme.content.common.onColor,
      borderColor: 'transparent',
      borderWidth: border.none,
    },
    'ghost-critical': {
      backgroundColor: theme.surface.common.ghost,
      iconColor: theme.content.feedback.critical,
      borderColor: 'transparent',
      borderWidth: border.none,
    },
  };

  return map[variant];
}

export function getSizeTokens(size: IconButtonSize): {
  dimension: number;
  borderRadius: number;
} {
  if (size === 'small') {
    return { dimension: sizing.x5 + sizing.x2 * 2, borderRadius: radii.x3 };
  }
  return { dimension: sizing.x5 + sizing.x3 * 2, borderRadius: radii.x4 };
}

export const baseStyles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconContainer: {
    width: sizing.x5,
    height: sizing.x5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
  },
});
