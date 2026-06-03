import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

export const CARD_PADDING = sizing.x5;

export const CARD_GAP = sizing.x4;

export const CARD_RADIUS = radii.x6;

export const INNER_WIDTH = sizing.x28;

export const TOP_GAP = sizing.x2;

export const BOTTOM_GAP = sizing.x1;

export type ShortcutTokens = {
  cardBg: string;
  cardBorderColor: string;
  cardBorderWidth: number;
  overlayColor: string | null;
  titleColor: string;
  descriptionColor: string;
};

export function getShortcutTokens(
  theme: ColorTheme,
  hovered: boolean,
  pressed: boolean
): ShortcutTokens {
  if (pressed) {
    return {
      cardBg: theme.surface.accent.primarySuperSubtle,
      cardBorderColor: 'transparent',
      cardBorderWidth: border.none,
      overlayColor: theme.surface.common.pressed,
      titleColor: theme.content.default,
      descriptionColor: theme.content.subtle,
    };
  }

  if (hovered) {
    return {
      cardBg: theme.surface.accent.primarySuperSubtle,
      cardBorderColor: theme.stroke.default,
      cardBorderWidth: border.quarter,
      overlayColor: theme.surface.common.hover,
      titleColor: theme.content.default,
      descriptionColor: theme.content.subtle,
    };
  }

  return {
    cardBg: theme.surface.accent.primarySuperSubtle,
    cardBorderColor: theme.stroke.default,
    cardBorderWidth: border.quarter,
    overlayColor: null,
    titleColor: theme.content.default,
    descriptionColor: theme.content.subtle,
  };
}

export const baseStyles = StyleSheet.create({
  shadowWrapper: {
    alignSelf: 'flex-start',
    borderRadius: CARD_RADIUS,
  },
  card: {
    width: INNER_WIDTH + CARD_PADDING * 2,
    borderRadius: CARD_RADIUS,
    padding: CARD_PADDING,
    gap: CARD_GAP,
    overflow: 'hidden',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: TOP_GAP,
    width: INNER_WIDTH,
  },
  trailing: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottom: {
    gap: BOTTOM_GAP,
    width: INNER_WIDTH,
  },
  title: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  description: {
    fontFamily: typography.fontFamily,
    fontWeight: '400',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    borderRadius: CARD_RADIUS,
  },
});
