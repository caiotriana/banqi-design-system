import { Text, View } from 'react-native';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { getBadgeTokens, baseStyles } from './Badge.styles';
import type { BadgeProps } from './Badge.types';
import { StatusDot } from 'banqi-icons';

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
      {showDot && <StatusDot size={16} color={tokens.dotColor} />}
      <Text
        style={[baseStyles.label, { color: tokens.textColor }]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </View>
  );
}
