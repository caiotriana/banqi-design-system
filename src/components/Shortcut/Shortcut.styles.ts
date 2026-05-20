import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

// ─── Constantes do Figma (node 797:2489) ──────────────────────────────────────

/** layout_35KCSA: padding 20px */
export const CARD_PADDING = sizing.x5; // 20px

/** layout_35KCSA: gap 16px entre Top e Bottom */
export const CARD_GAP = sizing.x4; // 16px

/** borderRadius: 24px */
export const CARD_RADIUS = radii.x6; // 24px

/** layout_OFCQAP / layout_R789PN: width 112px (card 152 - padding 20*2) */
export const INNER_WIDTH = sizing.x28; // 112px

/** layout_OFCQAP: gap 8px entre leading e trailing */
export const TOP_GAP = sizing.x2; // 8px

/** layout_R789PN: gap 4px entre title e description */
export const BOTTOM_GAP = sizing.x1; // 4px

// ─── Token map por estado ──────────────────────────────────────────────────────

export type ShortcutTokens = {
  /** Cor de fundo do card */
  cardBg: string;
  /** Cor da borda do card */
  cardBorderColor: string;
  /** Espessura da borda */
  cardBorderWidth: number;
  /** Cor do overlay de estado (hover/pressed) — `null` = sem overlay */
  overlayColor: string | null;
  /** Cor do título */
  titleColor: string;
  /** Cor da descrição */
  descriptionColor: string;
};

/**
 * Resolve os tokens visuais para o estado atual do shortcut.
 * Mapeado 1:1 com os componentes do Figma (node 797:2489).
 */
export function getShortcutTokens(
  theme: ColorTheme,
  hovered: boolean,
  pressed: boolean
): ShortcutTokens {
  // ─── Pressed ──────────────────────────────────────────────────────────────
  // Figma (559:3174): sem borda (strokes ausentes), fill_L4QUOS=rgba(255,255,255,0.32) overlay
  if (pressed) {
    return {
      cardBg: theme.surface.accent.primarySuperSubtle, // fill_IPELKH = #F6F9FE
      cardBorderColor: 'transparent',
      cardBorderWidth: border.none,
      overlayColor: theme.surface.common.pressed, // fill_L4QUOS = rgba(255,255,255,0.32)
      titleColor: theme.content.default, // fill_O4ZSEU = #191E2F
      descriptionColor: theme.content.subtle, // fill_KWLAKY = rgba(25,30,47,0.64)
    };
  }

  // ─── Hover ────────────────────────────────────────────────────────────────
  // Figma (559:3163): borda mantida fill_DT7VN2=rgba(0,51,198,0.12), fill_LR490L=rgba(255,255,255,0.24) overlay
  if (hovered) {
    return {
      cardBg: theme.surface.accent.primarySuperSubtle,
      cardBorderColor: theme.stroke.default, // fill_DT7VN2 = rgba(0,51,198,0.12) — sem mudança
      cardBorderWidth: border.quarter, // 1px
      overlayColor: theme.surface.common.hover, // fill_LR490L = rgba(255,255,255,0.24)
      titleColor: theme.content.default,
      descriptionColor: theme.content.subtle,
    };
  }

  // ─── Enabled (padrão) ─────────────────────────────────────────────────────
  // Figma (51:9872): fill_IPELKH=#F6F9FE bg, stroke fill_DT7VN2=rgba(0,51,198,0.12), 1px
  return {
    cardBg: theme.surface.accent.primarySuperSubtle, // cobalt['50'] = #F6F9FE
    cardBorderColor: theme.stroke.default, // fill_DT7VN2 = rgba(0,51,198,0.12)
    cardBorderWidth: border.quarter, // strokeWeight: 1px
    overlayColor: null,
    titleColor: theme.content.default, // fill_O4ZSEU = #191E2F
    descriptionColor: theme.content.subtle, // fill_KWLAKY = rgba(25,30,47,0.64)
  };
}

// ─── Static base styles ────────────────────────────────────────────────────────

export const baseStyles = StyleSheet.create({
  /** Animated.View wrapper para shadow (separado do overflow:hidden) */
  shadowWrapper: {
    alignSelf: 'flex-start',
    borderRadius: CARD_RADIUS,
  },
  /**
   * Card — layout_35KCSA: column, gap 16px, padding 20px, borderRadius 24px.
   * overflow:hidden para clipar o overlay de estado.
   */
  card: {
    width: INNER_WIDTH + CARD_PADDING * 2, // 152px
    borderRadius: CARD_RADIUS,
    padding: CARD_PADDING,
    gap: CARD_GAP,
    overflow: 'hidden',
  },
  /**
   * Top — layout_OFCQAP: row, gap 8px, width 112px.
   * Contém o slot leading e o slot trailing.
   */
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: TOP_GAP,
    width: INNER_WIDTH,
  },
  /**
   * Trailing container — layout_NSYN2T: flex-end, fill width.
   * Empurra o conteúdo para a direita.
   */
  trailing: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  /**
   * Bottom — layout_R789PN: column, gap 4px, width 112px.
   * Contém título e descrição.
   */
  bottom: {
    gap: BOTTOM_GAP,
    width: INNER_WIDTH,
  },
  /**
   * Título — Label/Small: DM Sans 600, 14px, lh 16px.
   * fill_O4ZSEU = #191E2F = content.default
   */
  title: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  /**
   * Descrição — Caption/Medium: DM Sans 400, 14px, lh 16px.
   * fill_KWLAKY = rgba(25,30,47,0.64) = content.subtle
   */
  description: {
    fontFamily: typography.fontFamily,
    fontWeight: '400',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  /** Overlay absoluto de estado — cobre o card inteiro (layout_7NP1ZK: 152×136) */
  overlay: {
    ...StyleSheet.absoluteFill,
    borderRadius: CARD_RADIUS,
  },
});
