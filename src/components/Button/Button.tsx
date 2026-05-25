import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
} from 'react-native';
import {
  radii,
  sizing,
  typography,
  border,
  shadow,
  type ColorTheme,
} from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
// ─── Types ────────────────────────────────────────────────────────────────────
export type ButtonVariant =
  | 'primary'
  | 'onColor'
  | 'critical'
  | 'secondary'
  | 'ghost'
  | 'criticalGhost';
export type ButtonSize = 'default' | 'compact';
export type ButtonState = 'enabled' | 'disabled' | 'loading';
export interface ButtonProps extends Omit<
  PressableProps,
  'disabled' | 'style' | 'children'
> {
  /** Text label exibido no botão */
  label: string;
  /** Variante visual do botão (mapeia exatamente as variantes do Figma) */
  variant?: ButtonVariant;
  /** Tamanho do botão: default  ou compact  */
  size?: ButtonSize;
  /** Estado funcional do botão */
  state?: ButtonState;
  /** Ícone à esquerda do label */
  leadingIcon?: React.ReactNode;
  /** Ícone à direita do label */
  trailingIcon?: React.ReactNode;
}
// ─── Token map por variante ───────────────────────────────────────────────────
type VariantTokens = {
  background: string;
  label: string;
  borderColor?: string;
  borderWidth?: number;
  loaderColor: string;
};
function getVariantTokens(
  variant: ButtonVariant,
  theme: ColorTheme
): VariantTokens {
  const map: Record<ButtonVariant, VariantTokens> = {
    primary: {
      background: theme.surface.accent.primaryPersistent,
      label: theme.content.common.onColor,
      loaderColor: theme.content.common.onColor,
    },
    onColor: {
      background: theme.surface.common.onColor,
      label: theme.content.accent.primaryPersistent,
      loaderColor: theme.content.accent.primaryPersistent,
    },
    critical: {
      background: theme.surface.feedback.critical,
      label: theme.content.common.onColor,
      loaderColor: theme.content.common.onColor,
    },
    secondary: {
      background: theme.surface.accent.primarySubtleOnSubtle,
      label: theme.content.accent.primary,
      borderColor: theme.stroke.default,
      borderWidth: border.quarter,
      loaderColor: theme.content.accent.primary,
    },
    ghost: {
      background: theme.surface.common.ghost,
      label: theme.content.accent.primary,
      loaderColor: theme.content.accent.primary,
    },
    criticalGhost: {
      background: theme.surface.common.ghost,
      label: theme.content.feedback.critical,
      loaderColor: theme.content.feedback.critical,
    },
  };
  return map[variant];
}
// ─── Component ────────────────────────────────────────────────────────────────
export function Button({
  label,
  variant = 'primary',
  size = 'default',
  state = 'enabled',
  leadingIcon,
  trailingIcon,
  onPress,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();
  const [pressed, setPressed] = useState(false);
  const isDisabled = state === 'disabled';
  const isLoading = state === 'loading';
  const isInteractive = !isDisabled && !isLoading;
  const tokens: VariantTokens = isDisabled
    ? {
        background: theme.surface.common.disabled,
        label: theme.content.common.disabled,
        loaderColor: theme.content.common.disabled,
      }
    : getVariantTokens(variant, theme);
  const isCompact = size === 'compact';
  function handlePressIn() {
    setPressed(true);
  }
  function handlePressOut() {
    setPressed(false);
  }
  // Figma:
  //   Elevation/Enabled  = 0px  1.5px 0px 0px rgba(cobalt, 0.32)
  //   Elevation/Pressed  = 0px -1.5px 0px 0px rgba(cobalt, 0.32)  ← inset
  //   Elevation/Loading / Disabled = sem sombra
  const isGhost = variant === 'ghost' || variant === 'criticalGhost';
  const hasElevation = isInteractive && !isGhost;
  const shadowHeight = pressed ? -shadow.axis.quarter : shadow.axis.quarter;
  return (
    <View
      style={[
        styles.wrapper,
        // borderRadius dinâmico para o shadow seguir o shape no iOS
        { borderRadius: isCompact ? radii.x3 : radii.x4 },
        hasElevation && {
          // iOS — tokens mapeados 1:1: axis.none=0, axis.quarter=1.5, blur.none=0
          shadowColor: theme.elevation.default,
          shadowOffset: {
            width: shadow.axis.none, // 0px
            height: shadowHeight, // +1.5px enabled / -1.5px pressed
          },
          shadowOpacity: 1, // opacidade já embutida no token rgba
          shadowRadius: shadow.blur.none, // 0px (blur = 0 no Figma)
          // Android — drop apenas no estado enabled (não pressed)
          elevation: pressed ? 0 : 2,
        },
      ]}
    >
      <Pressable
        onPress={isInteractive ? onPress : undefined}
        onPressIn={isInteractive ? handlePressIn : undefined}
        onPressOut={isInteractive ? handlePressOut : undefined}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, busy: isLoading }}
        accessibilityLabel={label}
        {...rest}
        style={[
          styles.base,
          isCompact ? styles.compact : styles.sizeDefault,
          {
            backgroundColor: tokens.background,
            borderColor: tokens.borderColor ?? 'transparent',
            borderWidth: tokens.borderWidth ?? 0,
          },
        ]}
      >
        {/* Pressed overlay — Figma: surface.common.pressed rgba(255,255,255,0.32) */}
        {pressed && isInteractive && (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: theme.surface.common.pressed,
                // Figma: Size=Medium → radii.x4 (16px); Size=Small → radii.x3 (12px)
                borderRadius: isCompact ? radii.x3 : radii.x4,
              },
            ]}
            pointerEvents="none"
          />
        )}
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={tokens.loaderColor}
            style={styles.loader}
          />
        ) : (
          <View style={styles.content}>
            {leadingIcon != null && (
              <View style={isCompact ? styles.iconCompact : styles.icon}>
                {leadingIcon}
              </View>
            )}
            <Text
              style={[styles.label, { color: tokens.label }]}
              numberOfLines={1}
            >
              {label}
            </Text>
            {trailingIcon != null && (
              <View style={isCompact ? styles.iconCompact : styles.icon}>
                {trailingIcon}
              </View>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
}
// ─── Styles (valores mapeados 1:1 dos tokens Figma) ───────────────────────────
const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  // Size=Medium — Figma layout_892VMA: padding 12px 16px, height 48px, gap 8px, borderRadius 16px
  sizeDefault: {
    height: sizing.x12, // 48px
    paddingHorizontal: sizing.x4, // 16px
    paddingVertical: sizing.x3, // 12px
    borderRadius: radii.x4, // 16px
  },
  // Size=Small — Figma layout_75S6YN: padding 8px 12px, vertical hug, gap 8px, borderRadius 12px
  compact: {
    paddingHorizontal: sizing.x3, // 12px
    paddingVertical: sizing.x2, // 8px
    borderRadius: radii.x3, // 12px
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2, // 8px — Figma: gap 8px
  },
  // Label/Small — Figma: DM Sans SemiBold 14px / lineHeight 16px
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  // Leading/Trailing icon slots — Figma: 20x20 (default), 16x16 (compact)
  icon: {
    width: sizing.x5, // 20px
    height: sizing.x5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCompact: {
    width: sizing.x4, // 16px
    height: sizing.x4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginHorizontal: sizing.x2, // 8px
  },
});
