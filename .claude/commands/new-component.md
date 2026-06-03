---
description: Cria um novo componente do design system seguindo .claude/specs/component-development.md (inspeção via MCP do Figma)
argument-hint: <NomeDoComponente> [url-ou-nodeId-do-figma]
---

# Criar novo componente — banqi Design System

**Fonte de verdade:** `.claude/specs/component-development.md`. Leia esse playbook (e os
arquivos que ele referencia) e **execute as fases na ordem**. Este comando só injeta os
parâmetros e reforça a disciplina de execução — todo o "como fazer" está na spec, não o
repita aqui.

## Parâmetros
- **Componente:** `$1`
- **Referência do Figma:** `$2` — URL ou `nodeId`. Se vazio, use o nó selecionado no
  Figma Desktop; se não houver nenhum, **peça a URL/nodeId antes de começar**.

## Disciplina de execução
- **Leia a spec antes de agir** e siga as fases dela; não improvise um fluxo próprio.
- **Antes de implementar (Fases 4+), pare e aguarde meu OK:** apresente a anatomia, as
  props/uniões propostas, o `accessibilityRole` e a tabela *variável Figma → token*
  (incluindo tokens faltantes a criar em `banqi-tokens`).
- **Peça confirmação antes de baixar assets** do Figma.
- Ao final, rode os portões (`yarn lint && yarn typecheck && yarn test && yarn prepare`)
  e **reporte contra o Definition of Done** da spec.
