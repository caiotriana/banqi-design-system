import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-wjN1KwZK.js";import{v as te,d as u,t,x as a,r as ae,s as S,V as n,T as m}from"./base-DPM9NSJ_.js";import{u as J}from"./ThemeProvider-D24FPcro.js";import{M as L}from"./index-BOkGXpOT.js";import"./extends-CF3RwP-h.js";const ne=344,ie=t.x5,re=ae.x4,se=t.x3,le=t.x3,ce=t.x1;function de(e,i){switch(i){case"standard":return{bg:e.surface.accent.primarySuperSubtle,borderColor:e.stroke.default,textColor:e.content.default,linkColor:e.content.accent.primary,shadowColor:e.elevation.default};case"info":return{bg:e.surface.feedback.infoSubtle,borderColor:e.stroke.feedback.infoSubtle,textColor:e.content.feedback.info,linkColor:e.content.feedback.info,shadowColor:e.elevation.default};case"success":return{bg:e.surface.feedback.successSubtle,borderColor:e.stroke.feedback.successSubtle,textColor:e.content.feedback.success,linkColor:e.content.feedback.success,shadowColor:e.elevation.default};case"attention":return{bg:e.surface.feedback.warningSubtle,borderColor:e.stroke.feedback.warningSubtle,textColor:e.content.feedback.warning,linkColor:e.content.feedback.warning,shadowColor:e.elevation.default};case"critical":return{bg:e.surface.feedback.criticalSubtle,borderColor:e.stroke.feedback.criticalSubtle,textColor:e.content.feedback.critical,linkColor:e.content.feedback.critical,shadowColor:e.elevation.default}}}function ue(e){return{shadowColor:e,shadowOffset:{width:S.axis.none,height:S.axis.quarter},shadowOpacity:1,shadowRadius:S.blur.none,elevation:2}}const r=te.create({card:{flexDirection:"row",width:ne,borderRadius:re,padding:ie,gap:se,alignSelf:"flex-start"},contentWrapper:{flex:1,gap:le},mainContent:{gap:ce},title:{fontFamily:a.fontFamily,fontWeight:"600",fontSize:a.fontSize.x3_5,lineHeight:a.lineHeight.x4,includeFontPadding:!1},description:{fontFamily:a.fontFamily,fontWeight:"400",fontSize:a.fontSize.x3_5,lineHeight:a.lineHeight.x5,includeFontPadding:!1},linkAction:{flexDirection:"row",alignItems:"center",gap:t.x1,alignSelf:"flex-start",height:t.x4},linkText:{fontFamily:a.fontFamily,fontWeight:"600",fontSize:a.fontSize.x3_5,lineHeight:a.lineHeight.x4,includeFontPadding:!1},arrowContainer:{width:t.x4,height:t.x4,alignItems:"center",justifyContent:"center"},arrow:{width:t.x1+2,height:t.x1+2,borderTopWidth:u.quarter+.5,borderRightWidth:u.quarter+.5,transform:[{rotate:"45deg"}]},closeButton:{width:t.x6,height:t.x6,alignItems:"center",justifyContent:"center"},closeIcon:{width:t.x3,height:t.x3,alignItems:"center",justifyContent:"center"},closeLine1:{position:"absolute",width:t.x3,height:u.quarter+.5,borderRadius:u.quarter,transform:[{rotate:"45deg"}]},closeLine2:{position:"absolute",width:t.x3,height:u.quarter+.5,borderRadius:u.quarter,transform:[{rotate:"-45deg"}]}});function me({color:e}){return o.jsx(n,{style:r.arrowContainer,children:o.jsx(n,{style:[r.arrow,{borderColor:e}]})})}function pe({color:e}){return o.jsxs(n,{style:r.closeIcon,children:[o.jsx(n,{style:[r.closeLine1,{backgroundColor:e}]}),o.jsx(n,{style:[r.closeLine2,{backgroundColor:e}]})]})}function s({variant:e="standard",title:i,description:w,icon:T,actionLabel:v,onActionPress:Y,onClose:I,accessibilityLabel:Z,testID:ee}){const{theme:oe}=J(),d=de(oe,e),j=v!=null;return o.jsxs(n,{accessible:!0,accessibilityRole:"alert",accessibilityLabel:Z??i??w,testID:ee,style:[r.card,{backgroundColor:d.bg},j&&{borderWidth:u.quarter,borderColor:d.borderColor,...ue(d.shadowColor)}],children:[T!=null&&T,o.jsxs(n,{style:r.contentWrapper,children:[o.jsxs(n,{style:r.mainContent,children:[i!=null&&o.jsx(m,{style:[r.title,{color:d.textColor}],numberOfLines:1,children:i}),o.jsx(m,{style:[r.description,{color:d.textColor}],children:w})]}),j&&o.jsxs(L,{onPress:Y,accessible:!0,accessibilityRole:"link",accessibilityLabel:v,style:r.linkAction,children:[o.jsx(m,{style:[r.linkText,{color:d.linkColor}],children:v}),o.jsx(me,{color:d.linkColor})]})]}),I!=null&&o.jsx(L,{onPress:I,accessible:!0,accessibilityRole:"button",accessibilityLabel:"Fechar",style:r.closeButton,children:o.jsx(pe,{color:d.textColor})})]})}s.__docgenInfo={description:`Callout — componente de mensagem informativa contextual.

Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
(node 797-1970). Suporta 5 variantes × actionable/non-actionable × closable.

O slot \`icon\` é composable — aceita qualquer ReactNode.
O componente não importa ícones diretamente.

@example
// Actionable com ícone (composição no lado do consumidor)
<Callout
  variant="info"
  title="Atenção"
  description="Sua senha expira em 3 dias."
  icon={<InfoIcon size={20} />}
  actionLabel="Alterar senha"
  onActionPress={() => navigate('change-password')}
  onClose={() => dismiss()}
/>`,methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'standard'
| 'info'
| 'success'
| 'attention'
| 'critical'`,elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'attention'"},{name:"literal",value:"'critical'"}]},description:`Variante visual do callout.
@default 'standard'`,defaultValue:{value:"'standard'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:`Título opcional — exibido acima da descrição (Title=true no Figma).
Quando omitido, apenas a descrição é exibida.`},description:{required:!0,tsType:{name:"string"},description:"Texto da mensagem — sempre presente"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Slot de ícone à esquerda (Leading no Figma).
Aceita qualquer ReactNode — o componente não impõe o tipo de ícone.
Quando omitido, o slot não é renderizado.`},actionLabel:{required:!1,tsType:{name:"string"},description:`Texto do link de ação (Actionable=True no Figma).
Quando fornecido, exibe o link action abaixo da mensagem,
e o card ganha borda e sombra.`},onActionPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback disparado ao pressionar o link de ação"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback disparado ao pressionar o botão de fechar (Closable=True no Figma).
Quando fornecido, exibe o ícone de fechar à direita.`},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Label descritivo para leitores de tela"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};function l({color:e="#191E2F"}){return o.jsx(n,{style:{width:20,height:20,borderRadius:10,borderWidth:2,borderColor:e,alignItems:"center",justifyContent:"center"},children:o.jsx(m,{style:{fontFamily:a.fontFamily,fontWeight:"700",fontSize:10,color:e,lineHeight:12},children:"i"})})}const y=["standard","info","success","attention","critical"],c={standard:"#191E2F",info:"#1466B8",success:"#1E730D",attention:"#8F5F10",critical:"#CE1732"},ye={title:"Components/Callout",component:s,tags:["autodocs"],decorators:[e=>o.jsx(n,{style:{alignItems:"flex-start"},children:o.jsx(e,{})})],parameters:{docs:{description:{component:`
Componente Callout do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-1970).
Suporta **5 variantes** (standard, info, success, attention, critical) × **actionable** × **closable**.
- **Actionable=False**: sem borda, sem sombra
- **Actionable=True** (quando \`actionLabel\` fornecido): ganha borda variant-specific e Elevation/Enabled
O slot \`icon\` é **composable** — aceita qualquer ReactNode.
\`\`\`tsx
import { Callout } from '../Callout';
<Callout
  variant="info"
  title="Atenção"
  description="Sua senha expira em 3 dias."
  icon={<InfoIcon size={20} />}
  actionLabel="Alterar senha"
  onActionPress={() => navigate('change-password')}
  onClose={() => dismiss()}
/>
\`\`\`
`}}},argTypes:{variant:{control:"select",options:y,table:{defaultValue:{summary:"standard"}}},title:{control:"text"},description:{control:"text"},actionLabel:{control:"text"},icon:{table:{disable:!0}},onActionPress:{table:{disable:!0}},onClose:{table:{disable:!0}}},args:{variant:"info",title:"Title",description:"Description message with two lines or more."}},p={name:"Playground",render:e=>o.jsx(s,{...e,icon:o.jsx(l,{color:c[e.variant??"standard"]}),actionLabel:e.actionLabel,onActionPress:()=>{},onClose:()=>{}})};function K({text:e}){const{theme:i}=J();return o.jsx(m,{style:{fontFamily:a.fontFamily,fontSize:a.fontSize.x3,fontWeight:"700",color:i.content.default,marginBottom:8},children:e})}const f={name:"All Variants",parameters:{docs:{description:{story:"Todas as variantes com ícone (Actionable=False). O ícone usa a cor do texto da variante."}}},render:()=>o.jsxs(n,{style:{gap:12},children:[o.jsx(K,{text:"Actionable=False / With Icon"}),y.map(e=>o.jsx(s,{variant:e,title:"Title",description:"Description message with two lines or more.",icon:o.jsx(l,{color:c[e]})},e))]})},b={name:"All Variants Actionable",parameters:{docs:{description:{story:"Todas as variantes com actionLabel (Actionable=True). Ganha borda variant-specific e Elevation/Enabled."}}},render:()=>o.jsxs(n,{style:{gap:12},children:[o.jsx(K,{text:"Actionable=True"}),y.map(e=>o.jsx(s,{variant:e,title:"Title",description:"Description message with two lines or more.",icon:o.jsx(l,{color:c[e]}),actionLabel:"Link",onActionPress:()=>{}},e))]})},g={name:"Without Title",parameters:{docs:{description:{story:"Callout sem título (Title=False no Figma) — apenas a descrição é exibida."}}},render:()=>o.jsx(n,{style:{gap:12},children:y.map(e=>o.jsx(s,{variant:e,description:"Description message with two lines or more.",icon:o.jsx(l,{color:c[e]})},e))})},x={name:"Closable",parameters:{docs:{description:{story:"Fornecendo `onClose`, o botão × aparece à direita."}}},render:()=>{const[e,i]=A.useState(!0);return e?o.jsx(s,{variant:"info",title:"Informação importante",description:"Esta mensagem pode ser fechada pelo usuário.",icon:o.jsx(l,{color:c.info}),onClose:()=>i(!1)}):o.jsx(m,{style:{fontFamily:a.fontFamily,fontSize:14,color:"#9E9E9E"},children:"Callout fechado. Recarregue a story para ver novamente."})}},C={name:"Full Combo (Actionable + Closable)",parameters:{docs:{description:{story:"Callout com ícone, actionLabel e botão fechar simultaneamente."}}},render:()=>{const[e,i]=A.useState(!0);return e?o.jsx(s,{variant:"critical",title:"Ação necessária",description:"Sua conta precisa de verificação para continuar operando.",icon:o.jsx(l,{color:c.critical}),actionLabel:"Verificar agora",onActionPress:()=>{},onClose:()=>i(!1)}):o.jsx(m,{style:{fontFamily:a.fontFamily,fontSize:14,color:"#9E9E9E"},children:"Callout fechado."})}},h={name:"In Context",parameters:{docs:{description:{story:"Exemplo de uso real: callouts em tela de pagamento."}}},render:()=>{const[e,i]=A.useState(!0);return o.jsxs(n,{style:{gap:16,padding:16},children:[o.jsx(s,{variant:"success",title:"Pagamento confirmado",description:"Seu Pix de R$ 150,00 foi enviado com sucesso.",icon:o.jsx(l,{color:c.success}),onClose:()=>{}}),e&&o.jsx(s,{variant:"attention",title:"Limite atingido",description:"Você está próximo do limite diário de transferências.",icon:o.jsx(l,{color:c.attention}),actionLabel:"Aumentar limite",onActionPress:()=>{},onClose:()=>i(!1)}),o.jsx(s,{variant:"info",description:"Transações Pix ficam disponíveis em até 10 minutos.",icon:o.jsx(l,{color:c.info})})]})}};var k,F,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Callout {...args} icon={<PlaceholderIcon color={ICON_COLORS[args.variant ?? 'standard']} />} actionLabel={args.actionLabel} onActionPress={() => {}} onClose={() => {}} />
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,R,V;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    docs: {
      description: {
        story: 'Todas as variantes com ícone (Actionable=False). O ícone usa a cor do texto da variante.'
      }
    }
  },
  render: () => <View style={{
    gap: 12
  }}>\r
      <SectionTitle text="Actionable=False / With Icon" />\r
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} title="Title" description="Description message with two lines or more." icon={<PlaceholderIcon color={ICON_COLORS[variant]} />} />)}\r
    </View>
}`,...(V=(R=f.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var E,q,W;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'All Variants Actionable',
  parameters: {
    docs: {
      description: {
        story: 'Todas as variantes com actionLabel (Actionable=True). Ganha borda variant-specific e Elevation/Enabled.'
      }
    }
  },
  render: () => <View style={{
    gap: 12
  }}>\r
      <SectionTitle text="Actionable=True" />\r
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} title="Title" description="Description message with two lines or more." icon={<PlaceholderIcon color={ICON_COLORS[variant]} />} actionLabel="Link" onActionPress={() => {}} />)}\r
    </View>
}`,...(W=(q=b.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var N,_,D;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Without Title',
  parameters: {
    docs: {
      description: {
        story: 'Callout sem título (Title=False no Figma) — apenas a descrição é exibida.'
      }
    }
  },
  render: () => <View style={{
    gap: 12
  }}>\r
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} description="Description message with two lines or more." icon={<PlaceholderIcon color={ICON_COLORS[variant]} />} />)}\r
    </View>
}`,...(D=(_=g.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var z,H,B;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Closable',
  parameters: {
    docs: {
      description: {
        story: 'Fornecendo \`onClose\`, o botão × aparece à direita.'
      }
    }
  },
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? <Callout variant="info" title="Informação importante" description="Esta mensagem pode ser fechada pelo usuário." icon={<PlaceholderIcon color={ICON_COLORS.info} />} onClose={() => setVisible(false)} /> : <Text style={{
      fontFamily: typography.fontFamily,
      fontSize: 14,
      color: '#9E9E9E'
    }}>\r
        Callout fechado. Recarregue a story para ver novamente.\r
      </Text>;
  }
}`,...(B=(H=x.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var G,U,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Full Combo (Actionable + Closable)',
  parameters: {
    docs: {
      description: {
        story: 'Callout com ícone, actionLabel e botão fechar simultaneamente.'
      }
    }
  },
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? <Callout variant="critical" title="Ação necessária" description="Sua conta precisa de verificação para continuar operando." icon={<PlaceholderIcon color={ICON_COLORS.critical} />} actionLabel="Verificar agora" onActionPress={() => {}} onClose={() => setVisible(false)} /> : <Text style={{
      fontFamily: typography.fontFamily,
      fontSize: 14,
      color: '#9E9E9E'
    }}>\r
        Callout fechado.\r
      </Text>;
  }
}`,...(Q=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var M,$,X;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'In Context',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: callouts em tela de pagamento.'
      }
    }
  },
  render: () => {
    const [showWarning, setShowWarning] = useState(true);
    return <View style={{
      gap: 16,
      padding: 16
    }}>\r
        <Callout variant="success" title="Pagamento confirmado" description="Seu Pix de R$ 150,00 foi enviado com sucesso." icon={<PlaceholderIcon color={ICON_COLORS.success} />} onClose={() => {}} />\r
        {showWarning && <Callout variant="attention" title="Limite atingido" description="Você está próximo do limite diário de transferências." icon={<PlaceholderIcon color={ICON_COLORS.attention} />} actionLabel="Aumentar limite" onActionPress={() => {}} onClose={() => setShowWarning(false)} />}\r
        <Callout variant="info" description="Transações Pix ficam disponíveis em até 10 minutos." icon={<PlaceholderIcon color={ICON_COLORS.info} />} />\r
      </View>;
  }
}`,...(X=($=h.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const ve=["Playground","AllVariantsWithIcon","AllVariantsActionable","WithoutTitle","Closable","FullCombo","InContext"];export{b as AllVariantsActionable,f as AllVariantsWithIcon,x as Closable,C as FullCombo,h as InContext,p as Playground,g as WithoutTitle,ve as __namedExportsOrder,ye as default};
