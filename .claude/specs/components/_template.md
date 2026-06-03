<!--
TEMPLATE de spec de componente.
Copie este arquivo para .claude/specs/components/<nome>.md e preencha cada seção.
Regras:
- Português (pt-BR). Nomes de props/tipos/tokens permanecem em inglês (código).
- Sem valores literais de cor/tamanho: referencie tokens (ver ../foundations/design-tokens.md).
- Seções "Variantes"/"Tamanhos" são opcionais — remova se o componente não tiver.
- Remova estes comentários e os placeholders <…> ao finalizar.
-->

# NomeDoComponente

> Uma frase: o que é e para que serve.

- **Import:** `import { NomeDoComponente } from 'banqi-design-system'`
- **Fonte:** `src/components/NomeDoComponente/`
- **Categoria:** <Ação | Formulário | Exibição | Feedback | Navegação | Fundação>
- **Base:** <Pressable | View | TextInput | Animated.View + Pressable | …>

## Visão geral

<2–4 linhas: quando usar, quando NÃO usar, e qual ação/informação representa.
Se herda o padrão de elevação/interação, referencie
[interação-e-elevação](../foundations/interacao-e-elevacao.md) em vez de repetir.>

## Anatomia

```
<diagrama ASCII das partes visíveis e seus slots>
```

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `<prop>` | `<tipo>` | `<default>` ou — (obrigatório) | <o que faz; limites como numberOfLines> |

<Se estende props de RN (ex.: PressableProps/TextInputProps), declare e liste os omits.>

```ts
// tipos públicos relevantes (variant/size/state)
type NomeVariant = '…' | '…';
```

## Variantes  <!-- opcional -->

| Variante | Fundo | Conteúdo/Texto | Contorno | Observações |
| --- | --- | --- | --- | --- |
| `<variante>` | `surface.…` | `content.…` | `stroke.…` | <ex.: não eleva> |

## Tamanhos  <!-- opcional -->

| | Dimensão/Altura | Padding | Raio | Tipografia/Ícone |
| --- | --- | --- | --- | --- |
| `<size>` | `sizing.…` | `sizing.…` | `radii.…` | `fontSize.…` / slot |

## Estados

| Estado | Visual / Cores | Interativo? |
| --- | --- | --- |
| Repouso | `surface.…` / `content.…` | sim |
| Hover (web) | overlay `surface.common.hover` | sim |
| Pressionado | overlay `surface.common.pressed`; sombra inverte | sim |
| `disabled` | `*.common.disabled`; sem sombra/handlers | não |
| <outros> | … | … |

## Comportamento e interação

- <callbacks: quando disparam, com qual argumento (ex.: onChange(!value))>
- <controlado vs. não-controlado>
- <animações: escala no press, transições>
- <handlers desligados quando disabled>

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo/conteúdo/contorno | ver tabela de Variantes |
| Sombra | `theme.elevation.default`, `shadow.axis.*`, `shadow.blur.none` |
| Raio/padding | `radii.…` / `sizing.…` |
| Tipografia | `typography.fontFamily`, `fontSize.…`, peso <400/600> |

## Acessibilidade

- `accessibilityRole="<role>"`.
- `accessibilityState={{ <checked/disabled/busy> }}`.
- `accessibilityLabel={accessibilityLabel ?? <label/title>}`.
- <ícones decorativos ocultados; rótulo obrigatório quando não há texto visível>

## Exemplo de uso

```tsx
<NomeDoComponente prop="valor" onPress={handler} />
```

## Critérios de aceite (QA)

<Checklist verificável olhando a tela. Cada item deve ser observável por QA ou
afirmável por um teste. Cubra: variantes, tamanhos, estados, callbacks,
renderização condicional, claro/escuro e acessibilidade.>

- [ ] <…>
- [ ] As cores mudam corretamente entre tema claro e escuro.
- [ ] Anunciado como `<role>` com estado correto a leitores de tela.
