import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
} from 'react-native';
import { sizing, typography, type ColorTheme } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
// ─── Types ────────────────────────────────────────────────────────────────────
export type LinkActionSize = 'standard' | 'large';
export interface LinkActionProps extends Omit<
  PressableProps,
  'disabled' | 'style' | 'children'
> {
  /** Texto do link */
  label: string;
  /** Tamanho: standard (14px / 16×16px icon) ou large (16px / 20×20px icon) */
  size?: LinkActionSize;
  /**
   * Exibido sobre fundo colorido/escuro — usa tokens onColor (branco).
   * Mapeia a prop OnColor=True do Figma.
   */
  onColor?: boolean;
  /** Desativa interação e aplica estilo disabled */
  disabled?: boolean;
  /** Ícone trailing (ReactNode). Padrão: seta ↗ para indicar link externo */
  icon?: React.ReactNode;
}
// ─── Token helpers ────────────────────────────────────────────────────────────
function getTextColor(
  theme: ColorTheme,
  onColor: boolean,
  disabled: boolean
): string {
  if (disabled) {
    return onColor
      ? theme.content.common.onColorDisabled
      : theme.content.common.disabled;
  }
  return onColor ? theme.content.common.onColor : theme.content.accent.primary;
}
// ─── Default icon ─────────────────────────────────────────────────────────────
// Figma: outline/navigation/external-link (icon component 827:4890)
// Sem biblioteca SVG no projeto — representado como texto Unicode ↗
function ArrowTopRight({ color, size }: { color: string; size: number }) {
  return (
    <Text
      style={{
        color,
        fontSize: size * 0.75,
        lineHeight: size,
        includeFontPadding: false,
      }}
      accessibilityElementsHidden
      importantForAccessibility="no"
    >
      {'↗'}
    </Text>
  );
}
// ─── Component ────────────────────────────────────────────────────────────────
/**
 * LinkAction — link textual com ícone trailing.
 *
 * Mapeia 1:1 o componente do Figma **Casas Bahia Pay — Design System**
 * (page node 797:1867 | component set node 46:3830). Variantes:
 * Size (Standard/Large), State (Enabled/Hover/Pressed/Disabled), OnColor (true/false).
 *
 * Estados Hover e Pressed exibem sublinhado (stroke 2px no Figma).
 */
export function LinkAction({
  label,
  size = 'standard',
  onColor = false,
  disabled = false,
  icon,
  onPress,
  onHoverIn,
  onHoverOut,
  accessibilityLabel,
  ...rest
}: LinkActionProps) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const isLarge = size === 'large';
  // Figma: Standard icon = 16×16, Large icon = 20×20
  const iconSize = isLarge ? sizing.x5 : sizing.x4;
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onHoverIn={(e) => {
        if (!disabled) setHovered(true);
        onHoverIn?.(e);
      }}
      onHoverOut={(e) => {
        setHovered(false);
        onHoverOut?.(e);
      }}
      disabled={disabled}
      accessible
      accessibilityRole="link"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled }}
      {...rest}
      style={styles.container}
    >
      {({ pressed }) => {
        const textColor = getTextColor(theme, onColor, disabled);
        // Figma: Stroke (sublinhado, strokeWeight 2px) presente em Hover e Pressed
        const showUnderline = (pressed || hovered) && !disabled;
        return (
          <>
            {/* Label com underline condicional no press */}
            <View>
              <Text
                style={[
                  isLarge ? styles.labelLarge : styles.labelStandard,
                  { color: textColor },
                  showUnderline && styles.underline,
                ]}
                numberOfLines={1}
              >
                {label}
              </Text>
            </View>
            {/* Ícone trailing — Figma: Arrow Top Right, sempre visível */}
            <View
              style={[styles.iconSlot, { width: iconSize, height: iconSize }]}
            >
              {icon ?? <ArrowTopRight color={textColor} size={iconSize} />}
            </View>
          </>
        );
      }}
    </Pressable>
  );
}
// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  // Figma: row, alignItems center, gap 4px
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x1, // 4px
    alignSelf: 'flex-start',
  },
  // Label/Small — Figma: DM Sans SemiBold 14px / lineHeight 16px
  labelStandard: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  // Label/Medium — Figma: DM Sans SemiBold 16px / lineHeight 16px
  labelLarge: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x4, // 16px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  // Figma: Stroke (sublinhado) strokeWeight 2px — visível no estado Hover/Pressed
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
