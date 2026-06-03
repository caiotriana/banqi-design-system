import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { shadow } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getShortcutTokens, baseStyles } from './Shortcut.styles';
import type { ShortcutProps } from './Shortcut.types';
export function Shortcut({
  title,
  description,
  leading,
  trailing,
  onPress,
  accessibilityLabel,
  testID,
}: ShortcutProps) {
  const { theme } = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const tokens = getShortcutTokens(theme, hovered, isPressed);
  function getShadowOffsetY(): number {
    if (isPressed) return -shadow.axis.quarter;
    if (hovered) return shadow.axis.third;
    return shadow.axis.quarter;
  }
  function handlePressIn() {
    setIsPressed(true);
    Animated.spring(scaleAnim, {
      toValue: 0.97,
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
  const hasTopSlot = leading != null || trailing != null;
  return (
    <Animated.View
      style={[
        baseStyles.shadowWrapper,
        { transform: [{ scale: scaleAnim }] },
        {
          shadowColor: theme.elevation.default,
          shadowOffset: { width: shadow.axis.none, height: getShadowOffsetY() },
          shadowOpacity: 1,
          shadowRadius: shadow.blur.none,
          elevation: isPressed ? 1 : hovered ? 4 : 2,
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        accessible
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? title}
        testID={testID}
        style={[
          baseStyles.card,
          {
            backgroundColor: tokens.cardBg,
            borderColor: tokens.cardBorderColor,
            borderWidth: tokens.cardBorderWidth,
          },
        ]}
      >
        {hasTopSlot && (
          <View style={baseStyles.top}>
            {leading}
            {trailing != null && (
              <View style={baseStyles.trailing}>{trailing}</View>
            )}
          </View>
        )}
        <View style={baseStyles.bottom}>
          <Text
            style={[baseStyles.title, { color: tokens.titleColor }]}
            numberOfLines={2}
          >
            {title}
          </Text>
          {description != null && (
            <Text
              style={[
                baseStyles.description,
                { color: tokens.descriptionColor },
              ]}
              numberOfLines={2}
            >
              {description}
            </Text>
          )}
        </View>
        {tokens.overlayColor != null && (
          <View
            style={[
              baseStyles.overlay,
              { backgroundColor: tokens.overlayColor },
            ]}
            pointerEvents="none"
          />
        )}
      </Pressable>
    </Animated.View>
  );
}
