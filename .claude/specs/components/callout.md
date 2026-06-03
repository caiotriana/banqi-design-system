# Callout

> Cartão de mensagem contextual (informativa ou de feedback), com título, descrição,
> ícone, ação opcional e botão de fechar.

- **Import:** `import { Callout } from 'banqi-design-system'`
- **Fonte:** `src/components/Callout/Callout.tsx`
- **Categoria:** Feedback
- **Base:** `View` + `Pressable`

## Visão geral

Bloco de comunicação dentro do conteúdo (não é toast/modal). Comunica informação,
sucesso, atenção ou erro. Pode incluir uma ação textual (com seta) e um botão de
fechar. Largura fixa de 344 px.

## Anatomia

```
┌──────────────────────────────────────┐
│ [ícone]  Título                    ✕  │
│          Descrição em uma ou mais     │
│          linhas.                      │
│          Ação ›                       │
└──────────────────────────────────────┘
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `description` | `string` | — (obrigatório) | Texto principal (sem limite de linhas). |
| `variant` | `CalloutVariant` | `'standard'` | Cor/tom (ver Variantes). |
| `title` | `string` | — | Título em negrito (`numberOfLines={1}`). |
| `icon` | `React.ReactNode` | — | Ícone à esquerda. |
| `actionLabel` | `string` | — | Rótulo da ação; se presente, ativa borda+sombra. |
| `onActionPress` | `() => void` | — | Ação ao tocar no link. |
| `onClose` | `() => void` | — | Se presente, exibe o botão de fechar (✕). |
| `accessibilityLabel` | `string` | — | Fallback: `title ?? description`. |
| `testID` | `string` | — | Identificador para testes. |

```ts
type CalloutVariant = 'standard' | 'info' | 'success' | 'attention' | 'critical';
```

## Variantes

| Variante | Fundo | Borda | Texto / Link |
| --- | --- | --- | --- |
| `standard` | `surface.accent.primarySuperSubtle` | `stroke.default` | `content.default` / `content.accent.primary` |
| `info` | `surface.feedback.infoSubtle` | `stroke.feedback.infoSubtle` | `content.feedback.info` |
| `success` | `surface.feedback.successSubtle` | `stroke.feedback.successSubtle` | `content.feedback.success` |
| `attention` | `surface.feedback.warningSubtle` | `stroke.feedback.warningSubtle` | `content.feedback.warning` |
| `critical` | `surface.feedback.criticalSubtle` | `stroke.feedback.criticalSubtle` | `content.feedback.critical` |

Nas variantes de feedback, título, descrição e link compartilham a mesma cor de
conteúdo do feedback.

## Dimensões

| Elemento | Valor |
| --- | --- |
| Largura | 344 (fixa) |
| Padding | `sizing.x5` (20) |
| Raio | `radii.x4` (16) |
| Gap (ícone↔conteúdo) | `sizing.x3` (12) |
| Gap (conteúdo↔ação) | `sizing.x3` (12); título↔descrição `sizing.x1` |
| Título | `DM Sans` 600, `fontSize.x3_5` (14) / `lineHeight.x4` (16) |
| Descrição | `DM Sans` 400, `fontSize.x3_5` (14) / `lineHeight.x5` (20) |
| Botão fechar | 24×24 |

## Comportamento e interação

- **Borda + sombra só quando há ação** (`actionLabel != null`): aplica
  `border.quarter`, cor da borda da variante e sombra de offset (`shadow.axis.quarter`,
  elevação 2). Sem ação, é um cartão chapado (apenas fundo).
- A ação é um `Pressable` com texto + seta (`›`) na cor de link da variante.
- O botão de fechar (✕) só aparece quando `onClose` é fornecido.
- O ícone, quando presente, é renderizado como veio (sem recoloração automática).

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo/borda/texto/link | ver tabela de Variantes |
| Sombra (com ação) | `theme.elevation.default`, `shadow.axis.quarter`, `shadow.blur.none` |
| Raio/padding | `radii.x4` / `sizing.x5` |
| Tipografia | título `lineHeight.x4`/600 · descrição `lineHeight.x5`/400 |

## Acessibilidade

- `accessibilityRole="alert"`, nó raiz `accessible`.
- `accessibilityLabel={accessibilityLabel ?? title ?? description}`.
- Link de ação: `accessibilityRole="link"`, rótulo = `actionLabel`.
- Botão fechar: `accessibilityRole="button"`, rótulo `"Fechar"`.

## Exemplo de uso

```tsx
<Callout description="Seus dados foram salvos." variant="success" />
<Callout
  variant="critical"
  title="Falha no envio"
  description="Não foi possível concluir a operação."
  actionLabel="Tentar novamente"
  onActionPress={retry}
  onClose={dismiss}
/>
```

## Critérios de aceite (QA)

- [ ] As 5 variantes batem com a tabela de fundo/borda/texto, em claro e escuro.
- [ ] Sem `actionLabel`, o cartão não tem borda nem sombra; com `actionLabel`, ganha
      borda da variante + sombra.
- [ ] Largura fixa de 344; título em 1 linha; descrição pode quebrar.
- [ ] Link de ação mostra rótulo + seta na cor de link; dispara `onActionPress`.
- [ ] Botão ✕ aparece somente com `onClose` e dispara o fechamento.
- [ ] Anunciado como `alert`; ação como link; fechar como botão "Fechar".
