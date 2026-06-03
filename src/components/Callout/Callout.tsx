import { Pressable, Text, View } from 'react-native';
import { border } from 'banqi-tokens/rn';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import {
  getCalloutTokens,
  getCalloutShadow,
  baseStyles,
} from './Callout.styles';
import type { CalloutProps } from './Callout.types';
function ArrowIcon({ color }: { color: string }) {
  return (
    <View style={baseStyles.arrowContainer}>
      <View style={[baseStyles.arrow, { borderColor: color }]} />
    </View>
  );
}
function CloseIcon({ color }: { color: string }) {
  return (
    <View style={baseStyles.closeIcon}>
      <View style={[baseStyles.closeLine1, { backgroundColor: color }]} />
      <View style={[baseStyles.closeLine2, { backgroundColor: color }]} />
    </View>
  );
}
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
          borderWidth: border.quarter,
          borderColor: tokens.borderColor,
          ...getCalloutShadow(tokens.shadowColor),
        },
      ]}
    >
      {icon != null && icon}
      <View style={baseStyles.contentWrapper}>
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
