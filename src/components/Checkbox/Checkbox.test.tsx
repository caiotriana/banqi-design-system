import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renderiza o label e é anunciado como checkbox', () => {
    renderWithTheme(<Checkbox label="Aceito" />);
    expect(screen.getByRole('checkbox', { name: 'Aceito' })).toBeTruthy();
    expect(screen.getByText('Aceito')).toBeTruthy();
  });

  it('chama onChange com o valor invertido ao tocar', () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Checkbox checked={false} onChange={onChange} label="Aceito" />
    );
    fireEvent.press(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('reflete checked no estado de acessibilidade', () => {
    renderWithTheme(<Checkbox checked label="Aceito" />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('não chama onChange quando disabled', () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Checkbox checked disabled onChange={onChange} label="Aceito" />
    );
    fireEvent.press(screen.getByRole('checkbox'));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
