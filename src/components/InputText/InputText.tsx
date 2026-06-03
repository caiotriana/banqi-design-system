import { useRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
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
function ClearIcon({ color }: { color: string }) {
  return (
    <View style={iconStyles.clearContainer}>
      <View style={[iconStyles.clearLine1, { backgroundColor: color }]} />
      <View style={[iconStyles.clearLine2, { backgroundColor: color }]} />
    </View>
  );
}
function SuccessIcon({ color }: { color: string }) {
  return (
    <View style={iconStyles.feedbackContainer}>
      <View
        style={{
          width: 9,
          height: 5,
          borderLeftWidth: 2,
          borderBottomWidth: 2,
          borderColor: color,
          transform: [{ rotate: '-45deg' }],
          marginTop: -1,
        }}
      />
    </View>
  );
}
function ErrorIcon({ color }: { color: string }) {
  return (
    <View
      style={[
        iconStyles.feedbackContainer,
        { borderRadius: sizing.x3, borderWidth: 1.5, borderColor: color },
      ]}
    >
      <View
        style={{
          width: 1.5,
          height: 8,
          backgroundColor: color,
          borderRadius: 1,
        }}
      />
      <View
        style={{
          width: 2,
          height: 2,
          backgroundColor: color,
          borderRadius: 1,
          marginTop: 1.5,
        }}
      />
    </View>
  );
}
function WarningIcon({ color }: { color: string }) {
  return (
    <View style={iconStyles.feedbackContainer}>
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 10,
          borderRightWidth: 10,
          borderBottomWidth: 18,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: color,
        }}
      />
    </View>
  );
}
export type InputTextSize = 'default' | 'large';
export type InputTextState =
  | 'default'
  | 'disabled'
  | 'readOnly'
  | 'success'
  | 'error'
  | 'warning';
export interface InputTextProps extends Omit<
  TextInputProps,
  'style' | 'editable'
> {
  label?: string;
  hintMessage?: string;
  size?: InputTextSize;
  state?: InputTextState;
  prefix?: React.ReactNode | string;
  trailingIcon?: React.ReactNode;
}
type StateTokens = {
  background: string;
  borderColor: string;
  labelColor: string;
  textColor: string;
  placeholderColor: string;
  prefixColor: string;
  hintColor: string;
};
function getStateTokens(
  theme: ColorTheme,
  state: InputTextState,
  focused: boolean
): StateTokens {
  if (state === 'disabled') {
    return {
      background: theme.surface.common.disabled,
      borderColor: theme.stroke.common.disabled,
      labelColor: theme.content.common.disabled,
      textColor: theme.content.common.disabled,
      placeholderColor: theme.content.common.disabled,
      prefixColor: theme.content.common.disabled,
      hintColor: theme.content.common.disabled,
    };
  }
  if (state === 'readOnly') {
    return {
      background: theme.surface.common.disabled,
      borderColor: theme.stroke.common.disabled,
      labelColor: theme.content.default,
      textColor: theme.content.common.disabled,
      placeholderColor: theme.content.common.disabled,
      prefixColor: theme.content.common.disabled,
      hintColor: theme.content.subtle,
    };
  }
  const feedbackBorder: Partial<Record<InputTextState, string>> = {
    success: theme.stroke.feedback.success,
    error: theme.stroke.feedback.critical,
    warning: theme.stroke.feedback.warning,
  };
  const feedbackHint: Partial<Record<InputTextState, string>> = {
    success: theme.content.feedback.success,
    error: theme.content.feedback.critical,
    warning: theme.content.feedback.warning,
  };
  const borderColor =
    feedbackBorder[state] ??
    (focused ? theme.stroke.accent.primary : theme.stroke.default);
  return {
    background: theme.surface.default,
    borderColor,
    labelColor: theme.content.default,
    textColor: theme.content.default,
    placeholderColor: theme.content.subtle,
    prefixColor: theme.content.default,
    hintColor: feedbackHint[state] ?? theme.content.subtle,
  };
}
export function InputText({
  label,
  hintMessage,
  size = 'default',
  state = 'default',
  prefix,
  trailingIcon,
  onFocus,
  onBlur,
  placeholderTextColor,
  ...rest
}: InputTextProps) {
  const { theme } = useTheme();
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<any>(null);
  const [internalValue, setInternalValue] = useState('');
  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readOnly';
  const isEditable = !isDisabled && !isReadOnly;
  const isLarge = size === 'large';
  const tokens = getStateTokens(theme, state, focused);
  const currentValue = rest.value ?? internalValue;
  const hasValue = typeof currentValue === 'string' && currentValue.length > 0;
  const feedbackIcons: Partial<Record<InputTextState, React.ReactNode>> = {
    success: <SuccessIcon color={tokens.hintColor} />,
    error: <ErrorIcon color={tokens.hintColor} />,
    warning: <WarningIcon color={tokens.hintColor} />,
  };
  const builtInTrailing = feedbackIcons[state] ?? null;
  const showClear =
    hasValue && isEditable && state === 'default' && !trailingIcon;
  function handleChangeText(text: string) {
    setInternalValue(text);
    rest.onChangeText?.(text);
  }
  function handleClear() {
    handleChangeText('');
    inputRef.current?.clear();
    inputRef.current?.focus();
  }
  const hasElevation = isEditable;
  const shadowHeight = focused
    ? shadow.axis.negativeQuarter
    : shadow.axis.quarter;
  const inputFontSize = isLarge
    ? typography.fontSize.x8
    : typography.fontSize.x4;
  const inputLineHeight = isLarge
    ? typography.lineHeight.x8
    : typography.lineHeight.x4;
  return (
    <View style={styles.container}>
      {label != null && (
        <Text
          style={[styles.label, { color: tokens.labelColor }]}
          numberOfLines={1}
        >
          {label}
        </Text>
      )}
      <View
        style={[
          styles.fieldWrapper,
          hasElevation && {
            shadowColor: theme.elevation.default,
            shadowOffset: {
              width: shadow.axis.none,
              height: shadowHeight,
            },
            shadowOpacity: 1,
            shadowRadius: shadow.blur.none,
            elevation: focused ? 0 : 2,
          },
        ]}
      >
        <Pressable
          onPress={() => inputRef.current?.focus()}
          disabled={!isEditable}
          accessible={false}
          style={[
            styles.field,
            {
              backgroundColor: tokens.background,
              borderColor: tokens.borderColor,
            },
          ]}
        >
          {prefix != null && (
            <View style={styles.slot} pointerEvents="none">
              {typeof prefix === 'string' ? (
                <Text
                  style={[
                    styles.inputText,
                    {
                      fontSize: inputFontSize,
                      lineHeight: inputLineHeight,
                      color: tokens.prefixColor,
                    },
                  ]}
                >
                  {prefix}
                </Text>
              ) : (
                prefix
              )}
            </View>
          )}
          <TextInput
            ref={inputRef}
            {...rest}
            onChangeText={handleChangeText}
            placeholderTextColor={
              placeholderTextColor ?? tokens.placeholderColor
            }
            editable={isEditable}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            style={[
              styles.inputText,
              styles.inputFlex,
              {
                fontSize: inputFontSize,
                lineHeight: inputLineHeight,
                color: tokens.textColor,
              },
            ]}
          />
          {showClear && (
            <Pressable
              onPress={handleClear}
              accessible
              accessibilityRole="button"
              accessibilityLabel="Limpar campo"
              style={styles.slot}
            >
              <ClearIcon color={theme.content.subtle} />
            </Pressable>
          )}
          {trailingIcon != null && (
            <View style={styles.slot}>{trailingIcon}</View>
          )}
          {!trailingIcon && builtInTrailing != null && (
            <View style={styles.slot}>{builtInTrailing}</View>
          )}
        </Pressable>
      </View>
      {hintMessage != null && (
        <Text
          style={[
            state === 'warning' ? styles.hintWarning : styles.hint,
            { color: tokens.hintColor },
          ]}
        >
          {hintMessage}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: sizing.x2,
  },
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  fieldWrapper: {
    borderRadius: radii.x4,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2,
    paddingHorizontal: sizing.x5,
    paddingVertical: sizing.x5,
    borderRadius: radii.x4,
    borderWidth: border.quarter,
    overflow: 'hidden',
  },
  slot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    padding: 0,
    borderWidth: 0,
    includeFontPadding: false,
  },
  inputFlex: {
    flex: 1,
    minWidth: 0,
  },
  hint: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x4,
    includeFontPadding: false,
  },
  hintWarning: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5,
    lineHeight: typography.lineHeight.x5,
    includeFontPadding: false,
  },
});
const iconStyles = StyleSheet.create({
  clearContainer: {
    width: sizing.x5,
    height: sizing.x5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearLine1: {
    position: 'absolute',
    width: sizing.x3,
    height: 1.5,
    borderRadius: 1,
    transform: [{ rotate: '45deg' }],
  },
  clearLine2: {
    position: 'absolute',
    width: sizing.x3,
    height: 1.5,
    borderRadius: 1,
    transform: [{ rotate: '-45deg' }],
  },
  feedbackContainer: {
    width: sizing.x5,
    height: sizing.x5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
