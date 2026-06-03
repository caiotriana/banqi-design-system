import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

export const BOX_SIZE = sizing.x6;

export const BOX_RADIUS = radii.x2;

export const ICON_SIZE = sizing.x4;

export type CheckboxBoxTokens = {
  boxBg: string;
  boxBorderColor: string;
  boxBorderWidth: number;
  checkmarkColor: string | null;
  overlayColor: string | null;
  labelColor: string;
  hasShadow: boolean;
};

export function getCheckboxTokens(
  theme: ColorTheme,
  checked: boolean,
  disabled: boolean,
  hovered: boolean,
  pressed: boolean
): CheckboxBoxTokens {
  if (disabled) {
    return {
      boxBg: checked ? theme.surface.common.disabled : theme.surface.default,
      boxBorderColor: checked
        ? theme.surface.common.disabled
        : theme.stroke.common.disabled,
      boxBorderWidth: border.quarter,
      checkmarkColor: null,
      overlayColor: null,
      labelColor: theme.content.common.disabled,
      hasShadow: false,
    };
  }

  if (pressed) {
    return {
      boxBg: checked ? theme.surface.accent.primary : theme.surface.default,
      boxBorderColor: 'transparent',
      boxBorderWidth: border.none,
      checkmarkColor: checked
        ? theme.content.common.onColor
        : theme.content.accent.primary,
      overlayColor: theme.surface.common.pressed,
      labelColor: theme.content.default,
      hasShadow: true,
    };
  }

  if (hovered) {
    return {
      boxBg: checked ? theme.surface.accent.primary : theme.surface.default,
      boxBorderColor: theme.stroke.accent.primary,
      boxBorderWidth: border.quarter,
      checkmarkColor: checked
        ? theme.content.common.onColor
        : theme.content.accent.primary,
      overlayColor: theme.surface.common.hover,
      labelColor: theme.content.default,
      hasShadow: true,
    };
  }

  return {
    boxBg: checked ? theme.surface.accent.primary : theme.surface.default,
    boxBorderColor: checked ? 'transparent' : theme.stroke.default,
    boxBorderWidth: checked ? border.none : border.quarter,
    checkmarkColor: checked ? theme.content.common.onColor : null,
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
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
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
