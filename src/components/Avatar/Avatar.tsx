import { useRef, useEffect } from 'react';
import { Animated, Image } from 'react-native';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getSizeTokens, getVisualTokens, baseStyles } from './Avatar.styles';
import type { AvatarProps } from './Avatar.types';
import LOGO from './assets/logo-cbpay.png';
export function Avatar({
  variant = 'initials',
  size = 'standard',
  state = 'enabled',
  initials = 'AA',
  icon,
  imageSource,
  accessibilityLabel,
  testID,
}: AvatarProps) {
  const { theme } = useTheme();
  const sizeTokens = getSizeTokens(size);
  const visualTokens = getVisualTokens(theme, variant, state);
  const skeletonAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (state === 'skeleton') {
      const loop = Animated.loop(
        Animated.sequence([
          Animated.timing(skeletonAnim, {
            toValue: 0.35,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(skeletonAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
        ])
      );
      loop.start();
      return () => loop.stop();
    } else {
      skeletonAnim.setValue(1);
    }
    return undefined;
  }, [state, skeletonAnim]);
  function renderContent() {
    if (state === 'skeleton') {
      return null;
    }
    switch (variant) {
      case 'image':
        return (
          <Image
            source={imageSource ?? { uri: 'https://i.pravatar.cc/300' }}
            style={baseStyles.image}
            resizeMode="cover"
            accessibilityIgnoresInvertColors
          />
        );
      case 'logo':
        return (
          <Image
            source={typeof LOGO === 'string' ? { uri: LOGO } : LOGO}
            style={[
              baseStyles.logo,
              {
                width: sizeTokens.dimension,
                height: sizeTokens.dimension,
              },
            ]}
            resizeMode="contain"
            accessibilityIgnoresInvertColors
          />
        );
      case 'icon':
        return icon ?? null;
      case 'initials':
      default:
        return (
          <Animated.Text
            style={[
              baseStyles.initials,
              {
                fontSize: sizeTokens.fontSize,
                lineHeight: sizeTokens.lineHeight,
                color: visualTokens.contentColor,
              },
            ]}
            numberOfLines={1}
          >
            {initials.slice(0, 2).toUpperCase()}
          </Animated.Text>
        );
    }
  }
  const containerStyle = {
    width: sizeTokens.dimension,
    height: sizeTokens.dimension,
    borderRadius: sizeTokens.borderRadius,
    backgroundColor: visualTokens.bg,
  };
  return (
    <Animated.View
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? `Avatar ${variant}`}
      testID={testID}
      style={[
        baseStyles.container,
        containerStyle,
        state === 'skeleton' && { opacity: skeletonAnim },
      ]}
    >
      {renderContent()}
    </Animated.View>
  );
}
