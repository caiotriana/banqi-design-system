import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
} from 'react-native';
import {
  radii,
  sizing,
  typography,
  border,
  shadow,
  type ColorTheme,
} from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
export type ButtonVariant =
  | 'primary'
  | 'onColor'
  | 'critical'
  | 'secondary'
  | 'ghost'
  | 'criticalGhost';
export type ButtonSize = 'default' | 'compact';
export type ButtonState = 'enabled' | 'disabled' | 'loading';
export interface ButtonProps extends Omit<
  PressableProps,
  'disabled' | 'style' | 'children'
> {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}
type VariantTokens = {
  background: string;
  label: string;
  borderColor?: string;
  borderWidth?: number;
  loaderColor: string;
};
function getVariantTokens(
  variant: ButtonVariant,
  theme: ColorTheme
): VariantTokens {
  const map: Record<ButtonVariant, VariantTokens> = {
    primary: {
      background: theme.surface.accent.primaryPersistent,
      label: theme.content.common.onColor,
      loaderColor: theme.content.common.onColor,
    },
    onColor: {
      background: theme.surface.common.onColor,
      label: theme.content.accent.primaryPersistent,
      loaderColor: theme.content.accent.primaryPersistent,
    },
    critical: {
      background: theme.surface.feedback.critical,
      label: theme.content.common.onColor,
      loaderColor: theme.content.common.onColor,
    },
    secondary: {
      background: theme.surface.accent.primarySubtleOnSubtle,
      label: theme.content.accent.primary,
      borderColor: theme.stroke.default,
      borderWidth: border.quarter,
      loaderColor: theme.content.accent.primary,
    },
    ghost: {
      background: theme.surface.common.ghost,
      label: theme.content.accent.primary,
      loaderColor: theme.content.accent.primary,
    },
    criticalGhost: {
      background: theme.surface.common.ghost,
      label: theme.content.feedback.critical,
      loaderColor: theme.content.feedback.critical,
    },
  };
  return map[variant];
}
export function Button({
  label,
  variant = 'primary',
  size = 'default',
  state = 'enabled',
  leadingIcon,
  trailingIcon,
  onPress,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();
  const [pressed, setPressed] = useState(false);
  const isDisabled = state === 'disabled';
  const isLoading = state === 'loading';
  const isInteractive = !isDisabled && !isLoading;
  const tokens: VariantTokens = isDisabled
    ? {
        background: theme.surface.common.disabled,
        label: theme.content.common.disabled,
        loaderColor: theme.content.common.disabled,
      }
    : getVariantTokens(variant, theme);
  const isCompact = size === 'compact';
  function handlePressIn() {
    setPressed(true);
  }
  function handlePressOut() {
    setPressed(false);
  }
  const isGhost = variant === 'ghost' || variant === 'criticalGhost';
  const hasElevation = isInteractive && !isGhost;
  const shadowHeight = pressed ? -shadow.axis.quarter : shadow.axis.quarter;
  return (
    <View
      style={[
        styles.wrapper,
        { borderRadius: isCompact ? radii.x3 : radii.x4 },
        hasElevation && {
          shadowColor: theme.elevation.default,
          shadowOffset: {
            width: shadow.axis.none,
            height: shadowHeight,
          },
          shadowOpacity: 1,
          shadowRadius: shadow.blur.none,
          elevation: pressed ? 0 : 2,
        },
      ]}
    >
      <Pressable
        onPress={isInteractive ? onPress : undefined}
        onPressIn={isInteractive ? handlePressIn : undefined}
        onPressOut={isInteractive ? handlePressOut : undefined}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, busy: isLoading }}
        accessibilityLabel={label}
        {...rest}
        style={[
          styles.base,
          isCompact ? styles.compact : styles.sizeDefault,
          {
            backgroundColor: tokens.background,
            borderColor: tokens.borderColor ?? 'transparent',
            borderWidth: tokens.borderWidth ?? 0,
          },
        ]}
      >
        {pressed && isInteractive && (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: theme.surface.common.pressed,
                borderRadius: isCompact ? radii.x3 : radii.x4,
              },
            ]}
            pointerEvents="none"
          />
        )}
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={tokens.loaderColor}
            style={styles.loader}
          />
        ) : (
          <View style={styles.content}>
            {leadingIcon != null && (
              <View style={isCompact ? styles.iconCompact : styles.icon}>
                {leadingIcon}
              </View>
            )}
            <Text
              style={[styles.label, { color: tokens.label }]}
              numberOfLines={1}
            >
              {label}
            </Text>
            {trailingIcon != null && (
              <View style={isCompact ? styles.iconCompact : styles.icon}>
                {trailingIcon}
              </View>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  sizeDefault: {
    height: sizing.x12,
    paddingHorizontal: sizing.x4,
    paddingVertical: sizing.x3,
    borderRadius: radii.x4,
  },
  compact: {
    paddingHorizontal: sizing.x3,
    paddingVertical: sizing.x2,
    borderRadius: radii.x3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2,
  },
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  icon: {
    width: sizing.x5,
    height: sizing.x5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCompact: {
    width: sizing.x4,
    height: sizing.x4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginHorizontal: sizing.x2,
  },
});
