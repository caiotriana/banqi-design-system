import { StyleSheet } from 'react-native';
import { radii, sizing, typography, type ColorTheme } from 'banqi-tokens/rn';
import type { BadgeVariant } from './Badge.types';

// ─── Constantes do Figma (node 795-754) ───────────────────────────────────────

/** borderRadius: 8px */
export const BADGE_RADIUS = radii.x2;

/** Dot visual — layout_WIN3U1: 8×8 centrado no container 16×16 */
export const DOT_SIZE = sizing.x2;

// ─── Token map por variante ────────────────────────────────────────────────────

export type BadgeTokens = {
  /** Cor de fundo do badge */
  bg: string;
  /** Cor do texto do label */
  textColor: string;
  /** Cor do dot de status (igual ao textColor) */
  dotColor: string;
};

/**
 * Resolve os tokens visuais para a variante atual do badge.
 * Mapeado 1:1 com os componentes do Figma (node 795-754).
 */
export function getBadgeTokens(
  theme: ColorTheme,
  variant: BadgeVariant,
  disabled: boolean
): BadgeTokens {
  // ─── Disabled (Variant=N/A) ──────────────────────────────────────────────────
  // fill_DOELRG=#F0F0F0 bg, fill_HSPLDQ=#9E9E9E text
  if (disabled) {
    return {
      bg: theme.surface.common.disabled, // grey['50'] = #F0F0F0
      textColor: theme.content.common.disabled, // grey['400'] = #9E9E9E
      dotColor: theme.content.common.disabled,
    };
  }

  switch (variant) {
    // ─── Highlight ─────────────────────────────────────────────────────────────
    // Figma: Surface/Accent/SecondaryPersistent + Content/Accent/SecondaryPersistent
    // fill_D5KPZG=#FADD05 bg, fill_E56QQ7=#4B4201 text
    case 'highlight':
      return {
        bg: theme.surface.accent.secondaryPersistent, // gold['700'] = #FADD05
        textColor: theme.content.accent.secondaryPersistent, // gold['1000'] = #4B4201
        dotColor: theme.content.accent.secondaryPersistent,
      };

    // ─── Neutral ───────────────────────────────────────────────────────────────
    // fill_ZEYKTL=#D8DDEA bg, fill_WLAV2M=#191E2F text
    case 'neutral':
      return {
        bg: theme.surface.subtleOnSubtle, // charcoal['200'] = #D8DDEA
        textColor: theme.content.default, // blackAlpha['1000'] = #191E2F
        dotColor: theme.content.default,
      };

    // ─── Accent ────────────────────────────────────────────────────────────────
    // fill_1O36N0=#D1DFFA bg, fill_C7CB3B=#0033C6 text
    case 'accent':
      return {
        bg: theme.surface.accent.primarySubtleOnSubtle, // cobalt['400'] = #D1DFFA
        textColor: theme.content.accent.primary, // cobaltAlpha['1000'] = #0033C6
        dotColor: theme.content.accent.primary,
      };

    // ─── Success ───────────────────────────────────────────────────────────────
    // fill_FFKQMN=#DEF1DA bg, fill_JHSGY9=#1E730D text
    case 'success':
      return {
        bg: theme.surface.feedback.successSubtleOnSubtle, // forestGreen['400'] = #DEF1DA
        textColor: theme.content.feedback.success, // forestGreen['700'] = #1E730D
        dotColor: theme.content.feedback.success,
      };

    // ─── Warning ───────────────────────────────────────────────────────────────
    // fill_7A14VJ=#FAEBD1 bg, fill_7INLOM=#8F5F10 text
    case 'warning':
      return {
        bg: theme.surface.feedback.warningSubtleOnSubtle, // bronze['400'] = #FAEBD1
        textColor: theme.content.feedback.warning, // bronze['900'] = #8F5F10
        dotColor: theme.content.feedback.warning,
      };

    // ─── Critical ──────────────────────────────────────────────────────────────
    // fill_07GVCJ=#FBE4E7 bg, fill_QSBA36=#CE1732 text
    case 'critical':
      return {
        bg: theme.surface.feedback.criticalSubtleOnSubtle, // cardinal['300'] = #FBE4E7
        textColor: theme.content.feedback.critical, // cardinal['800'] = #CE1732
        dotColor: theme.content.feedback.critical,
      };
  }
}

// ─── Static base styles ────────────────────────────────────────────────────────

export const baseStyles = StyleSheet.create({
  /**
   * Container do badge — Status=False: padding 2px 4px, gap 4px
   * Status=True: padding 2px 4px 2px 2px (left menor para acomodar dot)
   */
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: BADGE_RADIUS,
    minHeight: sizing.x5,
  },
  /** Sem dot — layout_GHFHUX: padding 2px 4px, gap 4px */
  badgeWithoutDot: {
    paddingVertical: sizing.half, // 2px
    paddingHorizontal: sizing.x1, // 4px
    gap: sizing.x1, // 4px
  },
  /** Com dot — layout_ARJ577: padding 2px 4px 2px 2px */
  badgeWithDot: {
    paddingTop: sizing.half, // 2px
    paddingBottom: sizing.half, // 2px
    paddingRight: sizing.x1, // 4px
    paddingLeft: sizing.half, // 2px
    gap: sizing.zero,
  },
  /**
   * Container do dot — layout_MWFHWH: 16×16 fixed.
   * O dot visual (8×8) fica centrado neste container.
   */
  dotContainer: {
    width: sizing.x4, // 16px
    height: sizing.x4, // 16px
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Dot visual — layout_WIN3U1: 8×8 círculo */
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  },
  /** Label — Label/XSmall: DM Sans 600, 12px, lh 14px, ls 0.83% */
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3, // 12px
    lineHeight: typography.lineHeight.x3_5, // 14px
    letterSpacing: typography.letterSpacing['100'], // 0.1 (≈ 0.83% de 12px)
    includeFontPadding: false,
  },
});
