# Radio

> Botão de opção (seleção única dentro de um grupo) com rótulo opcional.

- **Import:** `import { Radio } from 'banqi-design-system'`
- **Fonte:** `src/components/Radio/Radio.tsx`
- **Categoria:** Formulário
- **Base:** `Pressable` + `Animated.View`

## Visão geral

Seleção única. Diferente do `Checkbox`, é circular e, quando selecionado, mantém
fundo claro com um ponto central de acento (não inverte para fundo cheio). O
agrupamento (garantir uma só opção ativa) é responsabilidade do componente pai.
Usa elevação física + escala + overlays
(ver [interação-e-elevação](../foundations/interacao-e-elevacao.md)).

## Anatomia

```
( • )  Rótulo opcional
└box 24┘  gap x2  (círculo, ponto 16 quando selecionado)
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `selected` | `boolean` | `false` | Estado selecionado. |
| `onChange` | `(selected: boolean) => void` | — | Recebe o **novo** valor ao tocar. |
| `label` | `string` | — | Texto à direita (`numberOfLines={1}`). |
| `disabled` | `boolean` | `false` | Desativa interação. |
| `accessibilityLabel` | `string` | — | Fallback para `label`. |
| `testID` | `string` | — | Identificador para testes. |

## Dimensões

| Elemento | Valor |
| --- | --- |
| Caixa (círculo) | `sizing.x6` (24), raio `radii.full` |
| Ponto interno | `sizing.x4` (16), raio `radii.full` |
| Gap caixa↔rótulo | `sizing.x2` (8) |
| Rótulo | `DM Sans` peso 400, `fontSize.x3_5` (14) / `lineHeight.x5` (20) |

## Estados

| Estado | Fundo | Borda | Ponto | Overlay |
| --- | --- | --- | --- | --- |
| Não selecionado (repouso) | `surface.default` | `stroke.default` (1) | — | — |
| Selecionado (repouso) | `surface.accent.primarySubtle` | `stroke.accent.primary` (1) | `content.accent.primaryPersistent` | — |
| Hover (web) | selec.→primarySubtle / não→default | selec.→accent.primary / não→default | `content.accent.primary` | `surface.common.hover` |
| Pressionado | igual a hover | igual a hover | `content.accent.primary` | `surface.common.pressed` |
| `disabled` | `surface.default` | `stroke.common.disabled` (1) | — | — |

Rótulo desabilitado: `content.common.disabled`. Sombra só quando não desabilitado.

## Comportamento e interação

- Tocar chama `onChange(!selected)`; a exclusividade do grupo é controlada pelo pai.
- `onPressIn` → escala 0.95; `onPressOut` → 1.0.
- Hover/press desligados quando `disabled`.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo/borda/ponto/overlay | ver tabela de Estados |
| Sombra | `theme.elevation.default`, `shadow.axis.*`, `shadow.blur.none` |
| Raio | `radii.full` |
| Rótulo | `fontSize.x3_5`, `lineHeight.x5`, peso 400 |

## Acessibilidade

- `accessibilityRole="radio"`.
- `accessibilityState={{ checked: selected, disabled }}`.
- `accessibilityLabel={accessibilityLabel ?? label}`.

## Exemplo de uso

```tsx
const [plan, setPlan] = useState<'free' | 'pro'>('free');
<Radio selected={plan === 'free'} onChange={() => setPlan('free')} label="Grátis" />
<Radio selected={plan === 'pro'}  onChange={() => setPlan('pro')}  label="Pro" />
```

## Critérios de aceite (QA)

- [ ] Caixa circular 24×24; ponto central (16) apenas quando `selected`.
- [ ] Selecionado mantém fundo claro (`primarySubtle`) com borda de acento — não
      enche de cor como o checkbox.
- [ ] Tocar dispara `onChange`; pai garante seleção única no grupo.
- [ ] Hover/press mostram overlays; press encolhe a escala.
- [ ] `disabled` usa `stroke.common.disabled` e não eleva.
- [ ] Anunciado como radio com `checked`/`disabled` corretos.
