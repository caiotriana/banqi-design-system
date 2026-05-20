import { StyleSheet } from 'react-native';
import { radii, sizing, typography, type ColorTheme } from 'banqi-tokens/rn';
import type { AvatarSize, AvatarState, AvatarVariant } from './Avatar.types';

// ─── Tokens por tamanho (node 795-672) ────────────────────────────────────────

export type AvatarSizeTokens = {
  /** Dimensão do avatar (width = height) */
  dimension: number;
  /** borderRadius */
  borderRadius: number;
  /**
   * Tamanho do ícone interno.
   * Small/Standard → 20px | Large → 24px
   */
  iconSize: number;
  /** fontSize das iniciais */
  fontSize: number;
  /** lineHeight das iniciais */
  lineHeight: number;
};

/**
 * Retorna os tokens de tamanho mapeados do Figma.
 * Small (layout_VXT0R9/HTG0RM/HV1VSO): 36×36, r=12
 * Standard (layout_SNZLKE/VKZQME/8W68JV): 48×48, r=16
 * Large (layout_P72HZQ/4CWFDL/5VJ65L): 60×60, r=24
 */
export function getSizeTokens(size: AvatarSize): AvatarSizeTokens {
  switch (size) {
    case 'small':
      return {
        dimension: 36,
        borderRadius: radii.x3, // 12px
        iconSize: sizing.x5, // 20px
        fontSize: typography.fontSize.x3, // 12px — Label/XSmall
        lineHeight: typography.lineHeight.x3_5, // 14px
      };
    case 'standard':
      return {
        dimension: 48,
        borderRadius: radii.x4, // 16px
        iconSize: sizing.x5, // 20px
        fontSize: typography.fontSize.x3_5, // 14px — Label/Small
        lineHeight: typography.lineHeight.x4, // 16px
      };
    case 'large':
      return {
        dimension: 60,
        borderRadius: radii.x6, // 24px
        iconSize: sizing.x6, // 24px
        fontSize: typography.fontSize.x5, // 20px — Label/Large
        lineHeight: typography.lineHeight.x5, // 20px
      };
  }
}

// ─── Tokens visuais por variante × estado ─────────────────────────────────────

export type AvatarVisualTokens = {
  /** Cor de fundo do container */
  bg: string;
  /** Cor do texto (iniciais) e do ícone */
  contentColor: string;
};

/**
 * Retorna as cores para a combinação variant × state.
 *
 * Figma fill map (light):
 * - fill_2NDT2F = #F0F2F7 = charcoal['100'] = surface.subtle → bg enabled icon/initials
 * - fill_TO08YF = #191E2F = blackAlpha['1000'] = content.default → text/icon enabled
 * - fill_0MTY33 = #F0F0F0 = grey['50'] = surface.common.disabled → bg disabled
 * - fill_VY9505 = #9E9E9E = grey['400'] = content.common.disabled → text/icon disabled
 * - fill_I90LG8 = rgba(0,51,198,0) = transparent → Logo bg
 * - fill_5USWFD = IMAGE → Image bg (photo)
 */
export function getVisualTokens(
  theme: ColorTheme,
  variant: AvatarVariant,
  state: AvatarState
): AvatarVisualTokens {
  // Logo e Image não têm estados disabled/skeleton no Figma
  if (variant === 'logo') {
    return {
      bg: 'transparent',
      contentColor: theme.content.accent.primary,
    };
  }

  if (variant === 'image') {
    return {
      bg: theme.surface.subtle, // fallback enquanto a imagem carrega
      contentColor: theme.content.common.onColor,
    };
  }

  // Icon / Initials
  if (state === 'disabled') {
    return {
      bg: theme.surface.common.disabled, // fill_0MTY33 = #F0F0F0
      contentColor: theme.content.common.disabled, // fill_VY9505 = #9E9E9E
    };
  }

  // Enabled + Skeleton usam o mesmo bg (skeleton adiciona animação)
  return {
    bg: theme.surface.subtle, // fill_2NDT2F = #F0F2F7 (light) / #1C2840 (dark)
    contentColor: theme.content.default, // fill_TO08YF = #191E2F
  };
}

// ─── Static base styles ───────────────────────────────────────────────────────

export const baseStyles = StyleSheet.create({
  /** Container base — dimensões e borderRadius aplicados inline via getSizeTokens */
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  /** Overlay de skeleton — cobre todo o container */
  skeletonOverlay: {
    ...StyleSheet.absoluteFill,
  },
  /** Imagem — cobre todo o container (Image variant) */
  image: {
    width: '100%',
    height: '100%',
  },
  /** Logo — cobre todo o container (Logo variant) */
  logo: {
    width: '100%',
    height: '100%',
  },
  /** Texto das iniciais — centralizado */
  initials: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    textAlign: 'center',
    includeFontPadding: false,
  },
});
