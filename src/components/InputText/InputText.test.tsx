import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { InputText } from './InputText';

describe('InputText', () => {
  it('renderiza o label e dispara onChangeText ao digitar', () => {
    const onChangeText = jest.fn();
    renderWithTheme(
      <InputText
        label="E-mail"
        placeholder="Digite"
        onChangeText={onChangeText}
      />
    );
    expect(screen.getByText('E-mail')).toBeTruthy();
    fireEvent.changeText(screen.getByPlaceholderText('Digite'), 'a@b.com');
    expect(onChangeText).toHaveBeenCalledWith('a@b.com');
  });

  it('não é editável quando disabled', () => {
    renderWithTheme(<InputText placeholder="Digite" state="disabled" />);
    expect(screen.getByPlaceholderText('Digite').props.editable).toBe(false);
  });

  it('não é editável quando readOnly', () => {
    renderWithTheme(<InputText placeholder="Digite" state="readOnly" />);
    expect(screen.getByPlaceholderText('Digite').props.editable).toBe(false);
  });

  it('mostra o botão limpar após digitar e limpa ao tocar', () => {
    const onChangeText = jest.fn();
    renderWithTheme(
      <InputText placeholder="Digite" onChangeText={onChangeText} />
    );
    expect(screen.queryByLabelText('Limpar campo')).toBeNull();
    fireEvent.changeText(screen.getByPlaceholderText('Digite'), 'abc');
    const clear = screen.getByLabelText('Limpar campo');
    fireEvent.press(clear);
    expect(onChangeText).toHaveBeenLastCalledWith('');
  });

  it('renderiza a mensagem de apoio nos estados de feedback', () => {
    renderWithTheme(
      <InputText
        placeholder="Digite"
        state="error"
        hintMessage="CPF inválido"
      />
    );
    expect(screen.getByText('CPF inválido')).toBeTruthy();
  });
});
