import type React from 'react';
import type { ImageSourcePropType } from 'react-native';

/**
 * Variante de conteúdo do Avatar.
 * - `icon`: ícone composable no slot `icon`
 * - `initials`: texto de 1-2 letras via prop `initials`
 * - `image`: foto via prop `imageSource`
 * - `logo`: logo Casas Bahia Pay embutido (casas bahia pay/symbol/default)
 */
export type AvatarVariant = 'icon' | 'initials' | 'image' | 'logo';

/**
 * Tamanho do Avatar.
 * - `small`: 36×36px, borderRadius 12px
 * - `standard`: 48×48px, borderRadius 16px
 * - `large`: 60×60px, borderRadius 24px
 */
export type AvatarSize = 'small' | 'standard' | 'large';

/**
 * Estado visual do Avatar.
 * - `enabled`: estado padrão
 * - `disabled`: fundo e ícone/texto em cinza
 * - `skeleton`: shimmer de carregamento
 */
export type AvatarState = 'enabled' | 'disabled' | 'skeleton';

export interface AvatarProps {
  /**
   * Variante de conteúdo.
   * @default 'initials'
   */
  variant?: AvatarVariant;
  /**
   * Tamanho do avatar.
   * @default 'standard'
   */
  size?: AvatarSize;
  /**
   * Estado visual.
   * @default 'enabled'
   */
  state?: AvatarState;
  /**
   * Texto de iniciais (variant='initials'). Máximo 2 caracteres.
   * @default 'AA'
   */
  initials?: string;
  /**
   * Slot de ícone composable (variant='icon').
   * Aceita qualquer ReactNode — o componente não impõe o tipo de ícone.
   */
  icon?: React.ReactNode;
  /**
   * Fonte da imagem (variant='image').
   * Aceita URI de rede ou require local.
   * @example { uri: 'https://example.com/photo.jpg' }
   */
  imageSource?: ImageSourcePropType;
  /** Label descritivo para leitores de tela */
  accessibilityLabel?: string;
  /** ID para seletores em testes automatizados */
  testID?: string;
}
