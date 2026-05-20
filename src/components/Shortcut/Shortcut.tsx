import { useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { shadow } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getShortcutTokens, baseStyles } from './Shortcut.styles';
import type { ShortcutProps } from './Shortcut.types';
// ─── Component ─────────────────────────────────────────────────────────────────
/**
 * Shortcut — card de atalho interativo.
 *
 * Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
 * (node 797:2489). Suporta 3 estados (enabled, hover, pressed).
 *
 * Componente composable — os slots `leading` e `trailing` aceitam qualquer
 * ReactNode, sem dependência de ícone ou Badge específicos.
 *
 * @example
 * // Com ícone e badge (composição no lado do consumidor)
 * import { Shortcut } from './Shortcut';
 * import { Badge } from '../Badge';
 *
 * <Shortcut
 *   title="Pix"
 *   description="Transferência instantânea"
 *   leading={<MyIcon name="pix" size={20} />}
 *   trailing={<Badge label="Novo" variant="accent" />}
 *   onPress={() => navigate('pix')}
 * />
 */
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
  // Figma elevation por estado:
  //   Enabled → 0px  1.5px  (positionY +1.5)
  //   Hover   → 0px  3px    (positionY +3)
  //   Pressed → 0px -1.5px  (positionY -1.5)
  function getShadowOffsetY(): number {
    if (isPressed) return -shadow.axis.quarter; // -1.5
    if (hovered) return shadow.axis.third; //  3
    return shadow.axis.quarter; //  1.5
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
          // iOS
          shadowColor: theme.elevation.default,
          shadowOffset: { width: shadow.axis.none, height: getShadowOffsetY() },
          shadowOpacity: 1,
          shadowRadius: shadow.blur.none,
          // Android
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
        {/* Top — Leading (slot) + Trailing (slot) */}
        {hasTopSlot && (
          <View style={baseStyles.top}>
            {leading}
            {trailing != null && (
              <View style={baseStyles.trailing}>{trailing}</View>
            )}
          </View>
        )}
        {/* Bottom — Title + Description */}
        <View style={baseStyles.bottom}>
          <Text
            style={[baseStyles.title, { color: tokens.titleColor }]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {description != null && (
            <Text
              style={[
                baseStyles.description,
                { color: tokens.descriptionColor },
              ]}
              numberOfLines={1}
            >
              {description}
            </Text>
          )}
        </View>
        {/* Overlay de estado — hover (rgba branca 24%) ou pressed (rgba branca 32%) */}
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
