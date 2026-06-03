import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
} from 'react-native';
import { sizing, typography, type ColorTheme } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
export type LinkActionSize = 'standard' | 'large';
export interface LinkActionProps extends Omit<
  PressableProps,
  'disabled' | 'style' | 'children'
> {
  label: string;
  size?: LinkActionSize;
  onColor?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}
function getTextColor(
  theme: ColorTheme,
  onColor: boolean,
  disabled: boolean
): string {
  if (disabled) {
    return onColor
      ? theme.content.common.onColorDisabled
      : theme.content.common.disabled;
  }
  return onColor ? theme.content.common.onColor : theme.content.accent.primary;
}
function ArrowTopRight({ color, size }: { color: string; size: number }) {
  return (
    <Text
      style={{
        color,
        fontSize: size * 0.75,
        lineHeight: size,
        includeFontPadding: false,
      }}
      accessibilityElementsHidden
      importantForAccessibility="no"
    >
      {'↗'}
    </Text>
  );
}
export function LinkAction({
  label,
  size = 'standard',
  onColor = false,
  disabled = false,
  icon,
  onPress,
  onHoverIn,
  onHoverOut,
  accessibilityLabel,
  ...rest
}: LinkActionProps) {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const isLarge = size === 'large';
  const iconSize = isLarge ? sizing.x5 : sizing.x4;
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onHoverIn={(e) => {
        if (!disabled) setHovered(true);
        onHoverIn?.(e);
      }}
      onHoverOut={(e) => {
        setHovered(false);
        onHoverOut?.(e);
      }}
      disabled={disabled}
      accessible
      accessibilityRole="link"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled }}
      {...rest}
      style={styles.container}
    >
      {({ pressed }) => {
        const textColor = getTextColor(theme, onColor, disabled);
        const showUnderline = (pressed || hovered) && !disabled;
        return (
          <>
            <View>
              <Text
                style={[
                  isLarge ? styles.labelLarge : styles.labelStandard,
                  { color: textColor },
                  showUnderline && styles.underline,
                ]}
                numberOfLines={1}
              >
                {label}
              </Text>
            </View>
            <View
              style={[styles.iconSlot, { width: iconSize, height: iconSize }]}
            >
              {icon ?? <ArrowTopRight color={textColor} size={iconSize} />}
            </View>
          </>
        );
      }}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x1,
    alignSelf: 'flex-start',
  },
  labelStandard: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  labelLarge: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x4,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  iconSlot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
