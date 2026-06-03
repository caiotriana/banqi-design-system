# Badge

> Etiqueta compacta de status/categoria, com 6 variantes semânticas e ponto opcional.

- **Import:** `import { Badge } from 'banqi-design-system'`
- **Fonte:** `src/components/Badge/Badge.tsx`
- **Categoria:** Exibição
- **Base:** `View` + `Text`

## Visão geral

Rótulo curto que comunica status, categoria ou contagem. Não é interativo. Pode
exibir um ponto colorido à esquerda do texto. Encolhe para o conteúdo
(`alignSelf: 'flex-start'`).

## Anatomia

```
● Label      (com ponto)
  Label      (sem ponto)
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `label` | `string` | — (obrigatório) | Texto da etiqueta (`numberOfLines={1}`). |
| `variant` | `BadgeVariant` | `'neutral'` | Cor semântica (ver Variantes). |
| `showDot` | `boolean` | `false` | Exibe ponto colorido antes do texto. |
| `disabled` | `boolean` | `false` | Aparência esmaecida. |
| `accessibilityLabel` | `string` | — | Fallback para `label`. |
| `testID` | `string` | — | Identificador para testes. |

```ts
type BadgeVariant = 'highlight' | 'neutral' | 'accent' | 'success' | 'warning' | 'critical';
```

## Variantes

Fundo + cor de texto/ponto por variante (estado normal):

| Variante | Fundo | Texto / Ponto |
| --- | --- | --- |
| `highlight` | `surface.accent.secondaryPersistent` | `content.accent.secondaryPersistent` |
| `neutral` | `surface.subtleOnSubtle` | `content.default` |
| `accent` | `surface.accent.primarySubtleOnSubtle` | `content.accent.primary` |
| `success` | `surface.feedback.successSubtleOnSubtle` | `content.feedback.success` |
| `warning` | `surface.feedback.warningSubtleOnSubtle` | `content.feedback.warning` |
| `critical` | `surface.feedback.criticalSubtleOnSubtle` | `content.feedback.critical` |

`disabled` (qualquer variante): fundo `surface.common.disabled`, texto/ponto
`content.common.disabled`.

## Dimensões

| Elemento | Valor |
| --- | --- |
| Raio | `radii.x2` (8) |
| Altura mínima | `sizing.x5` (20) |
| Ponto | `sizing.x2` (8) em container 16×16 |
| Texto | `DM Sans` peso 600, `fontSize.x3` (12) / `lineHeight.x3_5` (14), `letterSpacing` 0.1 |
| Padding sem ponto | V `sizing.half` (2), H `sizing.x1` (4), gap `sizing.x1` |
| Padding com ponto | top/bottom `sizing.half`, direita `sizing.x1`, esquerda `sizing.half` |

## Comportamento e interação

Estático. Sem press, sem elevação, sem animação.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo/texto/ponto | ver tabela de Variantes (e `*.disabled`) |
| Raio | `radii.x2` |
| Tipografia | `fontSize.x3`, `lineHeight.x3_5`, peso 600, `letterSpacing['100']` |

## Acessibilidade

- `accessibilityRole="text"`, nó `accessible`.
- `accessibilityLabel={accessibilityLabel ?? label}`.

## Exemplo de uso

```tsx
<Badge label="Novo" variant="highlight" />
<Badge label="Aprovado" variant="success" showDot />
<Badge label="Pendente" variant="warning" showDot />
<Badge label="Inativo" disabled />
```

## Critérios de aceite (QA)

- [ ] As 6 variantes batem com a tabela de fundo/texto, em tema claro e escuro.
- [ ] Com `showDot`, o ponto aparece à esquerda na cor do texto da variante.
- [ ] `disabled` esmaece fundo e texto com cores `*.disabled`.
- [ ] Altura mínima 20; raio 8; texto em 1 linha com `letterSpacing` aplicado.
- [ ] Largura acompanha o conteúdo (não estica no pai).
- [ ] Anunciado como texto com o rótulo correto.
