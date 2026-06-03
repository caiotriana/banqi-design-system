import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

export const BOX_SIZE = sizing.x6;

export const BOX_RADIUS = radii.full;

export const DOT_SIZE = sizing.x4;

export type RadioTokens = {
  boxBg: string;
  boxBorderColor: string;
  boxBorderWidth: number;
  dotColor: string | null;
  overlayColor: string | null;
  labelColor: string;
  hasShadow: boolean;
};

export function getRadioTokens(
  theme: ColorTheme,
  selected: boolean,
  disabled: boolean,
  hovered: boolean,
  pressed: boolean
): RadioTokens {
  if (disabled) {
    return {
      boxBg: theme.surface.default,
      boxBorderColor: theme.stroke.common.disabled,
      boxBorderWidth: border.quarter,
      dotColor: null,
      overlayColor: null,
      labelColor: theme.content.common.disabled,
      hasShadow: false,
    };
  }

  if (pressed) {
    return {
      boxBg: selected
        ? theme.surface.accent.primarySubtle
        : theme.surface.default,
      boxBorderColor: selected
        ? theme.stroke.accent.primary
        : theme.stroke.default,
      boxBorderWidth: border.quarter,
      dotColor: theme.content.accent.primary,
      overlayColor: theme.surface.common.pressed,
      labelColor: theme.content.default,
      hasShadow: true,
    };
  }

  if (hovered) {
    return {
      boxBg: selected
        ? theme.surface.accent.primarySubtle
        : theme.surface.default,
      boxBorderColor: selected
        ? theme.stroke.accent.primary
        : theme.stroke.default,
      boxBorderWidth: border.quarter,
      dotColor: theme.content.accent.primary,
      overlayColor: theme.surface.common.hover,
      labelColor: theme.content.default,
      hasShadow: true,
    };
  }

  return {
    boxBg: selected
      ? theme.surface.accent.primarySubtle
      : theme.surface.default,
    boxBorderColor: selected
      ? theme.stroke.accent.primary
      : theme.stroke.default,
    boxBorderWidth: border.quarter,
    dotColor: selected ? theme.content.accent.primaryPersistent : null,
    overlayColor: null,
    labelColor: theme.content.default,
    hasShadow: true,
  };
}

export const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2,
    alignSelf: 'flex-start',
  },
  shadowWrapper: {
    alignSelf: 'flex-start',
    borderRadius: BOX_RADIUS,
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: BOX_RADIUS,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: radii.full,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
  },
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '400',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x5,
    includeFontPadding: false,
  },
});
