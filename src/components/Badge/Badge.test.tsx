import { renderWithTheme, screen } from '../../test/renderWithTheme';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renderiza o label', () => {
    renderWithTheme(<Badge label="Novo" />);
    expect(screen.getByText('Novo')).toBeTruthy();
  });

  it('usa accessibilityLabel quando fornecido, com fallback no label', () => {
    const { rerender } = renderWithTheme(<Badge label="3" />);
    expect(screen.getByLabelText('3')).toBeTruthy();
    rerender(<Badge label="3" accessibilityLabel="3 notificações" />);
    expect(screen.getByLabelText('3 notificações')).toBeTruthy();
  });

  it('renderiza em tema escuro sem quebrar', () => {
    renderWithTheme(<Badge label="Novo" variant="success" showDot />, {
      isDark: true,
    });
    expect(screen.getByText('Novo')).toBeTruthy();
  });
});
