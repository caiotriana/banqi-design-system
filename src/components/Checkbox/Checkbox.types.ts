export interface CheckboxProps {
  /**
   * Estado de seleção controlado.
   * @default false
   */
  checked?: boolean;
  /** Callback disparado ao pressionar o checkbox */
  onChange?: (checked: boolean) => void;
  /**
   * Texto do label exibido ao lado do checkbox.
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
