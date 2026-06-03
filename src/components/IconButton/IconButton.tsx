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
const GHOST_VARIANTS = new Set([
  'ghost',
  'ghost-oncolor',
  'ghost-critical',
] as const);
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
  const hasElevation =
    !disabled &&
    !GHOST_VARIANTS.has(
      variant as 'ghost' | 'ghost-oncolor' | 'ghost-critical'
    );
  function getShadowOffsetY(): number {
    if (isPressed) return -shadow.axis.quarter;
    if (hovered) return shadow.axis.third;
    return shadow.axis.quarter;
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
          shadowColor: theme.elevation.default,
          shadowOffset: { width: shadow.axis.none, height: getShadowOffsetY() },
          shadowOpacity: 1,
          shadowRadius: shadow.blur.none,
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
