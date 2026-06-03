# LinkAction

> Link de ação textual com ícone à direita, dois tamanhos e suporte a uso sobre
> superfícies coloridas (on-color).

- **Import:** `import { LinkAction } from 'banqi-design-system'`
- **Fonte:** `src/components/LinkAction/LinkAction.tsx`
- **Categoria:** Navegação
- **Base:** `Pressable` (estende `PressableProps`)

## Visão geral

Ação de baixa ênfase, com aparência de link. Mostra um ícone à direita do rótulo —
por padrão uma seta diagonal `↗` (ação que leva para fora/avança). Sublinha o texto
ao pressionar/hover.

## Anatomia

```
Label ↗
└rótulo┘ └ícone (slot)┘   ← gap x1, alinhados à esquerda
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `label` | `string` | — (obrigatório) | Texto do link. `numberOfLines={1}`. |
| `size` | `LinkActionSize` | `'standard'` | `'standard'` ou `'large'`. |
| `onColor` | `boolean` | `false` | `true` para uso sobre fundo colorido/escuro. |
| `disabled` | `boolean` | `false` | Desativa interação. |
| `icon` | `React.ReactNode` | seta `↗` | Substitui o ícone padrão. |
| `onPress` | `PressableProps['onPress']` | — | Ação ao tocar. |
| _…rest_ | `PressableProps` | — | Exceto `disabled`, `style`, `children`. |

```ts
type LinkActionSize = 'standard' | 'large';
```

## Tamanhos

| | `fontSize` | `lineHeight` | Ícone |
| --- | --- | --- | --- |
| `standard` | `x3_5` (14) | `x4` (16) | `sizing.x4` (16) |
| `large` | `x4` (16) | `x4` (16) | `sizing.x5` (20) |

Tipografia: `DM Sans` peso 600, `includeFontPadding: false`. Gap rótulo↔ícone:
`sizing.x1` (4). Container `alignSelf: 'flex-start'`.

## Cor do texto/ícone

| `onColor` | `disabled` | Cor |
| --- | --- | --- |
| `false` | `false` | `content.accent.primary` |
| `false` | `true` | `content.common.disabled` |
| `true` | `false` | `content.common.onColor` |
| `true` | `true` | `content.common.onColorDisabled` |

O ícone usa a **mesma** cor do texto.

## Estados

| Estado | Visual |
| --- | --- |
| Repouso | Texto na cor acima, sem sublinhado. |
| Hover (web) / Pressionado | Sublinhado sólido no rótulo (`textDecorationLine: 'underline'`). |
| `disabled` | Cor `*.disabled`/`onColorDisabled`; sem `onPress`; sem sublinhado. |

## Comportamento e interação

- `onPress` é ignorado quando `disabled`.
- Hover (`onHoverIn`/`onHoverOut`) e press controlam o sublinhado; quando
  `disabled`, nunca sublinha.
- O ícone padrão (`↗`) é decorativo e fica **oculto** para leitores de tela.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Cor texto/ícone | ver tabela (`content.accent.primary`, `content.common.onColor`, `*.disabled`, `*.onColorDisabled`) |
| Tipografia | `typography.fontFamily`, `fontSize.x3_5`/`x4`, peso 600 |
| Gap | `sizing.x1` |
| Ícone (tamanho) | `sizing.x4` / `sizing.x5` |

## Acessibilidade

- `accessibilityRole="link"`, `accessibilityState={{ disabled }}`.
- `accessibilityLabel={accessibilityLabel ?? label}`.
- Ícone padrão marcado como decorativo (`accessibilityElementsHidden`,
  `importantForAccessibility="no"`).

## Exemplo de uso

```tsx
<LinkAction label="Ver detalhes" onPress={openDetails} />
<LinkAction label="Saiba mais" size="large" onPress={openDocs} />
<LinkAction label="Continuar no app" onColor onPress={openApp} />   {/* sobre fundo colorido */}
```

## Critérios de aceite (QA)

- [ ] `standard` (14 px) e `large` (16 px) usam os tamanhos de fonte e ícone corretos.
- [ ] Cor do texto/ícone segue a matriz `onColor` × `disabled`.
- [ ] Sublinhado aparece em hover/press e nunca quando `disabled`.
- [ ] Ícone e texto compartilham a mesma cor; ícone padrão é a seta `↗`.
- [ ] Anunciado como **link**; ícone decorativo não é lido.
- [ ] `onColor` permanece legível sobre superfícies escuras/coloridas.
