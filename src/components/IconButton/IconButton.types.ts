import type React from 'react';

/** Variante visual do IconButton, espelhando os symbols do Figma (component set node 46:3535) */
export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'ghost-oncolor'
  | 'oncolor'
  | 'critical'
  | 'ghost-critical';

/** Tamanho do IconButton */
export type IconButtonSize = 'medium' | 'small';

export interface IconButtonProps {
  /**
   * Variante visual do botão. Cada opção mapeia diretamente um symbol do Figma.
   * @default 'primary'
   */
  variant?: IconButtonVariant;
  /**
   * Tamanho do botão.
   * - `medium` — 44×44 px (padding 12 + icon 20), borderRadius 16
   * - `small`  — 36×36 px (padding 8  + icon 20), borderRadius 12
   * @default 'medium'
   */
  size?: IconButtonSize;
  /**
   * Quando `true`, desabilita interações e aplica estilos de estado disabled.
   * @default false
   */
  disabled?: boolean;
  /** Callback disparado ao pressionar o botão */
  onPress?: () => void;
  /**
   * Nó React renderizado no centro do botão.
   * Aceita qualquer ícone: SVG component, react-native-vector-icons, etc.
   */
  icon: React.ReactNode;
  /** Label descritivo para leitores de tela (obrigatório) */
  accessibilityLabel: string;
  /** ID para seletores em testes automatizados */
  testID?: string;
}
