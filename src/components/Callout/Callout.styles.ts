import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  shadow,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';
import type { CalloutVariant } from './Callout.types';

export const CALLOUT_WIDTH = 344;

export const CALLOUT_PADDING = sizing.x5;

export const CALLOUT_RADIUS = radii.x4;

export const CALLOUT_GAP = sizing.x3;

export const CONTENT_GAP = sizing.x3;

export const TEXT_GAP = sizing.x1;

export type CalloutTokens = {
  bg: string;
  borderColor: string;
  textColor: string;
  linkColor: string;
  shadowColor: string;
};

export function getCalloutTokens(
  theme: ColorTheme,
  variant: CalloutVariant
): CalloutTokens {
  switch (variant) {
    case 'standard':
      return {
        bg: theme.surface.accent.primarySuperSubtle,
        borderColor: theme.stroke.default,
        textColor: theme.content.default,
        linkColor: theme.content.accent.primary,
        shadowColor: theme.elevation.default,
      };

    case 'info':
      return {
        bg: theme.surface.feedback.infoSubtle,
        borderColor: theme.stroke.feedback.infoSubtle,
        textColor: theme.content.feedback.info,
        linkColor: theme.content.feedback.info,
        shadowColor: theme.elevation.default,
      };

    case 'success':
      return {
        bg: theme.surface.feedback.successSubtle,
        borderColor: theme.stroke.feedback.successSubtle,
        textColor: theme.content.feedback.success,
        linkColor: theme.content.feedback.success,
        shadowColor: theme.elevation.default,
      };

    case 'attention':
      return {
        bg: theme.surface.feedback.warningSubtle,
        borderColor: theme.stroke.feedback.warningSubtle,
        textColor: theme.content.feedback.warning,
        linkColor: theme.content.feedback.warning,
        shadowColor: theme.elevation.default,
      };

    case 'critical':
      return {
        bg: theme.surface.feedback.criticalSubtle,
        borderColor: theme.stroke.feedback.criticalSubtle,
        textColor: theme.content.feedback.critical,
        linkColor: theme.content.feedback.critical,
        shadowColor: theme.elevation.default,
      };
  }
}

export function getCalloutShadow(shadowColor: string) {
  return {
    shadowColor,
    shadowOffset: { width: shadow.axis.none, height: shadow.axis.quarter },
    shadowOpacity: 1,
    shadowRadius: shadow.blur.none,
    elevation: 2,
  };
}

export const baseStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: CALLOUT_WIDTH,
    borderRadius: CALLOUT_RADIUS,
    padding: CALLOUT_PADDING,
    gap: CALLOUT_GAP,
    alignSelf: 'flex-start',
  },
  contentWrapper: {
    flex: 1,
    gap: CONTENT_GAP,
  },
  mainContent: {
    gap: TEXT_GAP,
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
    lineHeight: typography.lineHeight.x5,
    includeFontPadding: false,
  },
  linkAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x1,
    alignSelf: 'flex-start',
    height: sizing.x4,
  },
  linkText: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  arrowContainer: {
    width: sizing.x4,
    height: sizing.x4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: sizing.x1 + 2,
    height: sizing.x1 + 2,
    borderTopWidth: border.quarter + 0.5,
    borderRightWidth: border.quarter + 0.5,
    transform: [{ rotate: '45deg' }],
  },
  closeButton: {
    width: sizing.x6,
    height: sizing.x6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: sizing.x3,
    height: sizing.x3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeLine1: {
    position: 'absolute',
    width: sizing.x3,
    height: border.quarter + 0.5,
    borderRadius: border.quarter,
    transform: [{ rotate: '45deg' }],
  },
  closeLine2: {
    position: 'absolute',
    width: sizing.x3,
    height: border.quarter + 0.5,
    borderRadius: border.quarter,
    transform: [{ rotate: '-45deg' }],
  },
});
