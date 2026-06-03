import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { Callout } from './Callout';

describe('Callout', () => {
  it('renderiza título e descrição e é anunciado como alert', () => {
    renderWithTheme(<Callout title="Atenção" description="Algo aconteceu." />);
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText('Atenção')).toBeTruthy();
    expect(screen.getByText('Algo aconteceu.')).toBeTruthy();
  });

  it('mostra a ação e chama onActionPress', () => {
    const onActionPress = jest.fn();
    renderWithTheme(
      <Callout
        description="Falha no envio."
        actionLabel="Tentar novamente"
        onActionPress={onActionPress}
      />
    );
    fireEvent.press(screen.getByRole('link', { name: 'Tentar novamente' }));
    expect(onActionPress).toHaveBeenCalledTimes(1);
  });

  it('mostra o botão fechar apenas quando onClose é fornecido', () => {
    const onClose = jest.fn();
    const { rerender } = renderWithTheme(<Callout description="Oi" />);
    expect(screen.queryByLabelText('Fechar')).toBeNull();
    rerender(<Callout description="Oi" onClose={onClose} />);
    fireEvent.press(screen.getByLabelText('Fechar'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
