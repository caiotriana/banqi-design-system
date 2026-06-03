import { Text } from 'react-native';
import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { IconButton } from './IconButton';

const icon = <Text>×</Text>;

describe('IconButton', () => {
  it('expõe o accessibilityLabel obrigatório', () => {
    renderWithTheme(<IconButton icon={icon} accessibilityLabel="Fechar" />);
    expect(screen.getByRole('button', { name: 'Fechar' })).toBeTruthy();
  });

  it('chama onPress ao tocar quando habilitado', () => {
    const onPress = jest.fn();
    renderWithTheme(
      <IconButton icon={icon} accessibilityLabel="Fechar" onPress={onPress} />
    );
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('não chama onPress quando disabled e reflete o estado', () => {
    const onPress = jest.fn();
    renderWithTheme(
      <IconButton
        icon={icon}
        accessibilityLabel="Fechar"
        disabled
        onPress={onPress}
      />
    );
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
