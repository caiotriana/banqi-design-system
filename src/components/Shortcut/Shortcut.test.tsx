import { Text } from 'react-native';
import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { Shortcut } from './Shortcut';

describe('Shortcut', () => {
  it('renderiza título e descrição e é anunciado como botão', () => {
    renderWithTheme(<Shortcut title="Pix" description="Transferências" />);
    expect(screen.getByRole('button', { name: 'Pix' })).toBeTruthy();
    expect(screen.getByText('Transferências')).toBeTruthy();
  });

  it('chama onPress ao tocar', () => {
    const onPress = jest.fn();
    renderWithTheme(<Shortcut title="Pix" onPress={onPress} />);
    fireEvent.press(screen.getByRole('button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renderiza os slots leading e trailing quando fornecidos', () => {
    renderWithTheme(
      <Shortcut
        title="Pix"
        leading={<Text>L</Text>}
        trailing={<Text>T</Text>}
      />
    );
    expect(screen.getByText('L')).toBeTruthy();
    expect(screen.getByText('T')).toBeTruthy();
  });
});
