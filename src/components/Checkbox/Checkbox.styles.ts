import { StyleSheet } from 'react-native';
import {
  radii,
  sizing,
  border,
  typography,
  type ColorTheme,
} from 'banqi-tokens/rn';

// ─── Constantes do Figma (node 795:820 / componentSet 46:3804) ────────────────

/** layout_GDN4M0: padding 4px + icon 16px + padding 4px = 24×24 */
export const BOX_SIZE = sizing.x6; // 24px

/** borderRadius: 8px — radii.x2 */
export const BOX_RADIUS = radii.x2;

/** layout_TY38K6: 16×16 — ícone Check-negative (42:6073) */
export const ICON_SIZE = sizing.x4; // 16px

// ─── Token map por estado ──────────────────────────────────────────────────────

export type CheckboxBoxTokens = {
  /** Cor de fundo do quadrado do checkbox */
  boxBg: string;
  /** Cor da borda do quadrado */
  boxBorderColor: string;
  /** Espessura da borda */
  boxBorderWidth: number;
  /**
   * Cor do ícone de checkmark.
   * `null` = não exibir checkmark (ex: unchecked + enabled sem hover).
   * Hover/pressed unchecked exibe preview com cor primária.
   */
  checkmarkColor: string | null;
  /**
   * Cor do overlay de estado (hover/pressed), aplicado absolutamente.
   * `null` = sem overlay.
   */
  overlayColor: string | null;
  /** Cor do texto do label */
  labelColor: string;
  /** Se deve exibir shadow/elevation */
  hasShadow: boolean;
};

/**
 * Resolve os tokens visuais para o estado atual do checkbox.
 * Mapeado 1:1 com os componentes do Figma (componentSet 46:3804).
 */
export function getCheckboxTokens(
  theme: ColorTheme,
  checked: boolean,
  disabled: boolean,
  hovered: boolean,
  pressed: boolean
): CheckboxBoxTokens {
  // ─── Disabled ───────────────────────────────────────────────────────────────
  // Figma (46:3813 / 46:3826):
  //   Selected=False → 559:3156 strokes fill_10PJKX=#D9D9D9 (stroke.common.disabled), sem fills
  //   Selected=True  → 559:3159 fills+strokes fill_XET91I=#F0F0F0 (surface.common.disabled),
  //                    SEM checkmark icon (no children)
  if (disabled) {
    return {
      boxBg: checked
        ? theme.surface.common.disabled // fill_XET91I = #F0F0F0
        : theme.surface.default, // sem fills no Figma — neutro
      boxBorderColor: checked
        ? theme.surface.common.disabled // fill_XET91I = #F0F0F0 — borda = fundo
        : theme.stroke.common.disabled, // fill_10PJKX = #D9D9D9
      boxBorderWidth: border.quarter, // 1px
      checkmarkColor: null, // Figma não renderiza checkmark em disabled
      overlayColor: null,
      labelColor: theme.content.common.disabled, // fill_UI03HF = #9E9E9E
      hasShadow: false, // Elevation/Disabled = 0,0,0,0
    };
  }

  // ─── Pressed ────────────────────────────────────────────────────────────────
  // Figma (559:2796 / 559:2800): sem strokes (border ausente),
  //   Selected=False fill_Q3BMZ8=#FFF / Selected=True fill_RMPZJ9=#0033C6.
  //   Overlay fill_7KRLLS = rgba(255,255,255,0.32).
  if (pressed) {
    return {
      boxBg: checked
        ? theme.surface.accent.primary // fill_RMPZJ9 = #0033C6
        : theme.surface.default, // fill_Q3BMZ8 = #FFFFFF
      boxBorderColor: 'transparent',
      boxBorderWidth: border.none,
      // Preview do check no estado pressed (mesmo unchecked)
      checkmarkColor: checked
        ? theme.content.common.onColor // #FFFFFF
        : theme.content.accent.primary, // #0033C6 (preview faint via overlay)
      overlayColor: theme.surface.common.pressed, // fill_7KRLLS = rgba(255,255,255,0.32)
      labelColor: theme.content.default,
      hasShadow: true, // Elevation/Pressed: 0px -1.5px
    };
  }

  // ─── Hover ──────────────────────────────────────────────────────────────────
  // Figma (46:3809 / 46:3821): borda muda para fill_RMPZJ9 = #0033C6 (stroke.accent.primary),
  //   overlay fill_P22HH7 = rgba(255,255,255,0.24).
  if (hovered) {
    return {
      boxBg: checked
        ? theme.surface.accent.primary // fill_RMPZJ9 = #0033C6
        : theme.surface.default, // fill_Q3BMZ8 = #FFFFFF
      boxBorderColor: theme.stroke.accent.primary, // fill_RMPZJ9 = #0033C6 (borda muda no hover)
      boxBorderWidth: border.quarter, // 1px
      // Preview do check no hover unchecked (ícone 42:6073 = ' Check-negative')
      checkmarkColor: checked
        ? theme.content.common.onColor
        : theme.content.accent.primary, // preview faint via overlay branco
      overlayColor: theme.surface.common.hover, // fill_P22HH7 = rgba(255,255,255,0.24)
      labelColor: theme.content.default,
      hasShadow: true, // Elevation/Hover: 0px 3px
    };
  }

  // ─── Enabled (padrão) ───────────────────────────────────────────────────────
  // Figma (46:3805 / 46:3817):
  //   Unselected: fill_Q3BMZ8=#FFF bg, stroke fill_A47LNJ=rgba(0,51,198,0.12) (stroke.default)
  //   Selected:   fill_RMPZJ9=#0033C6 bg+stroke (surface/stroke.accent.primary)
  return {
    boxBg: checked ? theme.surface.accent.primary : theme.surface.default,
    boxBorderColor: checked
      ? 'transparent'
      : theme.stroke.default, // fill_A47LNJ = rgba(0,51,198,0.12)
    boxBorderWidth: checked ? border.none : border.quarter,
    checkmarkColor: checked
      ? theme.content.common.onColor // #FFFFFF
      : null,
    overlayColor: null,
    labelColor: theme.content.default, // fill_WSAW04 = #191E2F
    hasShadow: true, // Elevation/Enabled: 0px 1.5px
  };
}

// ─── Static base styles ────────────────────────────────────────────────────────

export const baseStyles = StyleSheet.create({
  /** Row externo — touch area abrange checkbox + label */
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2, // layout_NGS2UB / layout_Y0DPBQ: 8px
    alignSelf: 'flex-start',
  },
  /** Animated.View wrapper para shadow (separado do overflow:hidden) */
  shadowWrapper: {
    alignSelf: 'flex-start',
    borderRadius: BOX_RADIUS,
  },
  /** View interna do quadrado — overflow:hidden para clipar o overlay */
  box: {
    width: BOX_SIZE, // 24px
    height: BOX_SIZE, // 24px
    borderRadius: BOX_RADIUS, // 8px
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Container do ícone interno — 16×16 (layout_K88U30) */
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
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
