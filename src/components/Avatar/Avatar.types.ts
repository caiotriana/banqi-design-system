import type React from 'react';
import type { ImageSourcePropType } from 'react-native';

export type AvatarVariant = 'icon' | 'initials' | 'image' | 'logo';

export type AvatarSize = 'small' | 'standard' | 'large';

export type AvatarState = 'enabled' | 'disabled';

export interface AvatarProps {
  variant?: AvatarVariant;
  size?: AvatarSize;
  state?: AvatarState;
  initials?: string;
  icon?: React.ReactNode;
  imageSource?: ImageSourcePropType;
  accessibilityLabel?: string;
  testID?: string;
}
