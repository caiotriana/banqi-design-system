import type React from 'react';

/**
 * Variante visual do Callout, mapeada 1:1 com o Figma (node 797-1970).
 */
export type CalloutVariant =
  | 'standard'
  | 'info'
  | 'success'
  | 'attention'
  | 'critical';

export interface CalloutProps {
  /**
   * Variante visual do callout.
   * @default 'standard'
   */
  variant?: CalloutVariant;
  /**
   * Título opcional — exibido acima da descrição (Title=true no Figma).
   * Quando omitido, apenas a descrição é exibida.
   */
  title?: string;
  /** Texto da mensagem — sempre presente */
  description: string;
  /**
   * Slot de ícone à esquerda (Leading no Figma).
   * Aceita qualquer ReactNode — o componente não impõe o tipo de ícone.
   * Quando omitido, o slot não é renderizado.
   */
  icon?: React.ReactNode;
  /**
   * Texto do link de ação (Actionable=True no Figma).
   * Quando fornecido, exibe o link action abaixo da mensagem,
   * e o card ganha borda e sombra.
   */
  actionLabel?: string;
  /** Callback disparado ao pressionar o link de ação */
  onActionPress?: () => void;
  /**
   * Callback disparado ao pressionar o botão de fechar (Closable=True no Figma).
   * Quando fornecido, exibe o ícone de fechar à direita.
   */
  onClose?: () => void;
  /** Label descritivo para leitores de tela */
  accessibilityLabel?: string;
  /** ID para seletores em testes automatizados */
  testID?: string;
}
