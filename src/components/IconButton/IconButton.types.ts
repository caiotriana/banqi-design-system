import type React from 'react';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'ghost-oncolor'
  | 'oncolor'
  | 'critical'
  | 'ghost-critical';

export type IconButtonSize = 'medium' | 'small';

export interface IconButtonProps {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  onPress?: () => void;
  icon: React.ReactNode;
  accessibilityLabel: string;
  testID?: string;
}
