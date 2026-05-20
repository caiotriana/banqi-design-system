import { Text, View } from 'react-native';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getBadgeTokens, baseStyles } from './Badge.styles';
import type { BadgeProps } from './Badge.types';
/**
 * Badge — componente de etiqueta visual informativa.
 *
 * Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
 * (node 795-754). Suporta 6 variantes × estado disabled, com dot de status opcional.
 * Componente puramente visual — sem Pressable, sem shadow, sem animação.
 *
 * @example
 * <Badge label="Novo" variant="accent" />
 * <Badge label="Pendente" variant="warning" showDot />
 * <Badge label="Inativo" disabled />
 */
export function Badge({
  label,
  variant = 'neutral',
  showDot = false,
  disabled = false,
  accessibilityLabel,
  testID,
}: BadgeProps) {
  const { theme } = useTheme();
  const tokens = getBadgeTokens(theme, variant, disabled);
  return (
    <View
      accessible
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? label}
      testID={testID}
      style={[
        baseStyles.badge,
        showDot ? baseStyles.badgeWithDot : baseStyles.badgeWithoutDot,
        { backgroundColor: tokens.bg },
      ]}
    >
      {/* Dot de status — filled/support-feedback/status-dot (layout_MWFHWH 16×16) */}
      {showDot && (
        <View style={baseStyles.dotContainer}>
          <View
            style={[baseStyles.dot, { backgroundColor: tokens.dotColor }]}
          />
        </View>
      )}
      {/* Label — Label/XSmall: DM Sans 600, 12px, lh 14px */}
      <Text
        style={[baseStyles.label, { color: tokens.textColor }]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </View>
  );
}
