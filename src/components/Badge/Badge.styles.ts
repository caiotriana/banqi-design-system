import { StyleSheet } from 'react-native';
import { radii, sizing, typography, type ColorTheme } from 'banqi-tokens/rn';
import type { BadgeVariant } from './Badge.types';

export const BADGE_RADIUS = radii.x2;

export const DOT_SIZE = sizing.x2;

export type BadgeTokens = {
  bg: string;
  textColor: string;
  dotColor: string;
};

export function getBadgeTokens(
  theme: ColorTheme,
  variant: BadgeVariant,
  disabled: boolean
): BadgeTokens {
  if (disabled) {
    return {
      bg: theme.surface.common.disabled,
      textColor: theme.content.common.disabled,
      dotColor: theme.content.common.disabled,
    };
  }

  switch (variant) {
    case 'highlight':
      return {
        bg: theme.surface.accent.secondaryPersistent,
        textColor: theme.content.accent.secondaryPersistent,
        dotColor: theme.content.accent.secondaryPersistent,
      };

    case 'neutral':
      return {
        bg: theme.surface.subtleOnSubtle,
        textColor: theme.content.default,
        dotColor: theme.content.default,
      };

    case 'accent':
      return {
        bg: theme.surface.accent.primarySubtleOnSubtle,
        textColor: theme.content.accent.primary,
        dotColor: theme.content.accent.primary,
      };

    case 'success':
      return {
        bg: theme.surface.feedback.successSubtleOnSubtle,
        textColor: theme.content.feedback.success,
        dotColor: theme.content.feedback.success,
      };

    case 'warning':
      return {
        bg: theme.surface.feedback.warningSubtleOnSubtle,
        textColor: theme.content.feedback.warning,
        dotColor: theme.content.feedback.warning,
      };

    case 'critical':
      return {
        bg: theme.surface.feedback.criticalSubtleOnSubtle,
        textColor: theme.content.feedback.critical,
        dotColor: theme.content.feedback.critical,
      };
  }
}

export const baseStyles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: BADGE_RADIUS,
    minHeight: sizing.x5,
  },
  badgeWithoutDot: {
    paddingVertical: sizing.half,
    paddingHorizontal: sizing.x1,
    gap: sizing.x1,
  },
  badgeWithDot: {
    paddingTop: sizing.half,
    paddingBottom: sizing.half,
    paddingRight: sizing.x1,
    paddingLeft: sizing.half,
    gap: sizing.zero,
  },
  dotContainer: {
    width: sizing.x4,
    height: sizing.x4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  },
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3,
    lineHeight: typography.lineHeight.x3_5,
    letterSpacing: typography.letterSpacing['100'],
    includeFontPadding: false,
  },
});
