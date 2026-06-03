# InputText

> Campo de texto com rótulo, mensagem de apoio, prefixo, ícone à direita, botão de
> limpar e estados de feedback (sucesso/erro/aviso).

- **Import:** `import { InputText } from 'banqi-design-system'`
- **Fonte:** `src/components/InputText/InputText.tsx`
- **Categoria:** Formulário
- **Base:** `TextInput` (estende `TextInputProps`)

## Visão geral

Entrada de texto de linha única (ou conforme `TextInputProps`). Suporta rótulo
acima, mensagem de apoio (hint) abaixo, conteúdo de prefixo (string ou nó), ícone à
direita e ícones de feedback automáticos por estado. Em `default` com valor digitado,
exibe um botão "limpar".

## Anatomia

```
Label                                   ← opcional, acima
┌───────────────────────────────────┐
│ [prefix] valor digitado   [trail.] │   ← campo: borda + sombra
└───────────────────────────────────┘
Mensagem de apoio                       ← opcional, abaixo (cor por estado)
```

`trailing` resolve nesta ordem: `trailingIcon` (prop) → ícone de feedback do estado
(success/error/warning) → botão "limpar" (quando há valor, editável e estado
`default`).

## Propriedades

| Prop | Tipo | Default | Descrição |
| --- | --- | --- | --- |
| `label` | `string` | — | Rótulo acima do campo (`numberOfLines={1}`). |
| `hintMessage` | `string` | — | Mensagem de apoio abaixo do campo. |
| `size` | `InputTextSize` | `'default'` | `'default'` (16) ou `'large'` (32). |
| `state` | `InputTextState` | `'default'` | Ver Estados. |
| `prefix` | `React.ReactNode \| string` | — | Conteúdo fixo antes do texto (ex.: `"R$"`). |
| `trailingIcon` | `React.ReactNode` | — | Ícone à direita (substitui feedback/limpar). |
| _…rest_ | `TextInputProps` | — | Exceto `style`, `editable`. Inclui `value`, `onChangeText`, `placeholder`, etc. |

```ts
type InputTextSize = 'default' | 'large';
type InputTextState = 'default' | 'disabled' | 'readOnly' | 'success' | 'error' | 'warning';
```

## Tamanhos

| | `fontSize` do texto | `lineHeight` |
| --- | --- | --- |
| `default` | `x4` (16) | `x4` (16) |
| `large` | `x8` (32) | `x8` (32) |

Campo: padding `sizing.x5` (20) nos dois eixos, raio `radii.x4` (16), borda
`border.quarter` (1). Rótulo/hint: `fontSize.x3_5` (14), peso 600. Gap vertical
entre rótulo/campo/hint: `sizing.x2` (8).

## Estados

| Estado | Borda | Fundo | Texto | Hint | Editável? |
| --- | --- | --- | --- | --- | --- |
| `default` | `stroke.default` (foco: `stroke.accent.primary`) | `surface.default` | `content.default` | `content.subtle` | sim |
| `success` | `stroke.feedback.success` | `surface.default` | `content.default` | `content.feedback.success` | sim |
| `error` | `stroke.feedback.critical` | `surface.default` | `content.default` | `content.feedback.critical` | sim |
| `warning` | `stroke.feedback.warning` | `surface.default` | `content.default` | `content.feedback.warning` | sim |
| `disabled` | `stroke.common.disabled` | `surface.common.disabled` | `content.common.disabled` | `content.common.disabled` | **não** |
| `readOnly` | `stroke.common.disabled` | `surface.common.disabled` | `content.common.disabled` | `content.subtle` | **não** |

`placeholder` usa `content.subtle` (ou `content.common.disabled` em
disabled/readOnly), salvo `placeholderTextColor` explícito.

## Ícones de feedback

Os estados `success`/`error`/`warning` injetam automaticamente um ícone à direita
(check, círculo de erro, triângulo de aviso), desenhado com `View`s e colorido com a
cor do hint do estado. Um `trailingIcon` explícito tem prioridade sobre eles.

## Botão "limpar"

Aparece quando: há valor **e** o campo é editável **e** `state === 'default'`
**e** não há `trailingIcon`. Ao tocar: limpa o valor, foca o campo novamente.
Rótulo de acessibilidade: `"Limpar campo"`.

## Comportamento e interação

- Foco: borda muda para `stroke.accent.primary` (apenas no `default`) e a sombra
  inverte (igual ao padrão de elevação física). Elevação ativa quando editável.
- Tocar em qualquer ponto do campo foca o `TextInput`.
- Componente é **não-controlado por padrão** (mantém valor interno), mas respeita
  `value`/`onChangeText` se fornecidos.

## Mapeamento de tokens

| Elemento | Token |
| --- | --- |
| Fundo/borda/texto/hint | ver tabela de Estados |
| Borda em foco (default) | `stroke.accent.primary` |
| Sombra | `theme.elevation.default`, `shadow.axis.*`, `shadow.blur.none` |
| Raio/borda do campo | `radii.x4`, `border.quarter` |
| Padding/gap | `sizing.x5` / `sizing.x2` |
| Tipografia do texto | `fontSize.x4`/`x8`, peso 600 |

## Acessibilidade

- O campo nativo (`TextInput`) carrega a acessibilidade de entrada.
- Botão "limpar": `accessibilityRole="button"`, `accessibilityLabel="Limpar campo"`.
- O `Pressable` envoltório não é foco de acessibilidade (`accessible={false}`).

## Exemplo de uso

```tsx
<InputText label="E-mail" placeholder="voce@exemplo.com" keyboardType="email-address" />
<InputText label="Valor" prefix="R$" size="large" keyboardType="numeric" />
<InputText label="CPF" state="error" hintMessage="CPF inválido" value={cpf} onChangeText={setCpf} />
<InputText label="Protocolo" state="readOnly" value="2024-000123" />
```

## Critérios de aceite (QA)

- [ ] `default`/`large` aplicam 16/32 px de fonte ao texto digitado.
- [ ] Cada estado de feedback usa borda + cor de hint corretas; o ícone de feedback
      correspondente aparece à direita.
- [ ] `trailingIcon` explícito sobrepõe ícone de feedback e botão "limpar".
- [ ] Botão "limpar" só aparece em `default` editável com valor; limpa e refoca.
- [ ] `disabled` e `readOnly` não permitem edição; cores conforme tabela.
- [ ] Foco no `default` muda a borda para a cor de acento e inverte a sombra.
- [ ] Tocar no campo (não só no input) abre o teclado.
- [ ] Botão "limpar" é anunciado como "Limpar campo".
