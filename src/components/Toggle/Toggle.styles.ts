import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  opacity,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

export const TRACK_WIDTH = 40;

export const TRACK_HEIGHT = sizing.x6;

export const TRACK_RADIUS = radii.x2;

export const KNOB_SIZE = sizing.x4;

export const KNOB_RADIUS = radii.x1;

export const TRACK_PADDING = sizing.x1;

export const KNOB_POS_OFF = TRACK_PADDING;

export const KNOB_POS_ON = TRACK_WIDTH - TRACK_PADDING - KNOB_SIZE;

export const KNOB_TRAVEL = KNOB_POS_ON - KNOB_POS_OFF;

export type ToggleTokens = {
  trackBg: string;
  trackBorderColor: string;
  trackBorderWidth: number;
  knobColor: string;
  knobOpacity: number;
  overlayColor: string | null;
  labelColor: string;
  hasShadow: boolean;
};

export function getToggleTokens(
  theme: ColorTheme,
  enabled: boolean,
  disabled: boolean,
  hovered: boolean,
  pressed: boolean
): ToggleTokens {
  if (disabled) {
    return {
      trackBg: enabled ? theme.surface.common.disabled : theme.surface.default,
      trackBorderColor: enabled ? 'transparent' : theme.stroke.common.disabled,
      trackBorderWidth: enabled ? border.none : border.quarter,
      knobColor: theme.content.common.disabled,
      knobOpacity: opacity.solid,
      overlayColor: null,
      labelColor: theme.content.common.disabled,
      hasShadow: false,
    };
  }

  if (pressed) {
    return {
      trackBg: enabled ? theme.surface.accent.primary : theme.surface.default,
      trackBorderColor: enabled ? 'transparent' : theme.stroke.accent.primary,
      trackBorderWidth: enabled ? border.none : border.quarter,
      knobColor: enabled
        ? theme.content.common.onColor
        : theme.content.accent.primary,
      knobOpacity: opacity.intense,
      overlayColor: theme.surface.common.pressed,
      labelColor: theme.content.default,
      hasShadow: true,
    };
  }

  if (hovered) {
    return {
      trackBg: enabled ? theme.surface.accent.primary : theme.surface.default,
      trackBorderColor: enabled ? 'transparent' : theme.stroke.accent.primary,
      trackBorderWidth: enabled ? border.none : border.quarter,
      knobColor: enabled
        ? theme.content.common.onColor
        : theme.content.accent.primary,
      knobOpacity: opacity.intense,
      overlayColor: theme.surface.common.hover,
      labelColor: theme.content.default,
      hasShadow: true,
    };
  }

  return {
    trackBg: enabled ? theme.surface.accent.primary : theme.surface.default,
    trackBorderColor: enabled ? 'transparent' : theme.stroke.default,
    trackBorderWidth: enabled ? border.none : border.quarter,
    knobColor: enabled
      ? theme.content.common.onColor
      : theme.content.accent.primary,
    knobOpacity: opacity.intense,
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
    borderRadius: TRACK_RADIUS,
  },
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_RADIUS,
    overflow: 'hidden',
  },
  knob: {
    position: 'absolute',
    left: KNOB_POS_OFF,
    top: TRACK_PADDING,
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: KNOB_RADIUS,
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
