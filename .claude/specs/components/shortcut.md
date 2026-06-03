# Shortcut

> Cartão de atalho tocável, com título, descrição e slots para ícone/elemento
> (topo) — usado em grades de acesso rápido.

- **Import:** `import { Shortcut } from 'banqi-design-system'`
- **Fonte:** `src/components/Shortcut/Shortcut.tsx`
- **Categoria:** Navegação
- **Base:** `Animated.View` + `Pressable`

## Visão geral

Cartão compacto que leva a uma ação/destino. Tem uma fileira superior opcional
(slot `leading` à esquerda + slot `trailing` à direita) e, abaixo, título e
descrição. Largura fixa (152 px). Usa elevação física + escala + overlays
(ver [interação-e-elevação](../foundations/interacao-e-elevacao.md)).

## Anatomia

```
┌────────────────┐
│ [leading]  [tr]│  ← fileira superior (aparece se houver leading ou trailing)
│                │
│ Título         │  ← até 2 linhas
│ Descrição      │  ← opcional, até 2 linhas
└────────────────┘
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `title` | `string` | — (obrigatório) | Título (`numberOfLines={2}`). |
| `description` | `string` | — | Texto secundário (`numberOfLines={2}`). |
| `leading` | `React.ReactNode` | — | Elemento à esquerda da fileira superior (ex.: ícone/avatar). |
| `trailing` | `React.ReactNode` | — | Elemento à direita da fileira superior (ex.: badge). |
| `onPress` | `() => void` | — | Ação ao tocar. |
| `accessibilityLabel` | `string` | — | Fallback para `title`. |
| `testID` | `string` | — | Identificador para testes. |

A fileira superior só é renderizada se `leading` **ou** `trailing` existir.

## Dimensões

| Elemento | Valor |
| --- | --- |
| Largura interna | `sizing.x28` (112) → largura do cartão 152 (com padding) |
| Padding | `sizing.x5` (20) |
| Raio | `radii.x6` (24) |
| Gap (fileira↔texto) | `sizing.x4` (16) |
| Gap superior (leading↔trailing) | `sizing.x2` (8) |
| Gap (título↔descrição) | `sizing.x1` (4) |
| Título | `DM Sans` 600, `fontSize.x3_5` (14) / `lineHeight.x4` (16) |
| Descrição | `DM Sans` 400, `fontSize.x3_5` (14) / `lineHeight.x4` (16) |

## Estados

| Estado | Fundo | Borda | Overlay |
| --- | --- | --- | --- |
| Repouso | `surface.accent.primarySuperSubtle` | `stroke.default` (1) | — |
| Hover (web) | `surface.accent.primarySuperSubtle` | `stroke.default` (1) | `surface.common.hover` |
| Pressionado | `surface.accent.primarySuperSubtle` | nenhuma | `surface.common.pressed` |

Título: `content.default`. Descrição: `content.subtle`. O cartão **sempre** projeta
sombra (é sempre interativo; não há estado disabled).

## Comportamento e interação

- `onPress` ao tocar. Sempre interativo (sem prop `disabled`).
- `onPressIn` anima a escala para 0.97; `onPressOut` volta a 1.0.
- Hover/press aplicam overlay e ajustam a sombra (padrão de elevação física).
- Título e descrição truncam em 2 linhas cada.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo | `surface.accent.primarySuperSubtle` |
| Borda | `stroke.default` (some no press) |
| Overlay | `surface.common.hover` / `.pressed` |
| Sombra | `theme.elevation.default`, `shadow.axis.*`, `shadow.blur.none` |
| Título/descrição | `content.default` / `content.subtle` |
| Raio/padding | `radii.x6` / `sizing.x5` |

## Acessibilidade

- `accessibilityRole="button"`, nó `accessible`.
- `accessibilityLabel={accessibilityLabel ?? title}`.

## Exemplo de uso

```tsx
<Shortcut
  title="Pagar conta"
  description="Boletos e contas"
  leading={<Avatar variant="icon" icon={<BarcodeIcon />} size="small" />}
  onPress={goToPayBills}
/>
<Shortcut title="Pix" trailing={<Badge label="Novo" variant="highlight" />} onPress={goToPix} />
```

## Critérios de aceite (QA)

- [ ] Largura fixa (152) e raio 24; título e descrição truncam em 2 linhas.
- [ ] A fileira superior aparece apenas quando há `leading` e/ou `trailing`;
      `trailing` fica alinhado à direita.
- [ ] Repouso/hover têm borda `stroke.default`; ao pressionar a borda some e entra
      overlay de press.
- [ ] Sempre projeta sombra; press encolhe a escala (0.97) e inverte a sombra.
- [ ] Cores corretas em tema claro e escuro.
- [ ] Anunciado como botão com rótulo = `title` (ou `accessibilityLabel`).
