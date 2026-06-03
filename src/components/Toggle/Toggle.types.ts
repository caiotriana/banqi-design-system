export interface ToggleProps {
  enabled?: boolean;
  onChange?: (enabled: boolean) => void;
  label?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
