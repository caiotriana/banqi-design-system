export type BadgeVariant =
  | 'highlight'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'critical';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  showDot?: boolean;
  disabled?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
