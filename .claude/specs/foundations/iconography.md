# Iconografia — `banqi-icons`

> Conjunto de ícones do banqi para React Native, gerados de SVG via SVGR
> (`react-native-svg`). Fonte única de ícones do design system.

- **Import:** `import { Add, ArrowLeft, Check } from 'banqi-icons'`
- **Pacote:** `banqi-icons` (linkado via `portal:../banqi-icons` no `package.json`)
- **Peer deps:** `react`, `react-native`, `react-native-svg`
- **Categoria:** Fundação

## Visão geral

Cada ícone é um componente React independente, exportado nomeadamente pelo barril
do pacote. São **monocromáticos**: a cor sólida do SVG de origem é mapeada para
`currentColor`, e o componente injeta a prop `color` no `<Svg>`, que o
`react-native-svg` resolve para os filhos. Toda cor de ícone deve vir de um **token
semântico** do tema (ver [design-tokens](design-tokens.md)) — nunca um literal.

Use `banqi-icons` para **qualquer** ícone do sistema. Não importe SVGs avulsos,
não use bibliotecas de ícones de terceiros e não desenhe ícones inline nos
componentes.

## Propriedades

Todo ícone aceita as mesmas props (`SvgProps` do `react-native-svg` + duas próprias):

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `size` | `number` | `24` | Largura e altura em px (ícone é sempre quadrado). |
| `color` | `string` | — (herda) | Cor do traço/preenchimento. Alimenta `currentColor`. Passe sempre um token. |
| _…rest_ | `SvgProps` | — | Qualquer prop de `Svg`: `opacity`, `style`, `onPress`, `accessibilityLabel`, etc. |

```ts
type IconProps = SvgProps & {
  size?: number;
  color?: string;
};
```

Todos os ícones de origem têm `viewBox="0 0 24 24"` (grid 24×24).

## Cor — sempre via token

A prop `color` recebe o valor **resolvido** de um token do tema ativo, obtido por
`useTheme()`. O ícone não conhece o tema; quem o usa é responsável por alimentar a
cor correta para claro/escuro.

```tsx
import { Info } from 'banqi-icons';
import { useTheme } from '../ThemeProvider/ThemeProvider';

function FeedbackIcon() {
  const { theme } = useTheme();
  return <Info size={20} color={theme.content.feedback.info} />;
}
```

Quando o ícone vive dentro de um componente que já calcula tokens por
variante/estado (Badge, Callout, Button, IconButton), use o token de conteúdo
daquele componente — o ícone acompanha a cor do texto/conteúdo:

```tsx
// Em Badge.tsx — ícone acompanha a cor do ponto/texto da variante
{showDot && <StatusDot size={16} color={tokens.dotColor} />}
```

## Tamanhos recomendados

`size` é livre, mas padronize pelos slots já usados na biblioteca:

| Contexto | `size` |
| --- | --- |
| Ponto de status / inline pequeno | `16` |
| Ícone em controle / botão (slot 20×20) | `20` |
| Ícone de mensagem (Callout) | `20` |
| Padrão / autônomo | `24` |

## Uso em props de componente

Componentes do design system recebem ícones como **`ReactNode`** ou como
**`ComponentType`**, não como string. Dois padrões coexistem:

- **Instância** (`React.ReactNode`) — o consumidor monta o ícone e passa pronto.
  Usado por `IconButton`, `Button`, `Callout` (prop `icon`).

  ```tsx
  <IconButton icon={<Close />} accessibilityLabel="Fechar" onPress={onClose} />
  <Callout icon={<Info size={20} color={textColor} />} title="…" description="…" />
  ```

- **Referência de componente** (`React.ComponentType<{ size?; color? }>`) — útil
  para mapear variante → ícone e renderizar internamente. Ver `VARIANT_ICONS` em
  [Callout.stories.tsx](../../../src/components/Callout/Callout.stories.tsx).

  ```tsx
  const VARIANT_ICONS: Record<CalloutVariant, React.ComponentType<{ size?: number; color?: string }>> = {
    info: Info, success: Check, attention: Warning, critical: Block, standard: Placeholder,
  };
  ```

## Acessibilidade

- Ícones são **decorativos por padrão**. Quando o ícone é o único conteúdo de um
  controle (ex.: `IconButton`), o **rótulo é responsabilidade do container**
  (`accessibilityLabel` obrigatório no componente), não do ícone.
- Não dependa do ícone para transmitir informação que não esteja também no texto
  ou no `accessibilityLabel` do componente que o contém.

## Catálogo

O pacote exporta ~196 ícones (barril em `banqi-icons/src/lib/main.ts`). O nome do
componente é o arquivo SVG em PascalCase (`arrow-left.svg` → `ArrowLeft`). Famílias
principais:

- **Navegação/direção:** `ArrowLeft`, `ArrowRight`, `ArrowTop`, `ArrowBottom`,
  `ChevronLeft`, `ChevronRight`, `ChevronTop`, `ChevronBottom`, `ChevronMini*`.
- **Ações:** `Add`, `Remove`, `Close`, `Clear`, `Check`, `DoubleCheck`, `Copy`,
  `Download`, `Upload`, `Search`, `Filter`, `Refresh`, `Pencil`, `Trash`, `Send`.
- **Status/feedback:** `Info`, `Warning`, `Critical`, `Block`, `Check`, `StatusDot`,
  `NotificationDot`, `Spinner`, `Verified`, `ShieldCheck`.
- **Financeiro/banqi:** `Pix`, `Boleto`, `Card`, `CreditCard`, `Money`, `Coin`,
  `Wallet`, `Bank`, `Bill`, `Invoice`, `Transfer`, `Bitcoin`.
- **Marcas:** `Banqi`, `CasasBahia`, `Google`, `Facebook`, `Instagram`, `Linkedin`,
  `Twitter`, `Youtube`.

> Lista completa: arquivos em `banqi-icons/src/icons/*.tsx`. Para conferir
> rapidamente, importe e renderize a partir do barril.

## Adicionar / atualizar ícones

Os ícones **não** se editam à mão — são gerados. No repositório `banqi-icons`:

1. Coloque o `.svg` em `src/assets/` (24×24, `viewBox="0 0 24 24"`, cor sólida única).
2. Rode `npm run generate` (SVGR: `src/assets` → `src/icons` + barril).
3. `npm run build` para publicar `dist/` (ESM + CJS + `.d.ts`).

O design system consome o `dist` via portal link; após `build`, os novos ícones
ficam disponíveis no import `banqi-icons`.

## Storybook (web)

No ambiente web do Storybook, `react-native-svg` é substituído por um stub
([.storybook/mocks/react-native-svg.tsx](../../../.storybook/mocks/react-native-svg.tsx))
que mapeia `Svg`/`Path`/`Circle`/… para elementos SVG do HTML e preserva `color`
como CSS, de modo que `fill="currentColor"` continue funcionando. `banqi-icons`
também é excluído do pre-bundle do Vite (`optimizeDeps.exclude`). Nenhuma ação é
necessária ao usar ícones em stories — apenas importe de `banqi-icons`.

## Critérios de aceite (QA)

- [ ] Todo ícone visível na UI vem de `banqi-icons` (nenhum SVG inline ou de terceiros).
- [ ] A cor de cada ícone vem de um token semântico do tema (sem literais de cor).
- [ ] Ícones acompanham a cor de conteúdo/texto do componente que os contém e mudam
      corretamente entre tema claro e escuro.
- [ ] `size` segue os slots padrão (16 / 20 / 24) conforme o contexto.
- [ ] Em controles só-ícone, o `accessibilityLabel` está no componente container,
      não no ícone; ícones decorativos não poluem o leitor de tela.
- [ ] Renderiza no Storybook web (via stub) e no app nativo (via `react-native-svg`).
