import { Pressable, Text, View } from 'react-native';
import { border } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
  getCalloutTokens,
  getCalloutShadow,
  baseStyles,
} from './Callout.styles';
import type { CalloutProps } from './Callout.types';
// ─── Ícone de seta (Link Action) ───────────────────────────────────────────────
function ArrowIcon({ color }: { color: string }) {
  return (
    <View style={baseStyles.arrowContainer}>
      <View style={[baseStyles.arrow, { borderColor: color }]} />
    </View>
  );
}
// ─── Ícone de fechar (Trailing) ────────────────────────────────────────────────
function CloseIcon({ color }: { color: string }) {
  return (
    <View style={baseStyles.closeIcon}>
      <View style={[baseStyles.closeLine1, { backgroundColor: color }]} />
      <View style={[baseStyles.closeLine2, { backgroundColor: color }]} />
    </View>
  );
}
// ─── Component ─────────────────────────────────────────────────────────────────
/**
 * Callout — componente de mensagem informativa contextual.
 *
 * Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
 * (node 797-1970). Suporta 5 variantes × actionable/non-actionable × closable.
 *
 * O slot `icon` é composable — aceita qualquer ReactNode.
 * O componente não importa ícones diretamente.
 *
 * @example
 * // Actionable com ícone (composição no lado do consumidor)
 * <Callout
 *   variant="info"
 *   title="Atenção"
 *   description="Sua senha expira em 3 dias."
 *   icon={<InfoIcon size={20} />}
 *   actionLabel="Alterar senha"
 *   onActionPress={() => navigate('change-password')}
 *   onClose={() => dismiss()}
 * />
 */
export function Callout({
  variant = 'standard',
  title,
  description,
  icon,
  actionLabel,
  onActionPress,
  onClose,
  accessibilityLabel,
  testID,
}: CalloutProps) {
  const { theme } = useTheme();
  const tokens = getCalloutTokens(theme, variant);
  // Actionable=True → borda e sombra conforme Figma
  const isActionable = actionLabel != null;
  return (
    <View
      accessible
      accessibilityRole="alert"
      accessibilityLabel={accessibilityLabel ?? title ?? description}
      testID={testID}
      style={[
        baseStyles.card,
        { backgroundColor: tokens.bg },
        isActionable && {
          // Figma: Actionable=True → strokeWeight 1px + Elevation/Enabled
          borderWidth: border.quarter, // 1px
          borderColor: tokens.borderColor,
          ...getCalloutShadow(tokens.shadowColor),
        },
      ]}
    >
      {/* Leading — slot de ícone composable */}
      {icon != null && icon}
      {/* Content Wrapper — layout_CUPC6D */}
      <View style={baseStyles.contentWrapper}>
        {/* Main Content — layout_NL799O */}
        <View style={baseStyles.mainContent}>
          {title != null && (
            <Text
              style={[baseStyles.title, { color: tokens.textColor }]}
              numberOfLines={1}
            >
              {title}
            </Text>
          )}
          <Text style={[baseStyles.description, { color: tokens.textColor }]}>
            {description}
          </Text>
        </View>
        {/* Link Action — apenas em Actionable=True (layout_JI5H17) */}
        {isActionable && (
          <Pressable
            onPress={onActionPress}
            accessible
            accessibilityRole="link"
            accessibilityLabel={actionLabel}
            style={baseStyles.linkAction}
          >
            <Text style={[baseStyles.linkText, { color: tokens.linkColor }]}>
              {actionLabel}
            </Text>
            <ArrowIcon color={tokens.linkColor} />
          </Pressable>
        )}
      </View>
      {/* Trailing — botão fechar, apenas quando onClose é fornecido */}
      {onClose != null && (
        <Pressable
          onPress={onClose}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Fechar"
          style={baseStyles.closeButton}
        >
          <CloseIcon color={tokens.textColor} />
        </Pressable>
      )}
    </View>
  );
}
