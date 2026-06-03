# Checkbox

> Caixa de seleção (marcada/desmarcada) com rótulo opcional.

- **Import:** `import { Checkbox } from 'banqi-design-system'`
- **Fonte:** `src/components/Checkbox/Checkbox.tsx`
- **Categoria:** Formulário
- **Base:** `Pressable` + `Animated.View`

## Visão geral

Seleção booleana independente (use vários para multiescolha). Caixa 24×24 com
cantos arredondados; ao marcar, preenche com cor de acento e mostra um "check"
desenhado. Usa elevação física + animação de escala + overlays
(ver [interação-e-elevação](../foundations/interacao-e-elevacao.md)).

## Anatomia

```
[✔]  Rótulo opcional
└box 24┘  gap x2
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | Estado marcado. |
| `onChange` | `(checked: boolean) => void` | — | Recebe o **novo** valor ao tocar. |
| `label` | `string` | — | Texto à direita (`numberOfLines={1}`). |
| `disabled` | `boolean` | `false` | Desativa interação. |
| `accessibilityLabel` | `string` | — | Fallback para `label`. |
| `testID` | `string` | — | Identificador para testes. |

## Dimensões

| Elemento | Valor |
| --- | --- |
| Caixa | `sizing.x6` (24) |
| Raio da caixa | `radii.x2` (8) |
| Ícone de check | `sizing.x4` (16) |
| Gap caixa↔rótulo | `sizing.x2` (8) |
| Rótulo | `DM Sans` peso 400, `fontSize.x3_5` (14) / `lineHeight.x5` (20) |

## Estados

| Estado | Fundo da caixa | Borda | Check | Overlay |
| --- | --- | --- | --- | --- |
| Desmarcado (repouso) | `surface.default` | `stroke.default` (1) | — | — |
| Marcado (repouso) | `surface.accent.primary` | nenhuma (0) | `content.common.onColor` | — |
| Hover (web) | marcado→accent / desmarcado→default | `stroke.accent.primary` (1) | accent/onColor | `surface.common.hover` |
| Pressionado | marcado→accent / desmarcado→default | transparente | accent/onColor | `surface.common.pressed` |
| `disabled` (desmarcado) | `surface.default` | `stroke.common.disabled` | — | — |
| `disabled` (marcado) | `surface.common.disabled` | `surface.common.disabled` | — | — |

Rótulo desabilitado: `content.common.disabled`. Caixa só projeta sombra quando
**não** desabilitada.

## Comportamento e interação

- Tocar chama `onChange(!checked)` (não muda sozinho — é controlado pelo pai).
- `onPressIn` anima a escala para 0.95; `onPressOut` volta a 1.0.
- Hover/press desligados quando `disabled`.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo/borda/check/overlay | ver tabela de Estados |
| Sombra | `theme.elevation.default`, `shadow.axis.*`, `shadow.blur.none` |
| Raio | `radii.x2` |
| Rótulo | `fontSize.x3_5`, `lineHeight.x5`, peso 400 |

## Acessibilidade

- `accessibilityRole="checkbox"`.
- `accessibilityState={{ checked, disabled }}`.
- `accessibilityLabel={accessibilityLabel ?? label}`.

## Exemplo de uso

```tsx
const [agree, setAgree] = useState(false);
<Checkbox checked={agree} onChange={setAgree} label="Li e aceito os termos" />
<Checkbox checked disabled label="Opção fixa" />
```

## Critérios de aceite (QA)

- [ ] Caixa 24×24, raio 8; check visível apenas quando `checked`.
- [ ] Marcado usa fundo de acento + check on-color; desmarcado tem borda `stroke.default`.
- [ ] Tocar dispara `onChange` com o valor invertido; sem pai controlando, não muda.
- [ ] Hover/press mostram overlays distintos; press encolhe a escala.
- [ ] `disabled` (marcado e desmarcado) usa cores `*.disabled` e não eleva.
- [ ] Anunciado como checkbox com `checked`/`disabled` corretos.
