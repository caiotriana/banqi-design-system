import type React from 'react';

export type CalloutVariant =
  | 'standard'
  | 'info'
  | 'success'
  | 'attention'
  | 'critical';

export interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onActionPress?: () => void;
  onClose?: () => void;
  accessibilityLabel?: string;
  testID?: string;
}
