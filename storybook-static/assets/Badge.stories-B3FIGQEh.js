import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-wjN1KwZK.js";import{V as a,T as m,w as n}from"./base-m3uPMzji.js";import{B as o}from"./Badge-DpLDAuLx.js";import{u as v}from"./ThemeProvider-D24FPcro.js";const F={title:"Components/Badge",component:o,tags:["autodocs"],decorators:[t=>e.jsx(a,{style:{alignItems:"flex-start"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:`
Componente Badge do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 795-754).

Suporta **6 variantes** (highlight, neutral, accent, success, warning, critical) × **estado disabled**,
com dot de status opcional. Componente puramente visual — sem interação.
Consome tokens via \`useTheme()\`.
`}}},argTypes:{variant:{control:"select",options:["highlight","neutral","accent","success","warning","critical"],table:{defaultValue:{summary:"neutral"}}},showDot:{control:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},label:{control:"text"}},args:{label:"Label",variant:"accent",showDot:!1,disabled:!1}},s={name:"Playground"},p=["highlight","neutral","accent","success","warning","critical"];function c({text:t}){const{theme:d}=v();return e.jsx(m,{style:{fontFamily:n.fontFamily,fontSize:n.fontSize.x3,fontWeight:"700",color:d.content.default,marginBottom:8},children:t})}const l={name:"Full Matrix",parameters:{docs:{description:{story:"Grid completo: todas as variantes × sem dot / com dot / disabled."}}},render:()=>e.jsxs(a,{style:{padding:16,gap:20},children:[e.jsxs(a,{style:{gap:10},children:[e.jsx(c,{text:"Status=False"}),e.jsx(a,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:p.map(t=>e.jsx(o,{label:t,variant:t},t))})]}),e.jsxs(a,{style:{gap:10},children:[e.jsx(c,{text:"Status=True"}),e.jsx(a,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:p.map(t=>e.jsx(o,{label:t,variant:t,showDot:!0},t))})]}),e.jsxs(a,{style:{gap:10},children:[e.jsx(c,{text:"Disabled"}),e.jsxs(a,{style:{flexDirection:"row",gap:8},children:[e.jsx(o,{label:"Label",disabled:!0}),e.jsx(o,{label:"Label",disabled:!0,showDot:!0})]})]})]})},i={name:"In Context",parameters:{docs:{description:{story:"Exemplo de uso real: badges em itens de lista."}}},render:()=>{const{theme:t}=v(),d=[{title:"Pix recebido",amount:"R$ 150,00",badge:{label:"Recebido",variant:"success"}},{title:"Boleto pendente",amount:"R$ 89,90",badge:{label:"Pendente",variant:"warning",showDot:!0}},{title:"Transferência",amount:"R$ 500,00",badge:{label:"Novo",variant:"accent"}},{title:"Pagamento recusado",amount:"R$ 200,00",badge:{label:"Recusado",variant:"critical"}},{title:"Conta bloqueada",amount:"—",badge:{label:"Inativo",disabled:!0}}];return e.jsx(a,{style:{padding:16,gap:0},children:d.map((r,S)=>e.jsxs(a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingVertical:12,borderBottomWidth:1,borderBottomColor:t.stroke.default},children:[e.jsx(m,{style:{fontFamily:n.fontFamily,fontSize:n.fontSize.x3_5,color:t.content.default,flex:1},children:r.title}),e.jsx(m,{style:{fontFamily:n.fontFamily,fontSize:n.fontSize.x3_5,fontWeight:"600",color:t.content.default,marginRight:8},children:r.amount}),e.jsx(o,{...r.badge,label:r.badge.label})]},S))})}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,y,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story: 'Grid completo: todas as variantes × sem dot / com dot / disabled.'
      }
    }
  },
  render: () => <View style={{
    padding: 16,
    gap: 20
  }}>\r
      <View style={{
      gap: 10
    }}>\r
        <SectionTitle text="Status=False" />\r
        <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
      }}>\r
          {VARIANTS.map(v => <Badge key={v} label={v} variant={v} />)}\r
        </View>\r
      </View>\r
      <View style={{
      gap: 10
    }}>\r
        <SectionTitle text="Status=True" />\r
        <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
      }}>\r
          {VARIANTS.map(v => <Badge key={v} label={v} variant={v} showDot />)}\r
        </View>\r
      </View>\r
      <View style={{
      gap: 10
    }}>\r
        <SectionTitle text="Disabled" />\r
        <View style={{
        flexDirection: 'row',
        gap: 8
      }}>\r
          <Badge label="Label" disabled />\r
          <Badge label="Label" disabled showDot />\r
        </View>\r
      </View>\r
    </View>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,w,V;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'In Context',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: badges em itens de lista.'
      }
    }
  },
  render: () => {
    const {
      theme
    } = useTheme();
    const items = [{
      title: 'Pix recebido',
      amount: 'R$ 150,00',
      badge: {
        label: 'Recebido',
        variant: 'success' as BadgeVariant
      }
    }, {
      title: 'Boleto pendente',
      amount: 'R$ 89,90',
      badge: {
        label: 'Pendente',
        variant: 'warning' as BadgeVariant,
        showDot: true
      }
    }, {
      title: 'Transferência',
      amount: 'R$ 500,00',
      badge: {
        label: 'Novo',
        variant: 'accent' as BadgeVariant
      }
    }, {
      title: 'Pagamento recusado',
      amount: 'R$ 200,00',
      badge: {
        label: 'Recusado',
        variant: 'critical' as BadgeVariant
      }
    }, {
      title: 'Conta bloqueada',
      amount: '—',
      badge: {
        label: 'Inativo',
        disabled: true
      }
    }];
    return <View style={{
      padding: 16,
      gap: 0
    }}>\r
        {items.map((item, i) => <View key={i} style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: theme.stroke.default
      }}>\r
            <Text style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize.x3_5,
          color: theme.content.default,
          flex: 1
        }}>\r
              {item.title}\r
            </Text>\r
            <Text style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize.x3_5,
          fontWeight: '600',
          color: theme.content.default,
          marginRight: 8
        }}>\r
              {item.amount}\r
            </Text>\r
            <Badge {...item.badge} label={item.badge.label} />\r
          </View>)}\r
      </View>;
  }
}`,...(V=(w=i.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const C=["Playground","FullMatrix","InContext"];export{l as FullMatrix,i as InContext,s as Playground,C as __namedExportsOrder,F as default};
