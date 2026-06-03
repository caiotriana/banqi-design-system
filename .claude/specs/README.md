# Especificações — banqi Design System (mobile)

Specs da biblioteca de componentes mobile do banqi (React Native + `react-native-web`).
Cada documento descreve o **contrato** de um componente: propriedades, variantes,
estados, comportamento, tokens consumidos, acessibilidade e critérios de aceite (QA).

As specs são a fonte de verdade para implementação e revisão. Quando código e spec
divergirem, alinhe os dois — não trate a divergência como detalhe.

## Como ler

- **Propriedades** — o contrato público (`*.types.ts` / assinatura do componente).
- **Mapeamento de tokens** — qual token semântico alimenta cada cor/dimensão, por
  estado e variante. Nenhum valor literal de cor existe nos componentes; tudo vem
  de `banqi-tokens/rn` e do tema ativo.
- **Critérios de aceite (QA)** — checklist verificável. É o que uma revisão de QA
  deve conseguir confirmar olhando a tela.

## Estrutura

```
.claude/specs/
├─ README.md                        ← este índice
├─ component-development.md         ← playbook: do Figma (MCP) ao merge de um novo componente
├─ testing.md                       ← estratégia + padrão de cobertura de testes (por capacidade)
├─ foundations/
│  ├─ design-tokens.md              ← escalas de token (tipografia, sizing, raio, sombra…)
│  ├─ theming.md                    ← ThemeProvider, useTheme, light/dark
│  ├─ iconography.md                ← banqi-icons: uso, cor via token, tamanhos, a11y
│  └─ interacao-e-elevacao.md       ← padrões compartilhados (sombra, press, hover, a11y)
└─ components/
   ├─ _template.md                  ← modelo para specs de novos componentes
   ├─ button.md
   ├─ icon-button.md
   ├─ link-action.md
   ├─ input-text.md
   ├─ checkbox.md
   ├─ radio.md
   ├─ toggle.md
   ├─ avatar.md
   ├─ badge.md
   ├─ callout.md
   └─ shortcut.md
```

## Catálogo de componentes

| Componente | Categoria | Resumo | Spec |
| --- | --- | --- | --- |
| `ThemeProvider` / `useTheme` | Fundação | Injeta o tema (claro/escuro) na árvore | [theming](foundations/theming.md) |
| `banqi-icons` | Fundação | Conjunto de ícones (SVG/RN), cor via token | [iconography](foundations/iconography.md) |
| `Button` | Ação | Botão com rótulo, 6 variantes, ícones e loading | [button](components/button.md) |
| `IconButton` | Ação | Botão quadrado somente ícone, 7 variantes | [icon-button](components/icon-button.md) |
| `LinkAction` | Navegação | Link textual com ícone, suporte on-color | [link-action](components/link-action.md) |
| `InputText` | Formulário | Campo de texto com rótulo, prefixo, feedback | [input-text](components/input-text.md) |
| `Checkbox` | Formulário | Caixa de seleção com rótulo | [checkbox](components/checkbox.md) |
| `Radio` | Formulário | Botão de opção única com rótulo | [radio](components/radio.md) |
| `Toggle` | Formulário | Interruptor on/off com rótulo | [toggle](components/toggle.md) |
| `Avatar` | Exibição | Iniciais, ícone, imagem ou logo | [avatar](components/avatar.md) |
| `Badge` | Exibição | Etiqueta compacta de status, com ponto opcional | [badge](components/badge.md) |
| `Callout` | Feedback | Cartão de mensagem com ação e fechar | [callout](components/callout.md) |
| `Shortcut` | Navegação | Cartão de atalho com título/descrição/slots | [shortcut](components/shortcut.md) |

## Convenções da biblioteca

Padrões válidos para **todos** os componentes (detalhados em
[interacao-e-elevacao.md](foundations/interacao-e-elevacao.md)):

- **Tema obrigatório** — todo componente lê o tema via `useTheme()`. Deve haver um
  `<ThemeProvider>` acima na árvore. Sem provider, o padrão é o tema **claro**.
- **Sem cores literais** — nenhuma cor hardcoded. Cor, raio, espaçamento, sombra e
  tipografia vêm de tokens. Ver [design-tokens](foundations/design-tokens.md).
- **Tipografia** — família `DM Sans`, sempre com `includeFontPadding: false`.
  Rótulos de ação/título usam peso `600`; rótulos de controles de formulário e
  corpo usam peso `400`.
- **Estado padrão de props** — props de variante/tamanho/estado sempre têm default;
  o componente nunca quebra se receber só as props obrigatórias.
- **Elevação "física"** — componentes interativos usam uma sombra de offset sólido
  (blur `0`) que se inverte ao pressionar, simulando profundidade. Padrão único e
  compartilhado.
- **`alignSelf: 'flex-start'`** — componentes "encolhem" para o próprio conteúdo;
  não ocupam a largura total do pai por padrão (exceções: `Callout` e `Shortcut`,
  que têm largura fixa).
- **Acessibilidade** — `accessibilityRole`, `accessibilityState` e
  `accessibilityLabel` (com fallback para `label`/`title`) em todo componente
  interativo. `testID` exposto onde aplicável.

## Criando um novo componente

Siga o playbook [component-development.md](component-development.md) — fluxo completo
**do Figma (via MCP) ao merge**: inspeção do design, mapeamento de variáveis → tokens,
spec, estrutura de arquivos, implementação, stories, testes e portões de CI.

A spec do componente em si nasce de [`components/_template.md`](components/_template.md):
copie para `components/<nome>.md`, preencha e adicione a linha correspondente ao
**Catálogo de componentes** acima. A spec deve existir junto com (ou antes de) o código.

## Testes

A estratégia de testes e os casos mínimos por componente estão em
[`testing.md`](testing.md). Os casos derivam dos **Critérios de aceite (QA)** de cada
spec — mantenha os dois em sincronia ao alterar um componente.

## Idioma de conteúdo

Textos embutidos visíveis ou anunciados a leitores de tela estão em **pt-BR**
(ex.: `"Limpar campo"`, `"Fechar"`). Rótulos de negócio são responsabilidade de quem
consome a biblioteca e devem chegar via props.
