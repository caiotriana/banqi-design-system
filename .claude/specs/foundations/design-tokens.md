# Fundação — Design Tokens

Todos os valores visuais dos componentes vêm de tokens, importados de
`banqi-tokens/rn`. Os arquivos são **gerados** a partir de `tokens/export.json` no
pacote `banqi-tokens` (não editar à mão). Esta spec documenta as escalas que os
componentes consomem.

> Regra: nenhum componente deve conter valores literais de cor, raio, espaçamento,
> tamanho de fonte ou sombra. Se um valor não existe como token, o token é que deve
> ser criado.

## Importação

```ts
import {
  typography, sizing, radii, border, opacity, shadow,
  // semânticos:
  borderRadius, spacing, iconSize,
  // tema:
  light, dark, type ColorTheme,
} from 'banqi-tokens/rn';
```

Tokens **primitivos/escala** (`typography`, `sizing`, `radii`, `border`, `opacity`,
`shadow`) são neutros a tema. Tokens de **cor** vêm sempre do objeto `ColorTheme`
ativo (`light`/`dark`), nunca diretamente da paleta.

---

## Tipografia

- **Família:** `DM Sans` (fontes em `assets/DMSans-*.ttf`).
- **Regra fixa:** `includeFontPadding: false` em todo texto.

### Escala `fontSize` (px)

| token | px | | token | px |
| --- | --- | --- | --- | --- |
| `x1` | 4 | | `x6` | 24 |
| `x2` | 8 | | `x7` | 28 |
| `x3` | 12 | | `x8` | 32 |
| `x3_5` | 14 | | `x9` | 36 |
| `x4` | 16 | | `x10` | 40 |
| `x5` | 20 | | `x11`…`x18` | 44…72 |

### `lineHeight` (px)
`x3`=12, `x3_5`=14, `x4`=16, `x5`=20, `x6`=24, `x8`=32, `x10`=40, `x12`=48, `x14`=56, `x16`=64, `x18`=72, `x20`=80.

### `fontWeight`
`300`–`900`. Convenção da biblioteca: **600** para rótulos de ação/título; **400**
para rótulos de controles de formulário e corpo de texto.

### `letterSpacing`
`0`=0, `100`=0.1, `200`=0.2, `400`=0.4.

### Estilos semânticos de texto
Composições prontas (família + tamanho + peso + altura + tracking):
`display.large`, `heading.{large,medium,small}`, `subheading.medium`,
`paragraph.medium`, `caption.medium`, `label.{xlarge,large,medium,small,xsmall}`.

---

## Espaçamento e tamanho — `sizing` (px)

Base de 4 px. Usado para dimensões, padding, gap.

| token | px | | token | px |
| --- | --- | --- | --- | --- |
| `zero` | 0 | | `x6` | 24 |
| `half` | 2 | | `x8` | 32 |
| `x1` | 4 | | `x12` | 48 |
| `x2` | 8 | | `x16` | 64 |
| `x3` | 12 | | `x20` | 80 |
| `x4` | 16 | | `x24`…`x40` | 96…160 |
| `x5` | 20 | | | |

Aliases semânticos em `spacing.gap`, `spacing.padding`, `spacing.vertical`,
`spacing.horizontal` mapeiam para a mesma escala (ex.: `spacing.padding.large` = `sizing.x5`).

---

## Raio de canto — `radii` (px)

| token | px | | token | px |
| --- | --- | --- | --- | --- |
| `none` | 0 | | `x3` | 12 |
| `half` | 2 | | `x4` | 16 |
| `x1` | 4 | | `x5` | 20 |
| `x2` | 8 | | `x6` | 24 |
| | | | `x8` | 32 |
| `full` | 999 | | | |

Aliases semânticos: `borderRadius.{sharp,nano,xsmall,small,medium,large,xlarge,jumbo,pill}`.

---

## Borda — `border` (px)

`none`=0, `quarter`=1, `half`=2, `x1`=4, `x2`=8.
Espessura padrão de contorno dos componentes: `border.quarter` (1 px).

---

## Opacidade — `opacity`

Numéricos `0`–`1000` (0 → 1.0) e semânticos: `solid`=1, `heavy`=0.88,
`intense`=0.64, `moderate`=0.32, `soft`=0.24, `subtle`=0.12, `transparent`=0.
O knob de `Toggle`, por exemplo, usa `opacity.intense`.

---

## Sombra — `shadow`

A biblioteca usa um padrão de **sombra dura** (sem blur) para simular profundidade
física. Ver [interacao-e-elevacao.md](interacao-e-elevacao.md).

- `shadow.axis`: `negativeQuarter`=-1.5, `none`=0, `quarter`=1.5, `third`=3, `x1`=4, `x3`=12
- `shadow.spread`: `none`=0
- `shadow.blur`: `none`=0, `x1`=4, `x2`=8, `x3`=12, `x4`=16, `x6`=24, `x16`=64

A cor da sombra vem **do tema**: `theme.elevation.default`.

---

## Tamanho de ícone — `iconSize`

`medium` = `sizing.x6` (24), `small` = `sizing.x4` (16). Os componentes definem
slots de ícone com dimensões próprias (ver cada spec); ícones passados via prop
devem caber nesses slots.

---

## Cor — via tema (`ColorTheme`)

Cor **nunca** é primitiva nos componentes; vem do tema ativo. A estrutura
(`theme.<grupo>.<…>`) é:

- **`background`** — fundo de tela: `default`, `subtle`, `accentPrimaryPersistent`.
- **`surface`** — fundo de superfícies/componentes:
  - `default`, `subtle`, `subtleOnSubtle`, `inverse`
  - `accent.{primary, primarySuperSubtle, primarySubtle, primarySubtleOnSubtle, primaryPersistent, secondary, secondarySubtle, secondarySubtleOnSubtle, secondaryPersistent}`
  - `common.{disabled, ghost, hover, pressed, selected, onColor, onColorSubtle, overlay, overlaySuble}`
  - `feedback.{info, critical, success, warning}` (+ variantes `Subtle` e `SubtleOnSubtle`)
- **`content`** — texto/ícone sobre superfícies:
  - `default`, `subtle`, `inverse`
  - `accent.{primary, primaryPersistent, secondary, secondaryPersistent}`
  - `common.{disabled, onColor, onColorSubtle, onColorDisabled, selected}`
  - `feedback.{info, critical, success, warning}`
- **`stroke`** — contornos:
  - `default`
  - `accent.{primary, secondary}`
  - `common.{disabled, onColor, selected}`
  - `feedback.{info, critical, success, warning}` (+ variantes `Subtle`)
- **`elevation`** — cor das sombras: `default`, `sheet`.

Existem dois temas completos: `light` e `dark`. Os mesmos caminhos semânticos
existem nos dois; só os valores de paleta mudam. Por isso os componentes funcionam
em ambos sem lógica condicional de cor — basta ler `theme.<caminho>`.

> **Atenção (dark):** alguns nomes no tema escuro são contraintuitivos
> (`content.default` mapeia para `blackAlpha.1000`, `surface.default` para
> `whiteAlpha.1000`). Confie no **nome semântico**, não na intuição sobre a paleta.

Ver [theming.md](theming.md) para acesso ao tema em runtime.
