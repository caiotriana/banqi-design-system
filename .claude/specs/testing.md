# Specs de Testes

Estratégia de testes da biblioteca e um **padrão de cobertura** aplicável a qualquer
componente. Os casos derivam dos **Critérios de aceite (QA)** de cada spec — aqui
viram asserções automatizáveis, descritas por **capacidade** do componente (não por
nome).

> Estado atual: **implementado**. Há um arquivo `*.test.tsx` por componente em
> `src/components/<Nome>/`, mais o helper `src/test/renderWithTheme.tsx`. Rode com
> `yarn test` (atualmente **43 testes, 12 suítes, verde**).

## Setup (já aplicado)

| Item | Detalhe |
| --- | --- |
| `@testing-library/react-native` (dev) | Render + queries por papel/rótulo + `fireEvent`. Traz matchers estendidos (`toBeDisabled`, `toBeChecked`, etc.). Instalado em `^13.3.3`. |
| `react-test-renderer` (dev) | Peer do RNTL; **deve bater exatamente** com a versão do `react` (fixado em `19.2.3`). Divergir causa erro na importação do RNTL. |
| Alinhamento do `jest` a **v29** | `@react-native/jest-preset@0.85.0` é construído para jest 29 (`babel-jest`/`jest-environment-node: ^29.7.0`). O scaffolding vinha com jest 30, o que quebrava o runtime (`clearMocksOnScope is not a function`). `jest` e `@jest/globals` foram baixados para `^29.7.0`. |
| Helper `renderWithTheme` | Todo componente exige `ThemeProvider` acima. Centraliza o wrapper e permite testar claro/escuro via `{ isDark: true }`. |
| (opcional) Storybook test-runner ou Chromatic | Regressão **visual** a partir das stories (`*.stories.tsx`). Ainda não conectado. |

### Helper (`src/test/renderWithTheme.tsx`)

Reexporta tudo do RNTL e injeta o `ThemeProvider`. Importe utilitários (`screen`,
`fireEvent`, etc.) **dele**, não do RNTL cru:

```tsx
export function renderWithTheme(ui, { isDark = false, ...options } = {}) {
  const Wrapper = ({ children }) => (
    <ThemeProvider isDark={isDark}>{children}</ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
}
export * from '@testing-library/react-native';
```

## Camadas de teste

1. **Unitário / comportamento (RNTL)** — a camada principal. Renderiza com tema,
   consulta por papel/rótulo, dispara eventos e verifica callbacks, gating de
   `disabled`, estado de acessibilidade e renderização condicional.
2. **Acessibilidade** — assertar `accessibilityRole`, `accessibilityState` e a
   presença do rótulo (ver tabela em
   [interação-e-elevação](foundations/interacao-e-elevacao.md#5-acessibilidade-baseline)).
   Pode ser parte do mesmo arquivo de teste.
3. **Theming** — para componentes sensíveis a tema, renderizar com `isDark: true` e
   `false` e garantir que não quebram (e, quando viável, que aplicam cores do tema
   correto via estilo achatado).
4. **Visual / snapshot (Storybook)** — regressão de aparência. As stories já cobrem
   variantes/estados; conectar test-runner/Chromatic para detectar regressões de
   pixel. Evitar snapshots de árvore JSON frágeis como rede principal.

### Convenções

- Localização: `src/components/<Nome>/<Nome>.test.tsx` (ou `__tests__/`).
- Sempre renderizar via `renderWithTheme`.
- Preferir **queries acessíveis** (`getByRole`, `getByLabelText`) a `testID`; usar
  `testID` só quando não há âncora semântica.
- Não testar valores de pixel de cor no unitário — isso é papel do Storybook visual.
  No unitário, focar **comportamento e contrato**.
- O padrão abaixo é o **mínimo**; cada componente cobre as capacidades que possui.
  Cobrir variantes/estados extras é bem-vindo.

### Gotchas do RNTL (aprendidos na implementação)

- **`getByRole` em componentes não-interativos:** quando o container tem
  `accessibilityRole` (`text`/`image`/`alert`) **e** envolve um `<Text>`/`<Image>`
  com role implícito, `getByRole('text')` retorna vários nós. Consulte por
  **texto/label** (`getByText`, `getByLabelText`) ou pelo role **único** do container.
- **`fireEvent.press` sobe a árvore até achar o `onPress`.** Se o teste passa o handler
  direto ao componente (`<Componente onPress={fn}>`), o RNTL chama esse prop ao subir,
  **mesmo que o componente não o repasse** internamente quando desabilitado. Por isso,
  para afirmar "disabled não dispara ação" de forma confiável, o componente interativo
  deve marcar o `Pressable` interno como `disabled` — convenção seguida por todos os
  controles interativos da lib.

---

## Padrão de cobertura (por capacidade)

A cobertura é definida pelas **capacidades** do componente, não por nome. Para cada
componente, identifique quais capacidades se aplicam e escreva os casos
correspondentes. Um componente típico combina a **base (A)** com uma ou mais das
demais.

Placeholders usados abaixo: `<role>` = papel de acessibilidade; `<callback>` = handler
de ação (`onPress`/`onChange`/…); `<estado>` = prop booleana de estado
(`checked`/`selected`/`enabled`); `<slot>` = elemento/prop opcional.

### A. Base — todo componente
- **Smoke:** renderiza só com as props obrigatórias, sem lançar.
- **Conteúdo:** o texto recebido por prop (label/title/description) aparece
  (`getByText`).
- **Acessibilidade:** expõe o `<role>` esperado e o rótulo está presente, seguindo o
  fallback documentado (`accessibilityLabel ?? label/title`).
- **Theming:** renderiza em tema claro **e** escuro
  (`renderWithTheme(ui, { isDark: true })`) sem quebrar.

### B. Ação — possui handler de toque (`<callback>`)
- Tocar dispara `<callback>` uma vez quando habilitado.
- **Alternância** (estado booleano): `<callback>` recebe o valor **invertido**
  (`expect(cb).toHaveBeenCalledWith(!valorAtual)`).
- Controlado pelo pai: sem o pai atualizar a prop, o estado não muda sozinho.

### C. Desabilitável — possui `disabled` (ou estado desabilitado)
- Tocar **não** dispara `<callback>`.
- `toBeDisabled()` e/ou `accessibilityState.disabled === true`.
- Pré-requisito: o `Pressable` interno recebe `disabled` (ver gotcha do
  `fireEvent.press`), senão o RNTL não consegue afirmar o bloqueio de forma confiável.

### D. Estado booleano — `<estado>` (`checked`/`selected`/`enabled`)
- `accessibilityState.checked` reflete `<estado>` (`toBeChecked()` quando ativo).

### E. Variantes / tamanhos / estados — possui essas props de união
- Cada valor da união (`variant`/`size`/`state`) **renderiza sem quebrar**.
- Fidelidade de cor/dimensão **não** é unit — fica para o Storybook visual.

### F. Entrada de texto — campo editável
- Digitar dispara `onChangeText` com o texto (`fireEvent.changeText`).
- Estados não-editáveis deixam o campo com `editable === false`.

### G. Slots / elementos opcionais — `<slot>` condicional
- O `<slot>` aparece **somente** quando sua prop é fornecida e **some** quando não
  (`getBy… ` presente vs `queryBy… === null`). Vale para ícones, ponto, botões de
  fechar/limpar, descrição, fileiras opcionais, etc.
- `<slot>` interativo (fechar/limpar/ação) dispara o **próprio** callback ao tocar.

### H. Carregamento / skeleton — possui esses estados
- **Loading:** `accessibilityState.busy === true` (e `disabled === false`, se loading
  ≠ disabled); a ação fica bloqueada.
- **Skeleton:** não renderiza o conteúdo (`queryBy… === null`).

### Matriz capacidade × caso mínimo

| Capacidade | Caso mínimo verificável |
| --- | --- |
| A. Base | smoke · conteúdo · `<role>`+rótulo · claro/escuro |
| B. Ação | dispara `<callback>` ao tocar (valor invertido p/ alternância) |
| C. Desabilitável | `<callback>` **não** dispara · `toBeDisabled()` |
| D. Estado booleano | `accessibilityState.checked` reflete `<estado>` |
| E. Variantes/tamanhos | cada valor da união renderiza sem quebrar |
| F. Entrada de texto | `onChangeText` dispara · `editable` por estado |
| G. Slots opcionais | aparece só com a prop · callback do slot |
| H. Loading/skeleton | `busy`/ação bloqueada · skeleton sem conteúdo |

---

## Exemplo de teste (padrão B + C + D)

`Control` aqui é um placeholder para qualquer controle selecionável (papel
`checkbox`/`radio`/`switch`); troque pelo componente real e seu `<role>`.

```tsx
import { renderWithTheme, screen, fireEvent } from '../../test/renderWithTheme';
import { Control } from './Control';

describe('Control', () => {
  it('dispara o callback com o valor invertido ao tocar (B + D)', () => {
    const onChange = jest.fn();
    renderWithTheme(<Control value={false} onChange={onChange} label="Rótulo" />);
    fireEvent.press(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('não dispara o callback quando disabled (C)', () => {
    const onChange = jest.fn();
    renderWithTheme(<Control value disabled onChange={onChange} label="Rótulo" />);
    fireEvent.press(screen.getByRole('checkbox'));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
```

## Critérios de aceite (da suíte de testes)

- [x] `@testing-library/react-native` adicionado e `renderWithTheme` disponível.
- [x] Cada componente exportado tem um `*.test.tsx` cobrindo as capacidades
      aplicáveis do padrão.
- [x] Testes usam queries acessíveis; `testID` só onde não há âncora semântica.
- [x] `yarn test` passa localmente (43 testes, 12 suítes). Confirmar no CI
      (`.github/workflows/ci.yml`).
- [ ] Regressão visual conectada às stories (test-runner/Chromatic) — opcional, mas
      recomendado para mudanças de tokens/tema.
