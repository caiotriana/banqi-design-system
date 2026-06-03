import { Text } from 'react-native';
import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { Button } from './Button';

describe('Button', () => {
  it('renderiza o label e é anunciado como botão', () => {
    renderWithTheme(<Button label="Continuar" />);
    expect(screen.getByRole('button', { name: 'Continuar' })).toBeTruthy();
    expect(screen.getByText('Continuar')).toBeTruthy();
  });

  it('chama onPress ao tocar quando habilitado', () => {
    const onPress = jest.fn();
    renderWithTheme(<Button label="Salvar" onPress={onPress} />);
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('não chama onPress quando disabled e reflete o estado', () => {
    const onPress = jest.fn();
    renderWithTheme(
      <Button label="Salvar" state="disabled" onPress={onPress} />
    );
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('marca busy (e não disabled) quando loading', () => {
    renderWithTheme(<Button label="Salvando" state="loading" />);
    const node = screen.getByRole('button');
    expect(node.props.accessibilityState.busy).toBe(true);
    expect(node.props.accessibilityState.disabled).toBe(false);
  });

  it('renderiza ícones leading e trailing', () => {
    renderWithTheme(
      <Button
        label="Ação"
        leadingIcon={<Text>L</Text>}
        trailingIcon={<Text>T</Text>}
      />
    );
    expect(screen.getByText('L')).toBeTruthy();
    expect(screen.getByText('T')).toBeTruthy();
  });
});
