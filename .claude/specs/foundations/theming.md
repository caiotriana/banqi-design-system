# Fundação — Theming (`ThemeProvider` / `useTheme`)

Mecanismo de tema da biblioteca. Todo componente lê cores do tema ativo; o tema é
fornecido por um Context React no topo da árvore.

- **Fonte:** `src/components/ThemeProvider/ThemeProvider.tsx`
- **Exports:** `ThemeProvider`, `useTheme`, `type ThemeProviderProps`

## `ThemeProvider`

Provê o tema para a subárvore. Deve envolver a aplicação (ou a porção que usa
componentes da biblioteca).

### Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — (obrigatório) | Subárvore que recebe o tema. |
| `isDark` | `boolean` | `false` | `true` → tema escuro (`dark`); `false` → tema claro (`light`). |

O provider expõe no contexto:

```ts
type ThemeContextValue = {
  theme: ColorTheme; // objeto de cores resolvido (light ou dark)
  isDark: boolean;   // espelha a prop, para ramificações de layout
};
```

## `useTheme()`

Hook para consumir o tema dentro de um componente.

```tsx
const { theme, isDark } = useTheme();
// theme.surface.accent.primaryPersistent, theme.content.default, ...
```

### Comportamento sem provider

`useTheme()` **não lança** se não houver provider acima. O valor padrão do contexto é
`{ theme: light, isDark: false }`. Ou seja, fora de um `ThemeProvider` os componentes
renderizam no **tema claro**. Isso é intencional, mas em produção deve sempre existir
um provider explícito.

## Exemplo

```tsx
import { ThemeProvider, Button } from 'banqi-design-system';

export function App() {
  return (
    <ThemeProvider isDark={false}>
      <Button label="Continuar" onPress={handlePress} />
    </ThemeProvider>
  );
}
```

Alternância de tema é feita controlando a prop `isDark` (ex.: a partir do esquema do
sistema ou de uma preferência do usuário) e re-renderizando o provider.

## Critérios de aceite (QA)

- [ ] Componentes dentro de `<ThemeProvider isDark>` usam cores do tema escuro;
      sem `isDark` (ou `isDark={false}`), usam o tema claro.
- [ ] Trocar `isDark` em runtime atualiza **todas** as cores dos componentes
      descendentes, sem remount manual.
- [ ] Um componente renderizado fora de qualquer provider aparece no tema claro,
      sem erro de runtime.
- [ ] Nenhum componente referencia `light`/`dark` diretamente; todos leem via
      `useTheme()`.
