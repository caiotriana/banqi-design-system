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
// ─── Built-in icons ──────────────────────────────────────────────────────────
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
// ─── Types ────────────────────────────────────────────────────────────────────
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
  /** Texto exibido acima do campo */
  label?: string;
  /** Mensagem de ajuda/feedback exibida abaixo do campo */
  hintMessage?: string;
  /** Tamanho — default (16px / lh16) ou large (32px / lh32) */
  size?: InputTextSize;
  /** Estado funcional / feedback de validação */
  state?: InputTextState;
  /** Prefixo dentro do campo (ex.: "R$"). String renderiza com a tipografia do input */
  prefix?: React.ReactNode | string;
  /** Ícone trailing exibido dentro do campo */
  trailingIcon?: React.ReactNode;
}
// ─── Token map por estado ─────────────────────────────────────────────────────
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
  // Borda de feedback prevalece sobre a borda de focus (UX: o usuário precisa
  // continuar enxergando o estado de validação enquanto digita).
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
// ─── Component ────────────────────────────────────────────────────────────────
/**
 * InputText — campo de entrada de texto.
 *
 * Mapeia 1:1 o componente do Figma **Casas Bahia Pay — Design System**
 * (component set node 405:33837, frame 797:1690). Estados do Figma
 * (Enabled / Hover / Active / Filled) são consolidados em `state="default"`:
 * `filled` vs placeholder é derivado automaticamente pelo TextInput, e `focus`
 * (Figma "Active") é controlado internamente via `onFocus`/`onBlur`.
 */
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
  // RN 0.85: TextInput's ref type (_TextInputInstance) is not directly importable
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
  const showClear = hasValue && isEditable && state === 'default' && !trailingIcon;
  function handleChangeText(text: string) {
    setInternalValue(text);
    rest.onChangeText?.(text);
  }
  function handleClear() {
    handleChangeText('');
    inputRef.current?.clear();
    inputRef.current?.focus();
  }
  // Figma:
  //   Elevation/Enabled  = 0px  1.5px  (padrão)
  //   Elevation/Active   = 0px -1.5px  (inset — focado)
  //   Disabled / Read Only = sem sombra
  const hasElevation = isEditable;
  const shadowHeight = focused
    ? shadow.axis.negativeQuarter
    : shadow.axis.quarter;
  // Default = Label/Medium (16/16) · Large = Label/XLarge (32/32)
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
          // Hit slop não é necessário aqui — o próprio field já é toda a área de toque.
          // accessible={false} evita que o Pressable "engula" o foco do TextInput em screen readers.
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
            // Figma: warning usa lineHeight 20px (vs 16px nos demais)
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
// ─── Styles (valores mapeados 1:1 dos tokens Figma) ───────────────────────────
const styles = StyleSheet.create({
  // Figma: column, gap 8px entre label, field e message
  container: {
    gap: sizing.x2, // 8px
  },
  // Label/Small — DM Sans SemiBold 14px / lh 16px
  label: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  // Wrapper que carrega a sombra — borderRadius igual ao field para o shadow seguir o shape no iOS
  fieldWrapper: {
    borderRadius: radii.x4, // 16px
  },
  // Figma: row, padding 20px, gap 8px, radius 16px, border 1px
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizing.x2, // 8px
    paddingHorizontal: sizing.x5, // 20px
    paddingVertical: sizing.x5, // 20px
    borderRadius: radii.x4, // 16px
    borderWidth: border.quarter, // 1px
    overflow: 'hidden',
  },
  // Slot genérico (prefixo / ícone) — apenas alinhamento, tamanho controlado pelo conteúdo
  slot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Label/Medium (default) ou Label/XLarge (large) — fontSize/lineHeight aplicados inline
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
  // Label/Small
  hint: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x4, // 16px
    includeFontPadding: false,
  },
  hintWarning: {
    fontFamily: typography.fontFamily,
    fontWeight: '600',
    fontSize: typography.fontSize.x3_5, // 14px
    lineHeight: typography.lineHeight.x5, // 20px
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
