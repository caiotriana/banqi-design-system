# Desenvolvimento de um novo componente

Playbook ponta a ponta para criar um componente nesta biblioteca, **do Figma ao
merge**, seguindo os padrões já aplicados. Inspeção de design é feita via **MCP do
Figma**; nenhum valor visual é "chutado" ou hardcoded — tudo vem de tokens.

Leia junto com:
[design-tokens](foundations/design-tokens.md) ·
[theming](foundations/theming.md) ·
[interação-e-elevação](foundations/interacao-e-elevacao.md) ·
[template de componente](components/_template.md) ·
[testes](testing.md).

> **Atalho:** este playbook está empacotado no slash command
> [`/new-component`](../commands/new-component.md) — rode
> `/new-component <NomeDoComponente> <url-ou-nodeId-do-figma>` para executar o fluxo
> abaixo de forma guiada.

## Princípios (não negociáveis)

1. **Figma é a fonte da verdade visual**; `banqi-tokens` é a fonte da verdade de
   implementação. O trabalho central é **traduzir variáveis do Figma → tokens**.
2. **Zero valores literais** de cor/raio/espaçamento/tipografia/sombra no componente.
   Se o Figma usa um valor sem token correspondente, **crie o token** em
   `banqi-tokens` antes — não hardcode.
3. **Tema sempre via `useTheme()`**; o componente funciona em claro e escuro sem
   condicional de cor.
4. **Reuse os padrões compartilhados** (elevação física, press, hover, overlays,
   acessibilidade) em vez de reinventar — ver
   [interação-e-elevação](foundations/interacao-e-elevacao.md).
5. **Spec antes (ou junto) do código.** Todo componente nasce com sua spec em
   `.claude/specs/components/<nome>.md` (a partir do [template](components/_template.md)).

---

## Fase 1 — Inspecionar o design no Figma (MCP)

Objetivo: extrair **anatomia, medidas, variantes/estados e variáveis** do nó do
Figma. Trabalhe a partir do nó selecionado no Figma Desktop (Dev Mode) ou de uma URL
(`node-id` vira `nodeId`, ex.: `?node-id=1-2` → `"1:2"`).

Sequência recomendada de ferramentas:

| Passo | Ferramenta MCP | Para quê |
| --- | --- | --- |
| 1. Estrutura | `mcp__Figma__get_metadata` | Visão geral: IDs, tipos de camada, nomes, posições e **tamanhos**. Mapeia a anatomia e revela sub-nós. |
| 2. Visual | `mcp__Figma__get_screenshot` | Referência de pixel de **cada** variante/estado. Anexe ao PR/spec. |
| 3. Contexto/medidas | `mcp__Figma__get_design_context` | Código de referência + medidas (gaps, paddings, raios). Passe `artifactType: "DESIGN_SYSTEM"`. **Adaptar, não copiar** (é orientado a web/CSS). |
| 4. Variáveis | `mcp__Figma__get_variable_defs` | Lista as variáveis usadas (cor/raio/espaço/tipografia) — a **base do mapeamento para tokens**. |
| 5. Assets | `mcp__figma__download_figma_images` | Exporta ícones/SVGs/PNGs para `assets/` (só se o componente embute imagem própria, como o logo do `Avatar`). Baixar arquivos exige confirmação. |

Saídas desta fase:
- **Anatomia** (partes + slots) e dimensões por tamanho.
- **Enumeração de eixos**: `variant`, `size`, `state` (a partir das *component
  properties*/variants do Figma).
- **Tabela de variáveis** do Figma a serem mapeadas.

> Dica: se `get_design_context` vier grande demais, use `get_metadata` para navegar e
> chamar `get_design_context` em sub-nós específicos.

---

## Fase 2 — Mapear variáveis do Figma → tokens `banqi`

Esta é a etapa que mantém a biblioteca consistente. Para **cada** variável retornada
por `get_variable_defs`, encontre o token semântico equivalente em `banqi-tokens/rn`
(ver [design-tokens](foundations/design-tokens.md)). Nunca cole o valor cru.

Exemplo de tabela de mapeamento (preencha por componente):

| Variável Figma (`get_variable_defs`) | Token `banqi` | Uso no código |
| --- | --- | --- |
| `surface/accent/primaryPersistent` | `theme.surface.accent.primaryPersistent` | `backgroundColor` |
| `content/common/onColor` | `theme.content.common.onColor` | cor do texto/ícone |
| `stroke/default` | `theme.stroke.default` | `borderColor` |
| `radius/x4` | `radii.x4` | `borderRadius` |
| `space/x3` | `sizing.x3` | `padding` |
| `label/small` (tipografia) | `typography.fontSize.x3_5` + `lineHeight.x4` + peso 600 | estilo de texto |

Regras:
- Cor **sempre** vem do **tema** (`theme.*`), nunca da paleta nem de hex.
- Confie no **nome semântico** do token, não na intuição sobre a paleta (no tema
  escuro alguns nomes são contraintuitivos — ver
  [design-tokens](foundations/design-tokens.md#cor--via-tema-colortheme)).
- Variável sem token correspondente ⇒ **abra o token em `banqi-tokens`** primeiro;
  só então use no componente.
- Estados de interação geralmente já têm token dedicado
  (`surface.common.pressed`/`hover`/`disabled`) — reaproveite o padrão compartilhado.

---

## Fase 3 — Escrever a spec do componente

Copie [`components/_template.md`](components/_template.md) para
`components/<nome>.md` e preencha com o que saiu das fases 1–2: visão geral,
anatomia, **propriedades** (API), variantes/tamanhos/estados, **mapeamento de
tokens**, comportamento, acessibilidade e **critérios de aceite (QA)**.

Derive a API do design:
- Texto/medidas variáveis → **props** (`label`, `title`, ícones/slots…).
- Cada *component property*/variant do Figma → união de `variant`/`size`/`state`.
- Defina o **papel de acessibilidade** alvo já aqui (ver tabela em
  [interação-e-elevação](foundations/interacao-e-elevacao.md#5-acessibilidade-baseline)).

---

## Fase 4 — Estrutura de arquivos

Crie a pasta `src/components/<Nome>/` seguindo o layout existente:

```
src/components/<Nome>/
├─ <Nome>.tsx          # componente (usa useTheme; sem cor literal)
├─ <Nome>.types.ts     # tipos públicos: <Nome>Props, uniões de variant/size/state
├─ <Nome>.styles.ts    # StyleSheet + funções get*Tokens(theme, …) → cores por estado
├─ <Nome>.stories.tsx  # Storybook: Playground + matriz de estados
├─ <Nome>.test.tsx     # testes (ver Fase 6)
├─ index.ts            # reexports públicos
└─ assets/             # (opcional) imagens próprias do componente
```

Convenções observadas na lib:
- **Separe estilo da lógica** (`*.styles.ts`) quando houver mapeamento de tokens por
  estado/variante (padrão de `Badge`/`Checkbox`/`Toggle`/…). Componentes simples
  podem inlinar (`Button`/`InputText`/`LinkAction`), mas a separação é o default.
- `index.ts` reexporta o componente **e** seus tipos:
  ```ts
  export { Nome } from './Nome';
  export type { NomeProps, NomeVariant } from './Nome.types';
  ```

---

## Fase 5 — Implementar

Ordem sugerida: **types → styles (mapa de tokens) → componente**.

- **types**: declare `NomeProps` e as uniões. Estenda props nativas quando fizer
  sentido (`PressableProps`/`TextInputProps`), omitindo o que o componente controla
  (`style`, `disabled`, `children`).
- **styles**: escreva `get<Algo>Tokens(theme, variant, state, …)` retornando **só
  tokens** (cores/raios), mais um `StyleSheet.create` para layout fixo. É aqui que a
  tabela da Fase 2 vira código.
- **componente**:
  - `const { theme } = useTheme();`
  - aplique o padrão de interação compartilhado quando for interativo (elevação
    física, escala no press, overlays hover/press, `disabled` no `Pressable`) — ver
    [interação-e-elevação](foundations/interacao-e-elevacao.md).
  - **Acessibilidade**: `accessibilityRole`, `accessibilityState`
    (`disabled`/`checked`/`busy`) e `accessibilityLabel` (com fallback). Ícones
    decorativos ocultos do leitor de tela. `testID` exposto.
  - tipografia com `includeFontPadding: false`.
- **export público**: adicione o componente e seus tipos em
  [`src/index.tsx`](../../src/index.tsx).

---

## Fase 6 — Stories (Storybook)

Siga o formato das stories existentes:

- `Meta`/`StoryObj` de `@storybook/react`; `title: 'Components/<Nome>'`;
  `tags: ['autodocs']`.
- `argTypes`/`args` para controles (variant/size/state/label).
- **`Playground`**: render controlado (estado local refletindo as props).
- **Matriz de estados** (ex.: `AllStates`): todas as combinações de
  variante/estado lado a lado — é a base da regressão **visual** e o espelho dos
  critérios de aceite. Use `useTheme()` para rótulos auxiliares.

As stories cobrem a fidelidade visual (cor/dimensão), que **não** é testada no
unitário.

---

## Fase 7 — Testes

Crie `<Nome>.test.tsx` cobrindo as **capacidades** do componente conforme o
[padrão de cobertura](testing.md#padrão-de-cobertura-por-capacidade):
base (smoke/conteúdo/role+rótulo/claro+escuro) e, conforme o caso, ação, gating de
`disabled`, estado booleano, variantes, entrada de texto, slots opcionais,
loading. Renderize sempre via `renderWithTheme`.

---

## Fase 8 — Verificar (portões de CI)

Tudo precisa passar localmente (espelha `.github/workflows/ci.yml`):

```sh
yarn lint        # eslint + prettier
yarn typecheck   # tsc
yarn test        # jest + RNTL
yarn prepare     # build (bob) — confirme que o componente entra em lib/ e o teste NÃO
yarn storybook   # conferência visual contra os screenshots do Figma
```

---

## Definition of Done (checklist)

- [ ] Nó do Figma inspecionado via MCP (`get_metadata` → `get_design_context` →
      `get_variable_defs` → `get_screenshot`).
- [ ] Tabela **variável Figma → token** preenchida; **nenhum** valor literal no código.
- [ ] Tokens faltantes criados em `banqi-tokens` (se houve).
- [ ] Spec `.claude/specs/components/<nome>.md` criada a partir do template e adicionada ao
      catálogo do [README](README.md).
- [ ] Estrutura de arquivos completa (`.tsx`/`.types`/`.styles`/`index`/`stories`/`test`).
- [ ] Componente lê o tema via `useTheme()` e funciona em claro **e** escuro.
- [ ] Padrões de interação/elevação reusados (quando interativo).
- [ ] Acessibilidade: role, state e label corretos; decorativos ocultos.
- [ ] Exportado em `src/index.tsx`.
- [ ] Stories: `Playground` + matriz de estados batendo com os screenshots do Figma.
- [ ] Testes cobrem as capacidades aplicáveis (padrão de cobertura).
- [ ] `lint`, `typecheck`, `test` e `prepare` verdes; teste **não** vaza para `lib/`.
