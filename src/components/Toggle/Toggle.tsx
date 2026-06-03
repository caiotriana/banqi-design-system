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
    outputRange: [0, KNOB_TRAVEL],
  });
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
            baseStyles.track,
            {
              backgroundColor: tokens.trackBg,
              borderColor: tokens.trackBorderColor,
              borderWidth: tokens.trackBorderWidth,
            },
          ]}
        >
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
