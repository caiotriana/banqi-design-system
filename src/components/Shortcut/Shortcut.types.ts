import type React from 'react';

export interface ShortcutProps {
  title: string;
  description?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onPress?: () => void;
  accessibilityLabel?: string;
  testID?: string;
}
