# Button

> Botão de ação com rótulo, 6 variantes de ênfase, dois tamanhos, ícones opcionais
> e estados de carregamento/desabilitado.

- **Import:** `import { Button } from 'banqi-design-system'`
- **Fonte:** `src/components/Button/Button.tsx`
- **Categoria:** Ação
- **Base:** `Pressable` (estende `PressableProps`)

## Visão geral

Ação primária de um fluxo ou tela. O rótulo é sempre obrigatório e textual. Ícones
opcionais reforçam a ação (à esquerda e/ou à direita). Usa a elevação física
compartilhada (ver [interação-e-elevação](../foundations/interacao-e-elevacao.md)).

## Anatomia

```
┌─────────────────────────────────┐
│  [leadingIcon]  Label  [trailing]│   ← conteúdo centralizado, gap x2
└─────────────────────────────────┘
   wrapper com sombra · Pressable arredondado · overlay de press
```

Em `loading`, o conteúdo é substituído por um `ActivityIndicator` centralizado.

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `label` | `string` | — (obrigatório) | Texto do botão. `numberOfLines={1}`. |
| `variant` | `ButtonVariant` | `'primary'` | Ênfase visual (ver Variantes). |
| `size` | `ButtonSize` | `'default'` | `'default'` ou `'compact'`. |
| `state` | `ButtonState` | `'enabled'` | `'enabled'` \| `'disabled'` \| `'loading'`. |
| `leadingIcon` | `React.ReactNode` | — | Ícone antes do rótulo (slot 20×20, compact 16×16). |
| `trailingIcon` | `React.ReactNode` | — | Ícone após o rótulo. |
| `onPress` | `PressableProps['onPress']` | — | Disparado só quando interativo. |
| _…rest_ | `PressableProps` | — | Exceto `disabled`, `style`, `children`. |

```ts
type ButtonVariant = 'primary' | 'onColor' | 'critical' | 'secondary' | 'ghost' | 'criticalGhost';
type ButtonSize = 'default' | 'compact';
type ButtonState = 'enabled' | 'disabled' | 'loading';
```

## Variantes

Mapa de cores por variante (estado interativo). Cor de loader = cor do rótulo.

| Variante | `background` | `label` (texto) | Contorno |
| --- | --- | --- | --- |
| `primary` | `surface.accent.primaryPersistent` | `content.common.onColor` | — |
| `onColor` | `surface.common.onColor` | `content.accent.primaryPersistent` | — |
| `critical` | `surface.feedback.critical` | `content.common.onColor` | — |
| `secondary` | `surface.accent.primarySubtleOnSubtle` | `content.accent.primary` | `stroke.default`, `border.quarter` |
| `ghost` | `surface.common.ghost` | `content.accent.primary` | — |
| `criticalGhost` | `surface.common.ghost` | `content.feedback.critical` | — |

`ghost` e `criticalGhost` **não** têm elevação (fundo transparente).

## Tamanhos

| | Altura | Padding H | Padding V | Raio | Slot de ícone |
| --- | --- | --- | --- | --- | --- |
| `default` | `sizing.x12` (48) | `sizing.x4` (16) | `sizing.x3` (12) | `radii.x4` (16) | 20×20 |
| `compact` | (conteúdo) | `sizing.x3` (12) | `sizing.x2` (8) | `radii.x3` (12) | 16×16 |

Tipografia do rótulo: `DM Sans` 600, `fontSize.x3_5` (14) / `lineHeight.x4` (16),
`includeFontPadding: false`.

## Estados

| Estado | Comportamento |
| --- | --- |
| `enabled` | Interativo. Elevação física (exceto ghost). |
| `disabled` | Sem `onPress`/press/elevação. Fundo `surface.common.disabled`, texto `content.common.disabled`. |
| `loading` | Sem interação. `ActivityIndicator` (cor = rótulo da variante) no lugar do conteúdo. |

Estado pressionado (interativo): overlay `surface.common.pressed` + inversão da
sombra (offset de `+1.5` → `-1.5`; elevação Android `2` → `0`).

## Comportamento e interação

- `onPress`, `onPressIn`, `onPressOut` só são ligados quando interativo
  (`!disabled && !loading`).
- Elevação: `hasElevation = interativo && !ghost`. Ver padrão compartilhado.
- O wrapper externo carrega a sombra; o `Pressable` interno faz `overflow: hidden`
  para recortar o overlay no raio correto.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Sombra (cor) | `theme.elevation.default` |
| Sombra (offset/elevação) | `shadow.axis.quarter` / `-shadow.axis.quarter`, `shadow.blur.none` |
| Overlay press | `theme.surface.common.pressed` |
| Fundo/label | ver tabela de Variantes |
| Raio | `radii.x4` (default) · `radii.x3` (compact) |
| Tipografia | `typography.fontFamily`, `fontSize.x3_5`, `lineHeight.x4`, peso 600 |
| Gap conteúdo | `sizing.x2` |

## Acessibilidade

- `accessibilityRole="button"`.
- `accessibilityState={{ disabled, busy: loading }}`.
- `accessibilityLabel={label}`.

## Exemplo de uso

```tsx
<Button label="Continuar" onPress={handleNext} />
<Button label="Excluir conta" variant="critical" onPress={confirmDelete} />
<Button label="Salvando…" state="loading" />
<Button label="Voltar" variant="ghost" size="compact" leadingIcon={<ChevronLeft />} />
```

## Critérios de aceite (QA)

- [ ] As 6 variantes batem com a tabela de cores, em tema claro e escuro.
- [ ] `default` tem 48 px de altura e raio 16; `compact` usa paddings e raio menores.
- [ ] Rótulo nunca quebra em duas linhas (truncamento em 1 linha).
- [ ] `loading` mostra spinner na cor do rótulo e ignora toques.
- [ ] `disabled` usa cores `*.disabled`, não eleva e não dispara `onPress`.
- [ ] Pressionar mostra overlay + inverte a sombra; ghost/criticalGhost não elevam.
- [ ] Ícones leading/trailing aparecem nos slots corretos (20/16 px) com gap x2.
- [ ] Anunciado como botão, refletindo `disabled`/`busy`.
