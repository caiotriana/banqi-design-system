import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { shadow } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getCheckboxTokens, baseStyles, BOX_RADIUS } from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';
// ─── Checkmark icon ────────────────────────────────────────────────────────────
/**
 * Ícone de checkmark implementado via border-trick.
 * Baseado no Figma: ícone 42:6073 'Check-negative' (16×16),
 * com path interno 12×8.5 em x:2.25 y:3.75 (layout_TX3HWX).
 */
function CheckmarkIcon({ color }: { color: string }) {
  return (
    <View
      style={{
        width: 11,
        height: 6,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: color,
        transform: [{ rotate: '-45deg' }],
        marginTop: -2,
      }}
    />
  );
}
// ─── Component ─────────────────────────────────────────────────────────────────
/**
 * Checkbox — componente de seleção binária.
 *
 * Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
 * (node 795:820 / componentSet 46:3804). Suporta 4 estados
 * (enabled, hover, pressed, disabled) e exibe preview do checkmark
 * em hover/pressed unchecked.
 *
 * @example
 * const [checked, setChecked] = useState(false);
 *
 * <Checkbox
 *   checked={checked}
 *   onChange={setChecked}
 *   label="Aceitar termos"
 * />
 */
export function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  accessibilityLabel,
  testID,
}: CheckboxProps) {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const tokens = getCheckboxTokens(
    theme,
    checked,
    disabled,
    hovered,
    isPressed
  );
  // Figma elevation por estado (idêntico ao IconButton):
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
      onChange?.(!checked);
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
      accessibilityRole="checkbox"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ checked, disabled }}
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
        {/* Quadrado do checkbox — overflow:hidden clipa o overlay */}
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
          {/* Checkmark (ícone 42:6073 ' Check-negative', 16×16 — layout_TY38K6) */}
          {tokens.checkmarkColor != null && (
            <View style={baseStyles.iconContainer}>
              <CheckmarkIcon color={tokens.checkmarkColor} />
            </View>
          )}
          {/* Overlay de estado — fill_P22HH7 (hover) ou fill_7KRLLS (pressed) */}
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
