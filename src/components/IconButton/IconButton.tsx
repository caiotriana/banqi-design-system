import { useRef, useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import { shadow } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
  getVariantTokens,
  getSizeTokens,
  baseStyles,
} from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';
// ─── Variants sem fundo sólido (shadow não faz sentido) ────────────────────────
const GHOST_VARIANTS = new Set([
  'ghost',
  'ghost-oncolor',
  'ghost-critical',
] as const);
// ─── Component ─────────────────────────────────────────────────────────────────
/**
 * IconButton — botão de ação com ícone centrado.
 *
 * Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
 * (page node 797:1528 | component set node 46:3535). Consome tokens via
 * `useTheme()` e suporta 7 variantes, 4 estados (enabled, hover, pressed,
 * disabled) e 2 tamanhos (medium=44×44 r16, small=36×36 r12).
 *
 * @example
 * <IconButton
 *   variant="primary"
 *   size="medium"
 *   icon={<MyIcon />}
 *   accessibilityLabel="Confirmar pagamento"
 *   onPress={handlePress}
 * />
 */
export function IconButton({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onPress,
  icon,
  accessibilityLabel,
  testID,
}: IconButtonProps) {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const tokens = getVariantTokens(variant, theme, disabled);
  const { dimension, borderRadius } = getSizeTokens(size);
  // Ghost variants sem fundo sólido — shadow não agrega valor visual
  const hasElevation =
    !disabled &&
    !GHOST_VARIANTS.has(
      variant as 'ghost' | 'ghost-oncolor' | 'ghost-critical'
    );
  // Figma elevation por estado (offsets via shadow.axis):
  //   Enabled → 0px  1.5px  (shadow.axis.quarter)
  //   Hover   → 0px  3px    (shadow.axis.third)
  //   Pressed → 0px -1.5px  (-shadow.axis.quarter — negativo, shadow sobe)
  //   Disabled→ sem sombra
  function getShadowOffsetY(): number {
    if (isPressed) return -shadow.axis.quarter; // -1.5
    if (hovered) return shadow.axis.third; //  3
    return shadow.axis.quarter; //  1.5
  }
  function handlePressIn() {
    setIsPressed(true);
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();
  }
  function handlePressOut() {
    setIsPressed(false);
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 2,
    }).start();
  }
  return (
    <Animated.View
      style={[
        baseStyles.wrapper,
        {
          width: dimension,
          height: dimension,
          borderRadius,
          transform: [{ scale: scaleAnim }],
        },
        hasElevation && {
          // iOS — shadow mapeado 1:1 dos tokens Figma
          shadowColor: theme.elevation.default,
          shadowOffset: { width: shadow.axis.none, height: getShadowOffsetY() },
          shadowOpacity: 1, // opacidade já embutida no token rgba
          shadowRadius: shadow.blur.none, // blur=0 no Figma
          // Android
          elevation: isPressed ? 1 : hovered ? 4 : 2,
        },
      ]}
    >
      <Pressable
        onPress={disabled ? undefined : onPress}
        onPressIn={disabled ? undefined : handlePressIn}
        onPressOut={disabled ? undefined : handlePressOut}
        onHoverIn={disabled ? undefined : () => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        disabled={disabled}
        accessible
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ disabled }}
        testID={testID}
        style={[
          baseStyles.pressable,
          {
            width: dimension,
            height: dimension,
            borderRadius,
            backgroundColor: tokens.backgroundColor,
            borderColor: tokens.borderColor,
            borderWidth: tokens.borderWidth,
          },
        ]}
      >
        {({ pressed: rnPressed }) => (
          <>
            {/* Overlay de pressed — Figma rgba(255,255,255,0.32) = surface.common.pressed */}
            {rnPressed && !disabled && (
              <View
                style={[
                  baseStyles.overlay,
                  {
                    backgroundColor: theme.surface.common.pressed,
                    borderRadius,
                  },
                ]}
                pointerEvents="none"
              />
            )}
            {/* Overlay de hover (web/tablet) — Figma rgba(255,255,255,0.24) = surface.common.hover */}
            {hovered && !rnPressed && !disabled && (
              <View
                style={[
                  baseStyles.overlay,
                  {
                    backgroundColor: theme.surface.common.hover,
                    borderRadius,
                  },
                ]}
                pointerEvents="none"
              />
            )}
            <View style={baseStyles.iconContainer}>{icon}</View>
          </>
        )}
      </Pressable>
    </Animated.View>
  );
}
