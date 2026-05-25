import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

// ─── Constantes do Figma (node 797:2340) ──────────────────────────────────────

/** layout_XUYG0M: padding 4px + dot 16px + padding 4px = 24×24 */
export const BOX_SIZE = sizing.x6; // 24px

/** borderRadius: 999px — círculo perfeito */
export const BOX_RADIUS = radii.full;

/** layout_KZ5H77: 16×16 — dot interno (Selection ellipse) */
export const DOT_SIZE = sizing.x4; // 16px

// ─── Token map por estado ──────────────────────────────────────────────────────

export type RadioTokens = {
  /** Cor de fundo do círculo externo */
  boxBg: string;
  /** Cor da borda do círculo */
  boxBorderColor: string;
  /** Espessura da borda */
  boxBorderWidth: number;
  /**
   * Cor do dot interno.
   * `null` = não exibir dot (ex: unselected + enabled sem hover).
   */
  dotColor: string | null;
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
 * Resolve os tokens visuais para o estado atual do radio.
 * Mapeado 1:1 com os componentes do Figma (componentSet 46:3745).
 */
export function getRadioTokens(
  theme: ColorTheme,
  selected: boolean,
  disabled: boolean,
  hovered: boolean,
  pressed: boolean
): RadioTokens {
  // ─── Disabled ───────────────────────────────────────────────────────────────
  // Figma (46:3770 / 46:3765): stroke fill_HK0W4R=#D9D9D9 (stroke.common.disabled),
  //   sem fills (transparente), e Selected=True NÃO renderiza dot (sem child Selection).
  if (disabled) {
    return {
      boxBg: theme.surface.default, // sem fills no Figma — neutro
      boxBorderColor: theme.stroke.common.disabled, // fill_HK0W4R = #D9D9D9
      boxBorderWidth: border.quarter, // 1px
      dotColor: null, // Figma não exibe dot quando disabled
      overlayColor: null,
      labelColor: theme.content.common.disabled, // fill_XMD1HE = #9E9E9E
      hasShadow: false, // Elevation/Disabled = 0,0,0,0
    };
  }

  // ─── Pressed ────────────────────────────────────────────────────────────────
  // Figma (559:3253 / 559:3258): borda preservada — Selected=False → fill_Y1WC1E (stroke.default),
  //   Selected=True → fill_K9K26N (stroke.accent.primary). Overlay fill_KGTMT0 = rgba(255,255,255,0.32).
  if (pressed) {
    return {
      boxBg: selected
        ? theme.surface.accent.primarySubtle // fill_7412SI = #EDF2FD (cobalt['200'])
        : theme.surface.default, // fill_EVHBW4 = #FFFFFF
      boxBorderColor: selected
        ? theme.stroke.accent.primary // fill_K9K26N = #0033C6 (selected pressed)
        : theme.stroke.default, // fill_Y1WC1E = rgba(0,51,198,0.12)
      boxBorderWidth: border.quarter, // 1px
      // Preview do dot no estado pressed (mesmo unselected)
      dotColor: theme.content.accent.primary, // fill_K9K26N = #0033C6
      overlayColor: theme.surface.common.pressed, // fill_KGTMT0 = rgba(255,255,255,0.32)
      labelColor: theme.content.default,
      hasShadow: true, // Elevation/Pressed: 0px -1.5px
    };
  }

  // ─── Hover ──────────────────────────────────────────────────────────────────
  // Figma (46:3750 / 46:3760): Selected=False → stroke fill_Y1WC1E (stroke.default),
  //   Selected=True → stroke fill_K9K26N (stroke.accent.primary). Overlay fill_SNZBGJ = rgba(255,255,255,0.24).
  if (hovered) {
    return {
      boxBg: selected
        ? theme.surface.accent.primarySubtle // #EDF2FD (cobalt['200'])
        : theme.surface.default, // #FFFFFF
      boxBorderColor: selected
        ? theme.stroke.accent.primary // fill_K9K26N = #0033C6 (selected hover)
        : theme.stroke.default, // fill_Y1WC1E = rgba(0,51,198,0.12)
      boxBorderWidth: border.quarter, // 1px
      // Preview do dot no hover unselected
      dotColor: theme.content.accent.primary, // fill_K9K26N = #0033C6
      overlayColor: theme.surface.common.hover, // fill_SNZBGJ = rgba(255,255,255,0.24)
      labelColor: theme.content.default,
      hasShadow: true, // Elevation/Hover: 0px 3px
    };
  }

  // ─── Enabled (padrão) ───────────────────────────────────────────────────────
  // Figma (46:3746 / 46:3755):
  //   Unselected: fill_EVHBW4=#FFF bg, stroke fill_Y1WC1E=rgba(0,51,198,0.12)
  //   Selected:   fill_7412SI=#EDF2FD bg, stroke fill_K9K26N=#0033C6 (selected accent)
  return {
    boxBg: selected
      ? theme.surface.accent.primarySubtle // fill_7412SI = #EDF2FD (cobalt['200'])
      : theme.surface.default, // fill_EVHBW4 = #FFFFFF
    boxBorderColor: selected
      ? theme.stroke.accent.primary // fill_K9K26N = #0033C6 (selected)
      : theme.stroke.default, // fill_Y1WC1E = rgba(0,51,198,0.12)
    boxBorderWidth: border.quarter, // strokeWeight: 1px
    dotColor: selected
      ? theme.content.accent.primaryPersistent
      : null,
    overlayColor: null,
    labelColor: theme.content.default, // fill_LZFWU3 = #191E2F
    hasShadow: true, // Elevation/Enabled: 0px 1.5px
  };
}

// ─── Static base styles ────────────────────────────────────────────────────────

export const baseStyles = StyleSheet.create({
  /** Row externo — touch area abrange radio + label */
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2, // layout_5514TE: 8px
    alignSelf: 'flex-start',
  },
  /** Animated.View wrapper para shadow (separado do overflow:hidden) */
  shadowWrapper: {
    alignSelf: 'flex-start',
    borderRadius: BOX_RADIUS,
  },
  /** View interna do círculo — overflow:hidden para clipar o overlay */
  box: {
    width: BOX_SIZE, // 24px
    height: BOX_SIZE, // 24px
    borderRadius: BOX_RADIUS, // 999px
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Dot interno — 16×16 círculo cheio (layout_KZ5H77, ELLIPSE) */
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: radii.full, // 999px — círculo
    zIndex: 1,
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
