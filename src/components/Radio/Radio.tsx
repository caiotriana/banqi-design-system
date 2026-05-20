import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { shadow } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getRadioTokens, baseStyles, BOX_RADIUS } from './Radio.styles';
import type { RadioProps } from './Radio.types';
// ─── Component ─────────────────────────────────────────────────────────────────
/**
 * Radio — componente de seleção exclusiva.
 *
 * Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
 * (node 797:2340 / componentSet 46:3745). Suporta 4 estados
 * (enabled, hover, pressed, disabled) e exibe preview do dot
 * em hover/pressed unselected.
 *
 * @example
 * const [selected, setSelected] = useState(false);
 *
 * <Radio
 *   selected={selected}
 *   onChange={setSelected}
 *   label="Opção A"
 * />
 */
export function Radio({
  selected = false,
  onChange,
  label,
  disabled = false,
  accessibilityLabel,
  testID,
}: RadioProps) {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const tokens = getRadioTokens(theme, selected, disabled, hovered, isPressed);
  // Figma elevation por estado (idêntico ao Checkbox/IconButton):
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
      onChange?.(!selected);
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
      accessibilityRole="radio"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ checked: selected, disabled }}
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
        {/* Círculo do radio — overflow:hidden clipa o overlay */}
        <View
          style={[
            baseStyles.box,
            {
              backgroundColor: tokens.boxBg,
              borderColor: tokens.boxBorderColor,
              borderWidth: tokens.boxBorderWidth,
            },
          ]}
        >
          {/* Dot interno (layout_KZ5H77 — Selection ellipse, 16×16) */}
          {tokens.dotColor != null && (
            <View
              style={[baseStyles.dot, { backgroundColor: tokens.dotColor }]}
            />
          )}
          {/* Overlay de estado — fill_SNZBGJ (hover) ou fill_KGTMT0 (pressed) */}
          {tokens.overlayColor != null && (
            <View
              style={[
                baseStyles.overlay,
                {
                  backgroundColor: tokens.overlayColor,
                  borderRadius: BOX_RADIUS,
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
