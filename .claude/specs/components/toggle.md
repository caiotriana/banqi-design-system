# Toggle

> Interruptor on/off (switch) com knob animado e rótulo opcional.

- **Import:** `import { Toggle } from 'banqi-design-system'`
- **Fonte:** `src/components/Toggle/Toggle.tsx`
- **Categoria:** Formulário
- **Base:** `Pressable` + `Animated.View`

## Visão geral

Liga/desliga uma configuração com efeito imediato. Trilho retangular arredondado com
um knob que desliza entre as extremidades; a transição é animada por spring. Usa
elevação física + escala + overlays
(ver [interação-e-elevação](../foundations/interacao-e-elevacao.md)).

## Anatomia

```
┌──────────┐
│ ░░░░  ▢   │  Rótulo opcional      ← trilho 40×24, knob 16×16
└──────────┘
   gap x2 até o rótulo
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `enabled` | `boolean` | `false` | Estado ligado (on). |
| `onChange` | `(enabled: boolean) => void` | — | Recebe o **novo** valor ao tocar. |
| `label` | `string` | — | Texto à direita (`numberOfLines={1}`). |
| `disabled` | `boolean` | `false` | Desativa interação. |
| `accessibilityLabel` | `string` | — | Fallback para `label`. |
| `testID` | `string` | — | Identificador para testes. |

## Dimensões

| Elemento | Valor |
| --- | --- |
| Trilho | 40 × `sizing.x6` (24), raio `radii.x2` (8) |
| Knob | `sizing.x4` (16), raio `radii.x1` (4) |
| Padding interno | `sizing.x1` (4) |
| Deslocamento do knob | 16 px (`off`→`on`) |
| Gap trilho↔rótulo | `sizing.x2` (8) |
| Rótulo | `DM Sans` peso 400, `fontSize.x3_5` (14) / `lineHeight.x5` (20) |

## Estados

| Estado | Trilho | Borda | Knob |
| --- | --- | --- | --- |
| On (repouso) | `surface.accent.primary` | nenhuma | `content.common.onColor`, opacidade `intense` |
| Off (repouso) | `surface.default` | `stroke.default` (1) | `content.accent.primary`, opacidade `intense` |
| Hover / Press | on→accent / off→default | on→nenhuma / off→`stroke.accent.primary` | igual ao repouso + overlay `hover`/`pressed` |
| `disabled` (on) | `surface.common.disabled` | nenhuma | `content.common.disabled`, opacidade `solid` |
| `disabled` (off) | `surface.default` | `stroke.common.disabled` (1) | `content.common.disabled`, opacidade `solid` |

Rótulo desabilitado: `content.common.disabled`. Sombra só quando não desabilitado.
Knob usa `opacity.intense` (0.64) quando interativo.

## Comportamento e interação

- Tocar chama `onChange(!enabled)`; o estado é controlado pelo pai.
- O knob desliza por spring (`speed: 20`, `bounciness: 4`) ao mudar `enabled`.
- `onPressIn` → escala 0.95; `onPressOut` → 1.0. Hover/press desligados em `disabled`.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Trilho/borda/knob/overlay | ver tabela de Estados |
| Opacidade do knob | `opacity.intense` (interativo) / `opacity.solid` (disabled) |
| Sombra | `theme.elevation.default`, `shadow.axis.*`, `shadow.blur.none` |
| Raios | trilho `radii.x2`, knob `radii.x1` |
| Rótulo | `fontSize.x3_5`, `lineHeight.x5`, peso 400 |

## Acessibilidade

- `accessibilityRole="switch"`.
- `accessibilityState={{ checked: enabled, disabled }}`.
- `accessibilityLabel={accessibilityLabel ?? label}`.

## Exemplo de uso

```tsx
const [notifications, setNotifications] = useState(true);
<Toggle enabled={notifications} onChange={setNotifications} label="Notificações" />
<Toggle enabled={false} disabled label="Recurso indisponível" />
```

## Critérios de aceite (QA)

- [ ] Trilho 40×24, knob 16×16; o knob desliza com animação ao alternar.
- [ ] On usa trilho de acento e knob on-color; Off usa fundo claro com borda.
- [ ] Tocar dispara `onChange` com o valor invertido (controlado pelo pai).
- [ ] Hover/press mostram overlays; press encolhe a escala.
- [ ] `disabled` (on e off) usa cores `*.disabled`, knob sólido, sem sombra.
- [ ] Anunciado como switch com `checked`/`disabled` corretos.
