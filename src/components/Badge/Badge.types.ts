/**
 * Variantes visuais do Badge, mapeadas 1:1 com o Figma (node 795-754).
 * `disabled` não é uma variante — é controlado via prop `disabled`.
 */
export type BadgeVariant =
  | 'highlight'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'critical';

export interface BadgeProps {
  /** Texto exibido dentro do badge */
  label: string;
  /**
   * Variante visual do badge.
   * @default 'neutral'
   */
  variant?: BadgeVariant;
  /**
   * Exibe um dot de status à esquerda do label (Status=True no Figma).
   * @default false
   */
  showDot?: boolean;
  /**
   * Aplica estilos de estado disabled (Variant=N/A no Figma).
   * @default false
   */
  disabled?: boolean;
  /** Label descritivo para leitores de tela */
  accessibilityLabel?: string;
  /** ID para seletores em testes automatizados */
  testID?: string;
}
