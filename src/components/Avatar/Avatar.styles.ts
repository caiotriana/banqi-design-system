import { StyleSheet } from 'react-native';
import { radii, sizing, typography, type ColorTheme } from 'banqi-tokens/rn';
import type { AvatarSize, AvatarState, AvatarVariant } from './Avatar.types';

export type AvatarSizeTokens = {
  dimension: number;
  borderRadius: number;
  iconSize: number;
  fontSize: number;
  lineHeight: number;
};

export function getSizeTokens(size: AvatarSize): AvatarSizeTokens {
  switch (size) {
    case 'small':
      return {
        dimension: 36,
        borderRadius: radii.x3,
        iconSize: sizing.x5,
        fontSize: typography.fontSize.x3,
        lineHeight: typography.lineHeight.x3_5,
      };
    case 'standard':
      return {
        dimension: 48,
        borderRadius: radii.x4,
        iconSize: sizing.x5,
        fontSize: typography.fontSize.x3_5,
        lineHeight: typography.lineHeight.x4,
      };
    case 'large':
      return {
        dimension: 60,
        borderRadius: radii.x6,
        iconSize: sizing.x6,
        fontSize: typography.fontSize.x5,
        lineHeight: typography.lineHeight.x5,
      };
  }
}

export type AvatarVisualTokens = {
  bg: string;
  contentColor: string;
};

export function getVisualTokens(
  theme: ColorTheme,
  variant: AvatarVariant,
  state: AvatarState
): AvatarVisualTokens {
  if (variant === 'logo') {
    return {
      bg: 'transparent',
      contentColor: theme.content.accent.primary,
    };
  }

  if (variant === 'image') {
    return {
      bg: theme.surface.subtle,
      contentColor: theme.content.common.onColor,
    };
  }

  if (state === 'disabled') {
    return {
      bg: theme.surface.common.disabled,
      contentColor: theme.content.common.disabled,
    };
  }

  return {
    bg: theme.surface.subtle,
    contentColor: theme.content.default,
  };
}

export const baseStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  skeletonOverlay: {
    ...StyleSheet.absoluteFill,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  initials: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    textAlign: 'center',
    includeFontPadding: false,
  },
});
