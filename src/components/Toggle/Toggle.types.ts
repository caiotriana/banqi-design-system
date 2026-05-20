export interface ToggleProps {
  /**
   * Estado de ativação controlado.
   * @default false
   */
  enabled?: boolean;
  /** Callback disparado ao pressionar o toggle */
  onChange?: (enabled: boolean) => void;
  /**
   * Texto do label exibido ao lado do toggle.
   * Quando omitido, o label não é renderizado.
   */
  label?: string;
  /**
   * Desabilita interações e aplica estilos de estado disabled.
   * @default false
   */
  disabled?: boolean;
  /** Label descritivo para leitores de tela */
  accessibilityLabel?: string;
  /** ID para seletores em testes automatizados */
  testID?: string;
}
