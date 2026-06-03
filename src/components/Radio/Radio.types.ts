export interface RadioProps {
  selected?: boolean;
  onChange?: (selected: boolean) => void;
  label?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}
