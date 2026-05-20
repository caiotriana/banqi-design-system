import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

// ─── Constantes do Figma (node 797:2684) ──────────────────────────────────────

/** layout_48TQS5 / layout_PIRJTE: largura fixa 40px */
export const TRACK_WIDTH = 40; // TODO: token — não há sizing token para 40px

/** padding 4px + knob 16px + padding 4px = 24px */
export const TRACK_HEIGHT = sizing.x6; // 24px

/** borderRadius: 8px */
export const TRACK_RADIUS = radii.x2; // 8px

/** layout_6OLUSU: 16×16 */
export const KNOB_SIZE = sizing.x4; // 16px

/** borderRadius: 4px — knob é rounded rect, não círculo */
export const KNOB_RADIUS = radii.x1; // 4px

/** Padding interno do track */
export const TRACK_PADDING = sizing.x1; // 4px

/** Posição left do knob no estado OFF */
export const KNOB_POS_OFF = TRACK_PADDING; // 4

/** Posição left do knob no estado ON */
export const KNOB_POS_ON = TRACK_WIDTH - TRACK_PADDING - KNOB_SIZE; // 20

/** Distância de translação do knob: ON - OFF */
export const KNOB_TRAVEL = KNOB_POS_ON - KNOB_POS_OFF; // 16

// ─── Token map por estado ──────────────────────────────────────────────────────

export type ToggleTokens = {
  /** Cor de fundo do track */
  trackBg: string;
  /** Cor da borda do track */
  trackBorderColor: string;
  /** Espessura da borda do track */
  trackBorderWidth: number;
  /** Cor do knob */
  knobColor: string;
  /**
   * Cor do overlay de estado (hover/pressed).
   * `null` = sem overlay.
   */
  overlayColor: string | null;
  /** Cor do texto do label */
  labelColor: string;
  /** Se deve exibir shadow/elevation */
  hasShadow: boolean;
};

/**
 * Resolve os tokens visuais para o estado atual do toggle.
 * Mapeado 1:1 com os componentes do Figma (node 797:2684).
 */
export function getToggleTokens(
  theme: ColorTheme,
  enabled: boolean,
  disabled: boolean,
  hovered: boolean,
  pressed: boolean
): ToggleTokens {
  // ─── Disabled ───────────────────────────────────────────────────────────────
  // Figma: Enabled=False (46:3783) → border fill_D62JC1=#D9D9D9, sem fill, sem knob
  //        Enabled=True  (46:3799) → fill_KM3P44=#F0F0F0, sem border, sem knob
  if (disabled) {
    return {
      trackBg: enabled
        ? theme.surface.common.disabled // fill_KM3P44 = #F0F0F0
        : theme.surface.default, // #FFFFFF (figma sem fill, render em superfície branca)
      trackBorderColor: enabled ? 'transparent' : theme.stroke.common.disabled, // fill_D62JC1 = #D9D9D9
      trackBorderWidth: enabled ? border.none : border.quarter,
      knobColor: theme.content.common.disabled, // #9E9E9E
      overlayColor: null,
      labelColor: theme.content.common.disabled, // fill_HUQCTF = #9E9E9E
      hasShadow: false, // Elevation/Disabled = 0,0,0,0
    };
  }

  // ─── Pressed ────────────────────────────────────────────────────────────────
  // Figma: fill_JIQM8T = rgba(255,255,255,0.32) overlay
  //        OFF (559:3304) → fill #FFFFFF, border fill_FUX60S=#0033C6, knob fill_FUX60S=#0033C6
  //        ON  (559:3309) → fill_FUX60S=#0033C6 track, sem border, knob fill_HSRWFI=#FFFFFF
  if (pressed) {
    return {
      trackBg: enabled
        ? theme.surface.accent.primary // fill_FUX60S = #0033C6
        : theme.surface.default, // fill_HSRWFI = #FFFFFF
      trackBorderColor: enabled ? 'transparent' : theme.stroke.accent.primary, // fill_FUX60S = #0033C6 (border muda no pressed)
      trackBorderWidth: enabled ? border.none : border.quarter,
      knobColor: enabled
        ? theme.content.common.onColor // fill_HSRWFI = #FFFFFF
        : theme.content.accent.primary, // fill_FUX60S = #0033C6
      overlayColor: theme.surface.common.pressed, // fill_JIQM8T = rgba(255,255,255,0.32)
      labelColor: theme.content.default,
      hasShadow: true, // Elevation/Pressed: 0px -1.5px
    };
  }

  // ─── Hover ──────────────────────────────────────────────────────────────────
  // Figma: fill_22H0M3 = rgba(255,255,255,0.24) overlay
  //        OFF (46:3779) → fill #FFFFFF, border muda para fill_FUX60S=#0033C6, knob azul
  //        ON  (46:3793) → fill_FUX60S=#0033C6 track, sem border, knob branco
  if (hovered) {
    return {
      trackBg: enabled ? theme.surface.accent.primary : theme.surface.default,
      trackBorderColor: enabled ? 'transparent' : theme.stroke.accent.primary, // fill_FUX60S = #0033C6 (border muda no hover OFF)
      trackBorderWidth: enabled ? border.none : border.quarter,
      knobColor: enabled
        ? theme.content.common.onColor
        : theme.content.accent.primary,
      overlayColor: theme.surface.common.hover, // fill_22H0M3 = rgba(255,255,255,0.24)
      labelColor: theme.content.default,
      hasShadow: true, // Elevation/Hover: 0px 3px
    };
  }

  // ─── Enabled (padrão) ───────────────────────────────────────────────────────
  // Figma:
  //   OFF (46:3775): fill_HSRWFI=#FFFFFF track, stroke fill_5WD067=rgba(0,51,198,0.12), knob azul
  //   ON  (46:3788): fill_FUX60S=#0033C6 track, sem border, knob branco
  return {
    trackBg: enabled
      ? theme.surface.accent.primary // fill_FUX60S = #0033C6
      : theme.surface.default, // fill_HSRWFI = #FFFFFF
    trackBorderColor: enabled ? 'transparent' : theme.stroke.default, // fill_5WD067 = rgba(0,51,198,0.12)
    trackBorderWidth: enabled ? border.none : border.quarter,
    knobColor: enabled
      ? theme.content.common.onColor // fill_HSRWFI = #FFFFFF
      : theme.content.accent.primary, // fill_FUX60S = #0033C6
    overlayColor: null,
    labelColor: theme.content.default,
    hasShadow: true, // Elevation/Enabled: 0px 1.5px
  };
}

// ─── Static base styles ────────────────────────────────────────────────────────

export const baseStyles = StyleSheet.create({
  /** Row externo — touch area abrange toggle + label */
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2, // layout gap: 8px
    alignSelf: 'flex-start',
  },
  /** Animated.View wrapper para shadow (separado do overflow:hidden) */
  shadowWrapper: {
    alignSelf: 'flex-start',
    borderRadius: TRACK_RADIUS,
  },
  /** Track — overflow:hidden para clipar o overlay */
  track: {
    width: TRACK_WIDTH,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_RADIUS,
    overflow: 'hidden',
  },
  /** Knob — posicionado absolutamente, animado via translateX */
  knob: {
    position: 'absolute',
    left: KNOB_POS_OFF,
    top: TRACK_PADDING,
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: KNOB_RADIUS,
  },
  /** Overlay absoluto para estados hover/pressed */
  overlay: {
    ...StyleSheet.absoluteFill,
  },
  /** Label — Paragraph/Medium do Figma: DM Sans 400 14px lh:20px */
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '400',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x5, // 20px
    includeFontPadding: false,
  },
});
