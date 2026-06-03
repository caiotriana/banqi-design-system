import { renderWithTheme, screen } from '../../test/renderWithTheme';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('mostra duas iniciais maiúsculas a partir de initials', () => {
    renderWithTheme(<Avatar variant="initials" initials="caio" />);
    expect(screen.getByText('CA')).toBeTruthy();
  });

  it('é anunciado como imagem com rótulo', () => {
    renderWithTheme(
      <Avatar
        variant="initials"
        initials="CT"
        accessibilityLabel="Caio Triana"
      />
    );
    expect(screen.getByLabelText('Caio Triana')).toBeTruthy();
  });
});
