import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { LinkAction } from './LinkAction';

describe('LinkAction', () => {
  it('renderiza o label e é anunciado como link', () => {
    renderWithTheme(<LinkAction label="Ver detalhes" />);
    expect(screen.getByRole('link', { name: 'Ver detalhes' })).toBeTruthy();
    expect(screen.getByText('Ver detalhes')).toBeTruthy();
  });

  it('chama onPress ao tocar quando habilitado', () => {
    const onPress = jest.fn();
    renderWithTheme(<LinkAction label="Abrir" onPress={onPress} />);
    fireEvent.press(screen.getByRole('link'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('não chama onPress quando disabled', () => {
    const onPress = jest.fn();
    renderWithTheme(<LinkAction label="Abrir" disabled onPress={onPress} />);
    fireEvent.press(screen.getByRole('link'));
    expect(onPress).not.toHaveBeenCalled();
    expect(screen.getByRole('link')).toBeDisabled();
  });
});
