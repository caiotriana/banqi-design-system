import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renderiza o label e é anunciado como switch', () => {
    renderWithTheme(<Toggle label="Notificações" />);
    expect(screen.getByRole('switch', { name: 'Notificações' })).toBeTruthy();
    expect(screen.getByText('Notificações')).toBeTruthy();
  });

  it('chama onChange com o valor invertido ao tocar', () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Toggle enabled={false} onChange={onChange} label="Notificações" />
    );
    fireEvent.press(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('reflete enabled no estado de acessibilidade', () => {
    renderWithTheme(<Toggle enabled label="Notificações" />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('não chama onChange quando disabled', () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Toggle enabled disabled onChange={onChange} label="Notificações" />
    );
    fireEvent.press(screen.getByRole('switch'));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('switch')).toBeDisabled();
  });
});
