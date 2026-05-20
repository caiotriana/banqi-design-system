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

// ─── Constantes do Figma (node 797-1970) ──────────────────────────────────────

/** layout_JS8C82: width 344px (fixed) */
export const CALLOUT_WIDTH = 344;

/** layout_JS8C82: padding 20px */
export const CALLOUT_PADDING = sizing.x5; // 20px

/** Card borderRadius: 16px */
export const CALLOUT_RADIUS = radii.x4; // 16px

/** layout_JS8C82: gap 12px entre Leading, ContentWrapper e Trailing */
export const CALLOUT_GAP = sizing.x3; // 12px

/** layout_CDNFM3 / layout_VMGD82: gap 12px entre MainContent e LinkAction */
export const CONTENT_GAP = sizing.x3; // 12px

/** layout_UZC9ES: gap 4px entre title e description */
export const TEXT_GAP = sizing.x1; // 4px

// ─── Token map por variante ────────────────────────────────────────────────────

export type CalloutTokens = {
  /** Cor de fundo do card */
  bg: string;
  /** Cor da borda (Actionable=True) */
  borderColor: string;
  /** Cor do texto (title, description e link action) */
  textColor: string;
  /** Sombra Elevation/Enabled (Actionable=True) */
  shadowColor: string;
};

/**
 * Resolve os tokens visuais para a variante atual do callout.
 * Mapeado 1:1 com os componentes do Figma (node 797-1970).
 */
export function getCalloutTokens(
  theme: ColorTheme,
  variant: CalloutVariant
): CalloutTokens {
  switch (variant) {
    // ─── Standard ─────────────────────────────────────────────────────────────
    // fill_F1BM81=#F6F9FE bg, fill_975R5S=#191E2F text
    // Actionable border: fill_W9EDKT=rgba(0,51,198,0.12)
    case 'standard':
      return {
        bg: theme.surface.accent.primarySuperSubtle, // cobalt['50'] = #F6F9FE
        borderColor: theme.stroke.default, // rgba(0,51,198,0.12)
        textColor: theme.content.default, // #191E2F
        shadowColor: theme.elevation.default, // rgba(0,51,198,0.32)
      };

    // ─── Info ─────────────────────────────────────────────────────────────────
    // fill_1RW66H=#EDF5FD bg, fill_0VF46O=#1466B8 text
    // Actionable border: fill_LRH83U=#D1E6FA
    case 'info':
      return {
        bg: theme.surface.feedback.infoSubtle, // mariner['200'] = #EDF5FD
        borderColor: theme.stroke.feedback.infoSubtle, // mariner['400'] = #D1E6FA
        textColor: theme.content.feedback.info, // mariner['800'] = #1466B8
        shadowColor: theme.elevation.default,
      };

    // ─── Success ──────────────────────────────────────────────────────────────
    // fill_2W1T61=#F2F9F0 bg, fill_VE0O88=#1E730D text
    // Actionable border: fill_TSU0B1=#DEF1DA
    case 'success':
      return {
        bg: theme.surface.feedback.successSubtle, // forestGreen['200'] = #F2F9F0
        borderColor: theme.stroke.feedback.successSubtle, // forestGreen['400'] = #DEF1DA
        textColor: theme.content.feedback.success, // forestGreen['700'] = #1E730D
        shadowColor: theme.elevation.default,
      };

    // ─── Attention (Warning) ──────────────────────────────────────────────────
    // fill_AM6LF7=#FDF7ED bg, fill_SJQO1U=#8F5F10 text
    // Actionable border: fill_I110CA=#FAEBD1
    case 'attention':
      return {
        bg: theme.surface.feedback.warningSubtle, // bronze['200'] = #FDF7ED
        borderColor: theme.stroke.feedback.warningSubtle, // bronze['400'] = #FAEBD1
        textColor: theme.content.feedback.warning, // bronze['900'] = #8F5F10
        shadowColor: theme.elevation.default,
      };

    // ─── Critical ─────────────────────────────────────────────────────────────
    // fill_EPF6S8=#FDEDEF bg, fill_T4ZX94=#CE1732 text
    // Actionable border: fill_L8SOUH=#FAD1D7
    case 'critical':
      return {
        bg: theme.surface.feedback.criticalSubtle, // cardinal['200'] = #FDEDEF
        borderColor: theme.stroke.feedback.criticalSubtle, // cardinal['400'] = #FAD1D7
        textColor: theme.content.feedback.critical, // cardinal['800'] = #CE1732
        shadowColor: theme.elevation.default,
      };
  }
}

// ─── Shadow props (Elevation/Enabled) — apenas em Actionable=True ─────────────

export function getCalloutShadow(shadowColor: string) {
  return {
    shadowColor,
    shadowOffset: { width: shadow.axis.none, height: shadow.axis.quarter }, // 0, 1.5
    shadowOpacity: 1,
    shadowRadius: shadow.blur.none,
    elevation: 2, // Android
  };
}

// ─── Static base styles ────────────────────────────────────────────────────────

export const baseStyles = StyleSheet.create({
  /**
   * Card — layout_JS8C82 (Actionable=False) / layout_9WVVJO (Actionable=True):
   * row, gap 12px, padding 20px, width 344, borderRadius 16px.
   */
  card: {
    flexDirection: 'row',
    width: CALLOUT_WIDTH,
    borderRadius: CALLOUT_RADIUS,
    padding: CALLOUT_PADDING,
    gap: CALLOUT_GAP,
    alignSelf: 'flex-start',
  },
  /**
   * Content Wrapper — layout_CDNFM3 / layout_VMGD82: column, gap 12px, fill width.
   */
  contentWrapper: {
    flex: 1,
    gap: CONTENT_GAP,
  },
  /**
   * Main Content — layout_UZC9ES: column, gap 4px, fill.
   */
  mainContent: {
    gap: TEXT_GAP,
  },
  /**
   * Title — Label/Small: DM Sans 600, 14px, lh 16px.
   */
  title: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  /**
   * Description — Paragraph/Medium: DM Sans 400, 14px, lh 20px.
   */
  description: {
    fontFamily: typography.fontFamily,
    fontWeight: '400',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x5, // 20px
    includeFontPadding: false,
  },
  /**
   * Link Action container — layout_MSOSDR: row, gap 4px, height 16px (fixed).
   * Equivale ao LinkAction Standard (Size=Standard, OnColor=False).
   */
  linkAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x1, // 4px
    alignSelf: 'flex-start',
    height: sizing.x4, // 16px
  },
  /** Link text — Label/Small: DM Sans 600, 14px, lh 16px */
  linkText: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  /**
   * Arrow icon — LinkAction Standard: 16×16.
   * Implementado via border-trick (seta diagonal ↗ — Arrow Top Right).
   */
  arrowContainer: {
    width: sizing.x4, // 16px
    height: sizing.x4, // 16px
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Chevron diagonal — borda-trick */
  arrow: {
    width: sizing.x1 + 2, // 6px
    height: sizing.x1 + 2, // 6px
    borderTopWidth: border.quarter + 0.5, // 1.5px — stroke do Arrow Top Right
    borderRightWidth: border.quarter + 0.5,
    transform: [{ rotate: '45deg' }],
  },
  /**
   * Slot do ícone de fechar (Trailing) — layout_ZHLDLI: 24×24 hitbox,
   * ícone 20×20 (Closable=True).
   */
  closeButton: {
    width: sizing.x6, // 24px
    height: sizing.x6, // 24px
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** × close — implementado via dois retângulos rotacionados */
  closeIcon: {
    width: sizing.x3, // 12px
    height: sizing.x3, // 12px
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeLine1: {
    position: 'absolute',
    width: sizing.x3, // 12px
    height: border.quarter + 0.5, // 1.5px
    borderRadius: border.quarter, // 1px
    transform: [{ rotate: '45deg' }],
  },
  closeLine2: {
    position: 'absolute',
    width: sizing.x3, // 12px
    height: border.quarter + 0.5, // 1.5px
    borderRadius: border.quarter, // 1px
    transform: [{ rotate: '-45deg' }],
  },
});
