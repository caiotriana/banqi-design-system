import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renderiza o label e é anunciado como radio', () => {
    renderWithTheme(<Radio label="Grátis" />);
    expect(screen.getByRole('radio', { name: 'Grátis' })).toBeTruthy();
    expect(screen.getByText('Grátis')).toBeTruthy();
  });

  it('chama onChange com o valor invertido ao tocar', () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Radio selected={false} onChange={onChange} label="Grátis" />
    );
    fireEvent.press(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('reflete selected no estado de acessibilidade', () => {
    renderWithTheme(<Radio selected label="Grátis" />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('não chama onChange quando disabled', () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Radio selected disabled onChange={onChange} label="Grátis" />
    );
    fireEvent.press(screen.getByRole('radio'));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio')).toBeDisabled();
  });
});
