# IconButton

> Botão quadrado somente ícone, com 7 variantes de ênfase e dois tamanhos.

- **Import:** `import { IconButton } from 'banqi-design-system'`
- **Fonte:** `src/components/IconButton/IconButton.tsx`
- **Categoria:** Ação
- **Base:** `Animated.View` + `Pressable`

## Visão geral

Ação compacta representada apenas por um ícone (sem rótulo visível). Como não há
texto, `accessibilityLabel` é **obrigatório**. Usa elevação física + animação de
escala + overlays de hover/press (ver
[interação-e-elevação](../foundations/interacao-e-elevacao.md)).

## Anatomia

```
┌─────────┐
│   ◇     │   ← ícone centralizado em slot 20×20
└─────────┘
  quadrado arredondado · sombra · overlay hover/press
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `icon` | `React.ReactNode` | — (obrigatório) | Ícone renderizado no slot 20×20. |
| `accessibilityLabel` | `string` | — (**obrigatório**) | Rótulo para leitor de tela. |
| `variant` | `IconButtonVariant` | `'primary'` | Ênfase visual (ver Variantes). |
| `size` | `IconButtonSize` | `'medium'` | `'medium'` (44) ou `'small'` (36). |
| `disabled` | `boolean` | `false` | Desativa interação e elevação. |
| `onPress` | `() => void` | — | Disparado quando interativo. |
| `testID` | `string` | — | Identificador para testes. |

```ts
type IconButtonVariant =
  | 'primary' | 'secondary' | 'ghost' | 'ghost-oncolor'
  | 'oncolor' | 'critical' | 'ghost-critical';
type IconButtonSize = 'medium' | 'small';
```

## Variantes

| Variante | `backgroundColor` | `iconColor` | Contorno | Eleva? |
| --- | --- | --- | --- | --- |
| `primary` | `surface.accent.primaryPersistent` | `content.common.onColor` | — | sim |
| `secondary` | `surface.accent.primarySubtleOnSubtle` | `content.accent.primaryPersistent` | `stroke.default` (1) | sim |
| `ghost` | `surface.common.ghost` | `content.accent.primaryPersistent` | — | **não** |
| `ghost-oncolor` | `surface.common.ghost` | `content.common.onColor` | — | **não** |
| `oncolor` | `surface.common.onColor` | `content.accent.primaryPersistent` | — | sim |
| `critical` | `surface.feedback.critical` | `content.common.onColor` | — | sim |
| `ghost-critical` | `surface.common.ghost` | `content.feedback.critical` | — | **não** |

As 3 variantes `ghost*` têm fundo transparente e **não** projetam sombra.

## Tamanhos

| | Dimensão | Raio | Slot de ícone |
| --- | --- | --- | --- |
| `medium` | `sizing.x5 + sizing.x3*2` = **44** | `radii.x4` (16) | 20×20 |
| `small` | `sizing.x5 + sizing.x2*2` = **36** | `radii.x3` (12) | 20×20 |

## Estados

| Estado | Visual |
| --- | --- |
| Repouso | Cores da variante; sombra (exceto ghost). |
| Hover (web) | Overlay `surface.common.hover`; sombra mais elevada. |
| Pressionado | Overlay `surface.common.pressed`; escala 0.95; sombra invertida. |
| `disabled` | Fundo `surface.common.disabled`, ícone `content.common.disabled`, sem sombra/handlers. |

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo / ícone / contorno | ver tabela de Variantes |
| Sombra | `theme.elevation.default`, `shadow.axis.*`, `shadow.blur.none` |
| Overlay hover/press | `theme.surface.common.hover` / `.pressed` |
| Dimensão/raio | ver tabela de Tamanhos |
| Escala press | spring → 0.95 / 1.0 |

## Acessibilidade

- `accessibilityRole="button"`, `accessibilityState={{ disabled }}`.
- `accessibilityLabel` **obrigatório** (não há texto visível).

## Exemplo de uso

```tsx
<IconButton icon={<Close />} accessibilityLabel="Fechar" onPress={onClose} />
<IconButton icon={<Heart />} variant="ghost" size="small" accessibilityLabel="Favoritar" />
<IconButton icon={<Trash />} variant="critical" accessibilityLabel="Excluir" disabled />
```

## Critérios de aceite (QA)

- [ ] As 7 variantes batem com a tabela de cores, em tema claro e escuro.
- [ ] `medium` = 44×44 (raio 16); `small` = 36×36 (raio 12); ícone em slot 20×20.
- [ ] Variantes `ghost*` não projetam sombra; demais elevam no repouso.
- [ ] Hover (web) e press mostram overlays distintos; press encolhe a escala.
- [ ] `disabled` aplica cores `*.disabled`, não eleva e ignora toques.
- [ ] Renderizar sem `accessibilityLabel` é considerado defeito (texto obrigatório
      para leitor de tela).
