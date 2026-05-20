import type React from 'react';

export interface ShortcutProps {
  /** Título principal — Label/Small: DM Sans 600, 14px */
  title: string;
  /**
   * Descrição/subtítulo — Caption/Medium: DM Sans 400, 14px.
   * Quando omitida, não é renderizada.
   */
  description?: string;
  /**
   * Slot de ícone à esquerda do topo (Leading).
   * Aceita qualquer ReactNode — o componente não impõe o tipo de ícone.
   * Quando omitido, o slot não é renderizado.
   */
  leading?: React.ReactNode;
  /**
   * Slot de trailing à direita do topo (Badge, Notification, etc.).
   * Aceita qualquer ReactNode — o componente não impõe o tipo de elemento.
   * Quando omitido, o slot não é renderizado.
   */
  trailing?: React.ReactNode;
  /** Callback disparado ao pressionar o shortcut */
  onPress?: () => void;
  /** Label descritivo para leitores de tela */
  accessibilityLabel?: string;
  /** ID para seletores em testes automatizados */
  testID?: string;
}
