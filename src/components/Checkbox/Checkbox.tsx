import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { shadow } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getCheckboxTokens, baseStyles, BOX_RADIUS } from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';
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
      <Animated.View
        style={[
          baseStyles.shadowWrapper,
          { transform: [{ scale: scaleAnim }] },
          tokens.hasShadow && {
            shadowColor: theme.elevation.default,
            shadowOffset: {
              width: shadow.axis.none,
              height: getShadowOffsetY(),
            },
            shadowOpacity: 1,
            shadowRadius: shadow.blur.none,
            elevation: isPressed ? 1 : hovered ? 4 : 2,
          },
        ]}
      >
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
          {tokens.checkmarkColor != null && (
            <View style={baseStyles.iconContainer}>
              <CheckmarkIcon color={tokens.checkmarkColor} />
            </View>
          )}
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
