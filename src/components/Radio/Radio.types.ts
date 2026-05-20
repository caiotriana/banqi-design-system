export interface RadioProps {
  /**
   * Estado de seleção controlado.
   * @default false
   */
  selected?: boolean;
  /** Callback disparado ao pressionar o radio */
  onChange?: (selected: boolean) => void;
  /**
   * Texto do label exibido ao lado do radio.
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
