import { useRef, useState, useEffect } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { shadow } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
  getToggleTokens,
  baseStyles,
  TRACK_RADIUS,
  KNOB_TRAVEL,
} from './Toggle.styles';
import type { ToggleProps } from './Toggle.types';
// ─── Component ─────────────────────────────────────────────────────────────────
/**
 * Toggle — componente de ativação binária (switch).
 *
 * Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
 * (node 797:2684). Suporta 4 estados (enabled, hover, pressed, disabled)
 * e anima o knob entre as posições OFF/ON.
 *
 * @example
 * const [enabled, setEnabled] = useState(false);
 *
 * <Toggle
 *   enabled={enabled}
 *   onChange={setEnabled}
 *   label="Receber notificações"
 * />
 */
export function Toggle({
  enabled = false,
  onChange,
  label,
  disabled = false,
  accessibilityLabel,
  testID,
}: ToggleProps) {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const knobAnim = useRef(new Animated.Value(enabled ? 1 : 0)).current;
  const [hovered, setHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const tokens = getToggleTokens(theme, enabled, disabled, hovered, isPressed);
  // Anima o knob ao mudar de estado
  useEffect(() => {
    Animated.spring(knobAnim, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
      speed: 20,
      bounciness: 4,
    }).start();
  }, [enabled, knobAnim]);
  const knobTranslateX = knobAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, KNOB_TRAVEL], // 0 → 16px
  });
  // Figma elevation por estado (idêntico ao Checkbox/Radio):
  //   Enabled → 0px  1.5px  (positionY +1.5)
  //   Hover   → 0px  3px    (positionY +3)
  //   Pressed → 0px -1.5px  (positionY -1.5 — sombra sobe)
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
  function handlePress() {
    if (!disabled) {
      onChange?.(!enabled);
    }
  }
  return (
    <Pressable
      onPress={handlePress}
      onPressIn={disabled ? undefined : handlePressIn}
      onPressOut={disabled ? undefined : handlePressOut}
      onHoverIn={disabled ? undefined : () => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      disabled={disabled}
      accessible
      accessibilityRole="switch"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ checked: enabled, disabled }}
      testID={testID}
      style={baseStyles.container}
    >
      {/* Shadow wrapper — separado do overflow:hidden */}
      <Animated.View
        style={[
          baseStyles.shadowWrapper,
          { transform: [{ scale: scaleAnim }] },
          tokens.hasShadow && {
            // iOS
            shadowColor: theme.elevation.default,
            shadowOffset: {
              width: shadow.axis.none,
              height: getShadowOffsetY(),
            },
            shadowOpacity: 1,
            shadowRadius: shadow.blur.none,
            // Android
            elevation: isPressed ? 1 : hovered ? 4 : 2,
          },
        ]}
      >
        {/* Track — overflow:hidden clipa o overlay */}
        <View
          style={[
            baseStyles.track,
            {
              backgroundColor: tokens.trackBg,
              borderColor: tokens.trackBorderColor,
              borderWidth: tokens.trackBorderWidth,
            },
          ]}
        >
          {/* Knob animado — translateX de 0 a KNOB_TRAVEL (16px) */}
          <Animated.View
            style={[
              baseStyles.knob,
              {
                backgroundColor: tokens.knobColor,
                opacity: tokens.knobOpacity,
                transform: [{ translateX: knobTranslateX }],
              },
            ]}
          />
          {/* Overlay de estado — fill_ASFXV9 (hover) ou fill_8ZLMCP (pressed) */}
          {tokens.overlayColor != null && (
            <View
              style={[
                baseStyles.overlay,
                {
                  backgroundColor: tokens.overlayColor,
                  borderRadius: TRACK_RADIUS,
                },
              ]}
              pointerEvents="none"
            />
          )}
        </View>
      </Animated.View>
      {/* Label — Paragraph/Medium: DM Sans 400 14px lh:20px */}
      {label != null && (
        <Text
          style={[baseStyles.label, { color: tokens.labelColor }]}
          numberOfLines={1}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}
