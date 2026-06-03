# Avatar

> Representação visual de uma entidade: iniciais, ícone, imagem ou logo, em três
> tamanhos, com estado de carregamento (skeleton).

- **Import:** `import { Avatar } from 'banqi-design-system'`
- **Fonte:** `src/components/Avatar/Avatar.tsx`
- **Categoria:** Exibição
- **Base:** `Animated.View` + `Image`/`Text`

## Visão geral

Exibe a identidade de um usuário/entidade. O conteúdo depende da `variant`. Não é
interativo (sem press). O estado `skeleton` anima um pulso de opacidade enquanto o
conteúdo carrega.

## Anatomia

```
┌────────┐
│  AA    │   ← conteúdo conforme variant; container quadrado-arredondado
└────────┘
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `variant` | `AvatarVariant` | `'initials'` | `'initials'` \| `'icon'` \| `'image'` \| `'logo'`. |
| `size` | `AvatarSize` | `'standard'` | `'small'` \| `'standard'` \| `'large'`. |
| `state` | `AvatarState` | `'enabled'` | `'enabled'` \| `'disabled'` \| `'skeleton'`. |
| `initials` | `string` | `'AA'` | Iniciais; usa as **2 primeiras**, em maiúsculas. |
| `icon` | `React.ReactNode` | — | Conteúdo da variante `icon`. |
| `imageSource` | `ImageSourcePropType` | `https://i.pravatar.cc/300` | Fonte da variante `image`. |
| `accessibilityLabel` | `string` | `"Avatar {variant}"` | Rótulo para leitor de tela. |
| `testID` | `string` | — | Identificador para testes. |

## Variantes

| Variante | Conteúdo | Fundo |
| --- | --- | --- |
| `initials` | Texto com 2 letras maiúsculas | `surface.subtle` (disabled: `surface.common.disabled`) |
| `icon` | Nó passado em `icon` | `surface.subtle` |
| `image` | `Image` (cover) de `imageSource` | `surface.subtle` |
| `logo` | Logo CB Pay (contido) | transparente |

## Tamanhos

| | Dimensão | Raio | `fontSize`/`lineHeight` iniciais | Ícone |
| --- | --- | --- | --- | --- |
| `small` | 36 | `radii.x3` (12) | `x3` (12) / `x3_5` (14) | `sizing.x5` (20) |
| `standard` | 48 | `radii.x4` (16) | `x3_5` (14) / `x4` (16) | `sizing.x5` (20) |
| `large` | 60 | `radii.x6` (24) | `x5` (20) / `x5` (20) | `sizing.x6` (24) |

## Estados

| Estado | Comportamento |
| --- | --- |
| `enabled` | Conteúdo normal. |
| `disabled` | (initials/icon) fundo `surface.common.disabled`, texto `content.common.disabled`. |
| `skeleton` | Sem conteúdo; container pulsa a opacidade entre 1.0 e 0.35 em loop (700 ms cada). |

A cor do texto de iniciais: `content.default` (enabled) / `content.common.disabled`
(disabled). `image` e `logo` ignoram o estado disabled de cor.

## Comportamento e interação

- Não interativo: sem `onPress`, sem elevação.
- `skeleton`: `Animated.loop` de `timing` (useNativeDriver) controlando `opacity`;
  ao sair de skeleton, a opacidade volta a 1.
- `initials` corta a string para os 2 primeiros caracteres e força maiúsculas.
- `image` recorta em cover; `logo` usa contain.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo | `surface.subtle` / `surface.common.disabled` / transparente (logo) |
| Cor das iniciais | `content.default` / `content.common.disabled` |
| Dimensão/raio/fonte | ver tabela de Tamanhos |

## Acessibilidade

- `accessibilityRole="image"`, nó raiz `accessible`.
- `accessibilityLabel={accessibilityLabel ?? "Avatar {variant}"}`.
- `accessibilityIgnoresInvertColors` nas imagens.

## Exemplo de uso

```tsx
<Avatar variant="initials" initials="CT" size="large" />
<Avatar variant="image" imageSource={{ uri: user.photo }} />
<Avatar variant="icon" icon={<UserIcon />} />
<Avatar state="skeleton" />
```

## Critérios de aceite (QA)

- [ ] Tamanhos: small 36 / standard 48 / large 60, com os raios corretos.
- [ ] `initials` mostra exatamente 2 letras maiúsculas, mesmo com entrada maior/minúscula.
- [ ] `image` preenche (cover); `logo` aparece contido e com fundo transparente.
- [ ] `skeleton` pulsa em loop e não mostra conteúdo; sair do skeleton restaura opacidade.
- [ ] `disabled` esmaece iniciais/ícone com cores `*.disabled`.
- [ ] Anunciado como imagem com rótulo significativo (definir `accessibilityLabel`
      real em produção, não o fallback genérico).
