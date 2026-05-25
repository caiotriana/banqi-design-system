import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-wjN1KwZK.js";import{d as C,v as N,r as X,x as d,t as c,s as g,V as n,T as I}from"./base-DPM9NSJ_.js";import{u as Z}from"./ThemeProvider-D24FPcro.js";import{A as u}from"./Animated-CZFtwW3c.js";import{M as $}from"./index-BOkGXpOT.js";import{B as o}from"./Badge-C6n5csGF.js";import"./extends-CF3RwP-h.js";import"./index-BkewXaNL.js";const R=c.x5,ee=c.x4,j=X.x6,B=c.x28,te=c.x2,re=c.x1;function ae(t,a,p){return p?{cardBg:t.surface.accent.primarySuperSubtle,cardBorderColor:"transparent",cardBorderWidth:C.none,overlayColor:t.surface.common.pressed,titleColor:t.content.default,descriptionColor:t.content.subtle}:a?{cardBg:t.surface.accent.primarySuperSubtle,cardBorderColor:t.stroke.default,cardBorderWidth:C.quarter,overlayColor:t.surface.common.hover,titleColor:t.content.default,descriptionColor:t.content.subtle}:{cardBg:t.surface.accent.primarySuperSubtle,cardBorderColor:t.stroke.default,cardBorderWidth:C.quarter,overlayColor:null,titleColor:t.content.default,descriptionColor:t.content.subtle}}const s=N.create({shadowWrapper:{alignSelf:"flex-start",borderRadius:j},card:{width:B+R*2,borderRadius:j,padding:R,gap:ee,overflow:"hidden"},top:{flexDirection:"row",alignItems:"center",gap:te,width:B},trailing:{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},bottom:{gap:re,width:B},title:{fontFamily:d.fontFamily,fontWeight:"600",fontSize:d.fontSize.x3_5,lineHeight:d.lineHeight.x4,includeFontPadding:!1},description:{fontFamily:d.fontFamily,fontWeight:"400",fontSize:d.fontSize.x3_5,lineHeight:d.lineHeight.x4,includeFontPadding:!1},overlay:{...N.absoluteFill,borderRadius:j}});function r({title:t,description:a,leading:p,trailing:f,onPress:L,accessibilityLabel:M,testID:Q}){const{theme:D}=Z(),v=y.useRef(new u.Value(1)).current,[P,T]=y.useState(!1),[S,w]=y.useState(!1),l=ae(D,P,S);function U(){return S?-1.5:P?g.axis.third:g.axis.quarter}function Y(){w(!0),u.spring(v,{toValue:.97,useNativeDriver:!0,speed:50,bounciness:0}).start()}function J(){w(!1),u.spring(v,{toValue:1,useNativeDriver:!0,speed:50,bounciness:2}).start()}const K=p!=null||f!=null;return e.jsx(u.View,{style:[s.shadowWrapper,{transform:[{scale:v}]},{shadowColor:D.elevation.default,shadowOffset:{width:g.axis.none,height:U()},shadowOpacity:1,shadowRadius:g.blur.none,elevation:S?1:P?4:2}],children:e.jsxs($,{onPress:L,onPressIn:Y,onPressOut:J,onHoverIn:()=>T(!0),onHoverOut:()=>T(!1),accessible:!0,accessibilityRole:"button",accessibilityLabel:M??t,testID:Q,style:[s.card,{backgroundColor:l.cardBg,borderColor:l.cardBorderColor,borderWidth:l.cardBorderWidth}],children:[K&&e.jsxs(n,{style:s.top,children:[p,f!=null&&e.jsx(n,{style:s.trailing,children:f})]}),e.jsxs(n,{style:s.bottom,children:[e.jsx(I,{style:[s.title,{color:l.titleColor}],numberOfLines:2,children:t}),a!=null&&e.jsx(I,{style:[s.description,{color:l.descriptionColor}],numberOfLines:2,children:a})]}),l.overlayColor!=null&&e.jsx(n,{style:[s.overlay,{backgroundColor:l.overlayColor}],pointerEvents:"none"})]})})}r.__docgenInfo={description:`Shortcut — card de atalho interativo.

Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
(node 797:2489). Suporta 3 estados (enabled, hover, pressed).

Componente composable — os slots \`leading\` e \`trailing\` aceitam qualquer
ReactNode, sem dependência de ícone ou Badge específicos.

@example
// Com ícone e badge (composição no lado do consumidor)
import { Shortcut } from './Shortcut';
import { Badge } from '../Badge';

<Shortcut
  title="Pix"
  description="Transferência instantânea"
  leading={<MyIcon name="pix" size={20} />}
  trailing={<Badge label="Novo" variant="accent" />}
  onPress={() => navigate('pix')}
/>`,methods:[],displayName:"Shortcut",props:{title:{required:!0,tsType:{name:"string"},description:"Título principal — Label/Small: DM Sans 600, 14px"},description:{required:!1,tsType:{name:"string"},description:`Descrição/subtítulo — Caption/Medium: DM Sans 400, 14px.
Quando omitida, não é renderizada.`},leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Slot de ícone à esquerda do topo (Leading).
Aceita qualquer ReactNode — o componente não impõe o tipo de ícone.
Quando omitido, o slot não é renderizado.`},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Slot de trailing à direita do topo (Badge, Notification, etc.).
Aceita qualquer ReactNode — o componente não impõe o tipo de elemento.
Quando omitido, o slot não é renderizado.`},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback disparado ao pressionar o shortcut"},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Label descritivo para leitores de tela"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};function i({color:t="#191E2F"}){return e.jsx(n,{style:{width:20,height:20,borderRadius:4,backgroundColor:t,opacity:.2}})}const ue={title:"Components/Shortcut",component:r,tags:["autodocs"],decorators:[t=>e.jsx(n,{style:{alignItems:"flex-start"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
Componente Shortcut do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-2489).
Card de atalho interativo com suporte a 3 estados (enabled, hover, pressed).
**Composable** — os slots \`leading\` e \`trailing\` aceitam qualquer \`ReactNode\`:
- \`leading\`: slot de ícone (esquerda do topo)
- \`trailing\`: slot de badge/notificação (direita do topo)
O componente **não importa** Badge nem ícones diretamente.
No consumidor:
\`\`\`tsx
import { Shortcut } from '../Shortcut';
import { Badge } from '../Badge';
<Shortcut
  title="Pix"
  description="Transferência instantânea"
  leading={<Icon name="pix" size={20} />}
  trailing={<Badge label="Novo" variant="accent" />}
  onPress={() => navigate('pix')}
/>
\`\`\`
`}}},argTypes:{title:{control:"text"},description:{control:"text"},leading:{table:{disable:!0}},trailing:{table:{disable:!0}},onPress:{table:{disable:!0}}},args:{title:"Title",description:"Description"}},m={name:"Playground",render:t=>e.jsx(r,{...t,leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Novo",variant:"accent"}),onPress:()=>{}})},b={name:"Slot Variants",parameters:{docs:{description:{story:"Todas as combinações de slots opcionais: com/sem leading, trailing e description."}}},render:()=>e.jsxs(n,{style:{gap:12},children:[e.jsx(r,{title:"Com todos os slots",description:"Description",leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Novo",variant:"accent"}),onPress:()=>{}}),e.jsx(r,{title:"Sem description",leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Novo",variant:"accent"}),onPress:()=>{}}),e.jsx(r,{title:"Sem leading",description:"Description",trailing:e.jsx(o,{label:"Novo",variant:"accent"}),onPress:()=>{}}),e.jsx(r,{title:"Sem trailing",description:"Description",leading:e.jsx(i,{}),onPress:()=>{}}),e.jsx(r,{title:"Apenas texto",description:"Description",onPress:()=>{}})]})},h={name:"Trailing / Badge Variants",parameters:{docs:{description:{story:"Diferentes badges no slot trailing. O Shortcut não depende do tipo de badge usado."}}},render:()=>e.jsxs(n,{style:{gap:12},children:[e.jsx(r,{title:"Pix",description:"Transferência instantânea",leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Novo",variant:"accent"}),onPress:()=>{}}),e.jsx(r,{title:"Boleto",description:"Pagamento de contas",leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Pendente",variant:"warning",showDot:!0}),onPress:()=>{}}),e.jsx(r,{title:"Transferência",description:"TED e DOC",leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Aprovado",variant:"success"}),onPress:()=>{}}),e.jsx(r,{title:"Cartão",description:"Crédito e débito",leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Bloqueado",variant:"critical"}),onPress:()=>{}}),e.jsx(r,{title:"Extrato",description:"Histórico de transações",leading:e.jsx(i,{}),trailing:e.jsx(o,{label:"Destaque",variant:"highlight"}),onPress:()=>{}})]})},x={name:"Shortcut Grid",parameters:{docs:{description:{story:"Exemplo de uso real: grid de atalhos na home do app."}}},render:()=>{const t=[{title:"Pix",description:"Enviar e receber",badge:{label:"Novo",variant:"accent"}},{title:"Boleto",description:"Pagar contas",badge:{label:"3",variant:"critical"}},{title:"Transferir",description:"TED e DOC"},{title:"Cobrar",description:"Gere uma cobrança",badge:{label:"Beta",variant:"highlight"}},{title:"Recarga",description:"Celular e TV"},{title:"Cartão",description:"Virtual e físico"}];return e.jsx(n,{style:{flexDirection:"row",flexWrap:"wrap",gap:12},children:t.map(a=>e.jsx(r,{title:a.title,description:a.description,leading:e.jsx(i,{}),trailing:a.badge?e.jsx(o,{label:a.badge.label,variant:a.badge.variant}):void 0,onPress:()=>{},accessibilityLabel:a.title},a.title))})}};var q,V,O;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Shortcut {...args} leading={<PlaceholderIcon />} trailing={<Badge label="Novo" variant="accent" />} onPress={() => {}} />
}`,...(O=(V=m.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var A,E,W;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Slot Variants',
  parameters: {
    docs: {
      description: {
        story: 'Todas as combinações de slots opcionais: com/sem leading, trailing e description.'
      }
    }
  },
  render: () => <View style={{
    gap: 12
  }}>\r
      <Shortcut title="Com todos os slots" description="Description" leading={<PlaceholderIcon />} trailing={<Badge label="Novo" variant="accent" />} onPress={() => {}} />\r
      <Shortcut title="Sem description" leading={<PlaceholderIcon />} trailing={<Badge label="Novo" variant="accent" />} onPress={() => {}} />\r
      <Shortcut title="Sem leading" description="Description" trailing={<Badge label="Novo" variant="accent" />} onPress={() => {}} />\r
      <Shortcut title="Sem trailing" description="Description" leading={<PlaceholderIcon />} onPress={() => {}} />\r
      <Shortcut title="Apenas texto" description="Description" onPress={() => {}} />\r
    </View>
}`,...(W=(E=b.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var _,z,F;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Trailing / Badge Variants',
  parameters: {
    docs: {
      description: {
        story: 'Diferentes badges no slot trailing. O Shortcut não depende do tipo de badge usado.'
      }
    }
  },
  render: () => <View style={{
    gap: 12
  }}>\r
      <Shortcut title="Pix" description="Transferência instantânea" leading={<PlaceholderIcon />} trailing={<Badge label="Novo" variant="accent" />} onPress={() => {}} />\r
      <Shortcut title="Boleto" description="Pagamento de contas" leading={<PlaceholderIcon />} trailing={<Badge label="Pendente" variant="warning" showDot />} onPress={() => {}} />\r
      <Shortcut title="Transferência" description="TED e DOC" leading={<PlaceholderIcon />} trailing={<Badge label="Aprovado" variant="success" />} onPress={() => {}} />\r
      <Shortcut title="Cartão" description="Crédito e débito" leading={<PlaceholderIcon />} trailing={<Badge label="Bloqueado" variant="critical" />} onPress={() => {}} />\r
      <Shortcut title="Extrato" description="Histórico de transações" leading={<PlaceholderIcon />} trailing={<Badge label="Destaque" variant="highlight" />} onPress={() => {}} />\r
    </View>
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,H,k;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Shortcut Grid',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: grid de atalhos na home do app.'
      }
    }
  },
  render: () => {
    const shortcuts = [{
      title: 'Pix',
      description: 'Enviar e receber',
      badge: {
        label: 'Novo',
        variant: 'accent' as const
      }
    }, {
      title: 'Boleto',
      description: 'Pagar contas',
      badge: {
        label: '3',
        variant: 'critical' as const
      }
    }, {
      title: 'Transferir',
      description: 'TED e DOC'
    }, {
      title: 'Cobrar',
      description: 'Gere uma cobrança',
      badge: {
        label: 'Beta',
        variant: 'highlight' as const
      }
    }, {
      title: 'Recarga',
      description: 'Celular e TV'
    }, {
      title: 'Cartão',
      description: 'Virtual e físico'
    }];
    return <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12
    }}>\r
        {shortcuts.map(item => <Shortcut key={item.title} title={item.title} description={item.description} leading={<PlaceholderIcon />} trailing={item.badge ? <Badge label={item.badge.label} variant={item.badge.variant} /> : undefined} onPress={() => {}} accessibilityLabel={item.title} />)}\r
      </View>;
  }
}`,...(k=(H=x.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const me=["Playground","SlotVariants","TrailingBadgeVariants","ShortcutGrid"];export{m as Playground,x as ShortcutGrid,b as SlotVariants,h as TrailingBadgeVariants,me as __namedExportsOrder,ue as default};
