import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-wjN1KwZK.js";import{d as s,r as O,q as c,u as D,s as g,V as a,T as z,w as l}from"./base-m3uPMzji.js";import{u as V}from"./ThemeProvider-D24FPcro.js";import{A as b}from"./Animated-CWQe7C5U.js";import{M as ae}from"./index-N69qlPG8.js";import"./extends-CF3RwP-h.js";import"./index-Dg8UTxH2.js";function te(n,o,r){return r?{backgroundColor:o.surface.common.disabled,iconColor:o.content.common.disabled,borderColor:"transparent",borderWidth:s.none}:{primary:{backgroundColor:o.surface.accent.primary,iconColor:o.content.common.onColor,borderColor:"transparent",borderWidth:s.none},secondary:{backgroundColor:o.surface.accent.primarySubtleOnSubtle,iconColor:o.content.accent.primary,borderColor:o.stroke.default,borderWidth:s.quarter},ghost:{backgroundColor:o.surface.common.ghost,iconColor:o.content.accent.primary,borderColor:"transparent",borderWidth:s.none},"ghost-oncolor":{backgroundColor:o.surface.common.ghost,iconColor:o.content.common.onColor,borderColor:"transparent",borderWidth:s.none},oncolor:{backgroundColor:o.surface.common.onColor,iconColor:o.content.accent.primary,borderColor:"transparent",borderWidth:s.none},critical:{backgroundColor:o.surface.feedback.critical,iconColor:o.content.common.onColor,borderColor:"transparent",borderWidth:s.none},"ghost-critical":{backgroundColor:o.surface.common.ghost,iconColor:o.content.feedback.critical,borderColor:"transparent",borderWidth:s.none}}[n]}function se(n){return n==="small"?{dimension:c.x5+c.x2*2,borderRadius:O.x3}:{dimension:c.x5+c.x3*2,borderRadius:O.x4}}const d=D.create({wrapper:{alignSelf:"flex-start"},pressable:{alignItems:"center",justifyContent:"center",overflow:"hidden"},iconContainer:{width:c.x5,height:c.x5,alignItems:"center",justifyContent:"center"},overlay:{...D.absoluteFillObject}}),ie=new Set(["ghost","ghost-oncolor","ghost-critical"]);function i({variant:n="primary",size:o="medium",disabled:r=!1,onPress:t,icon:w,accessibilityLabel:X,testID:Z}){const{theme:u}=V(),S=T.useRef(new b.Value(1)).current,[I,B]=T.useState(!1),[P,L]=T.useState(!1),j=te(n,u,r),{dimension:p,borderRadius:f}=se(o),ee=!r&&!ie.has(n);function oe(){return P?-1.5:I?g.axis.third:g.axis.quarter}function ne(){L(!0),b.spring(S,{toValue:.95,useNativeDriver:!0,speed:50,bounciness:0}).start()}function re(){L(!1),b.spring(S,{toValue:1,useNativeDriver:!0,speed:50,bounciness:2}).start()}return e.jsx(b.View,{style:[d.wrapper,{width:p,height:p,borderRadius:f,transform:[{scale:S}]},ee&&{shadowColor:u.elevation.default,shadowOffset:{width:g.axis.none,height:oe()},shadowOpacity:1,shadowRadius:g.blur.none,elevation:P?1:I?4:2}],children:e.jsx(ae,{onPress:r?void 0:t,onPressIn:r?void 0:ne,onPressOut:r?void 0:re,onHoverIn:r?void 0:()=>B(!0),onHoverOut:()=>B(!1),disabled:r,accessible:!0,accessibilityRole:"button",accessibilityLabel:X,accessibilityState:{disabled:r},testID:Z,style:[d.pressable,{width:p,height:p,borderRadius:f,backgroundColor:j.backgroundColor,borderColor:j.borderColor,borderWidth:j.borderWidth}],children:({pressed:A})=>e.jsxs(e.Fragment,{children:[A&&!r&&e.jsx(a,{style:[d.overlay,{backgroundColor:u.surface.common.pressed,borderRadius:f}],pointerEvents:"none"}),I&&!A&&!r&&e.jsx(a,{style:[d.overlay,{backgroundColor:u.surface.common.hover,borderRadius:f}],pointerEvents:"none"}),e.jsx(a,{style:d.iconContainer,children:w})]})})})}i.__docgenInfo={description:`IconButton — botão de ação com ícone centrado.

Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
(page node 797:1528 | component set node 46:3535). Consome tokens via
\`useTheme()\` e suporta 7 variantes, 4 estados (enabled, hover, pressed,
disabled) e 2 tamanhos (medium=44×44 r16, small=36×36 r12).

@example
<IconButton
  variant="primary"
  size="medium"
  icon={<MyIcon />}
  accessibilityLabel="Confirmar pagamento"
  onPress={handlePress}
/>`,methods:[],displayName:"IconButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'ghost'
| 'ghost-oncolor'
| 'oncolor'
| 'critical'
| 'ghost-critical'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'ghost-oncolor'"},{name:"literal",value:"'oncolor'"},{name:"literal",value:"'critical'"},{name:"literal",value:"'ghost-critical'"}]},description:`Variante visual do botão. Cada opção mapeia diretamente um symbol do Figma.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"Tamanho do botão.\n- `medium` — 44×44 px (padding 12 + icon 20), borderRadius 16\n- `small`  — 36×36 px (padding 8  + icon 20), borderRadius 12\n@default 'medium'",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Quando `true`, desabilita interações e aplica estilos de estado disabled.\n@default false",defaultValue:{value:"false",computed:!1}},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback disparado ao pressionar o botão"},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Nó React renderizado no centro do botão.
Aceita qualquer ícone: SVG component, react-native-vector-icons, etc.`},accessibilityLabel:{required:!0,tsType:{name:"string"},description:"Label descritivo para leitores de tela (obrigatório)"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};const ce={primary:"#ffffff",secondary:"#0033c6",ghost:"#0033c6","ghost-oncolor":"#ffffff",oncolor:"#0033c6",critical:"#ffffff","ghost-critical":"#ce1732"};function m({color:n="#fff"}){return e.jsx(a,{style:{width:20,height:20,borderRadius:10,borderWidth:2,borderColor:n}})}const k=["primary","secondary","ghost","ghost-oncolor","oncolor","critical","ghost-critical"],ye={title:"Components/IconButton",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
Componente IconButton do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-1528).

Suporta **7 variantes**, **4 estados** (enabled, hover, pressed, disabled) e **2 tamanhos** (medium 48px, small 36px).
Consome exclusivamente tokens do pacote \`banqi-tokens/rn\` via **ThemeProvider**.
`}}},argTypes:{variant:{control:"select",options:k,table:{type:{summary:"IconButtonVariant"},defaultValue:{summary:"primary"}}},size:{control:"radio",options:["medium","small"],table:{type:{summary:"IconButtonSize"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},icon:{table:{disable:!0}},onPress:{table:{disable:!0}}},args:{variant:"primary",size:"medium",disabled:!1,accessibilityLabel:"Ação"},render:n=>e.jsx(i,{...n,icon:e.jsx(m,{color:"#fff"})})},y={name:"Playground"};function R({label:n}){const{theme:o}=V();return e.jsx(z,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,color:o.content.subtle,marginTop:4,textAlign:"center"},children:n})}const h={name:"State / Disabled",parameters:{docs:{description:{story:"Todas as variantes no estado `disabled`. Visual unificado: fundo `surface.common.disabled`, ícone `content.common.disabled`."}}},render:()=>e.jsx(a,{style:{flexDirection:"row",flexWrap:"wrap",gap:16,padding:16},children:k.map(n=>e.jsxs(a,{style:{alignItems:"center"},children:[e.jsx(i,{variant:n,size:"medium",disabled:!0,accessibilityLabel:`${n} disabled`,icon:e.jsx(m,{color:"#9e9e9e"})}),e.jsx(R,{label:n})]},n))})},x={name:"OnColor Background",parameters:{docs:{description:{story:"Variantes `oncolor` e `ghost-oncolor` em contexto de uso correto: sobre `surface.accent.primary`."}}},render:()=>{const{theme:n}=V();return e.jsx(a,{style:{flexDirection:"row",gap:16,padding:24,backgroundColor:n.surface.accent.primary,borderRadius:16,alignSelf:"flex-start"},children:["oncolor","ghost-oncolor"].map(o=>e.jsxs(a,{style:{alignItems:"center"},children:[e.jsx(i,{variant:o,size:"medium",accessibilityLabel:o,icon:e.jsx(m,{color:o==="oncolor"?"#0033c6":"#fff"})}),e.jsx(z,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,color:n.content.common.onColor,marginTop:4},children:o})]},o))})}},v={name:"Critical Variants",parameters:{docs:{description:{story:"`critical` (fundo sólido vermelho) e `ghost-critical` (sem fundo, ícone vermelho). Para ações destrutivas ou alertas."}}},render:()=>e.jsx(a,{style:{flexDirection:"row",gap:16,padding:16},children:["critical","ghost-critical"].map(n=>e.jsxs(a,{style:{alignItems:"center"},children:[e.jsx(i,{variant:n,size:"medium",accessibilityLabel:n,icon:e.jsx(m,{color:"#fff"})}),e.jsx(R,{label:n})]},n))})},C={name:"Full Matrix — Variants × Sizes",parameters:{docs:{description:{story:"Todas as variantes × tamanhos (enabled). Referência visual para QA e design review."}}},render:()=>{const{theme:n}=V(),o=["medium","small"];return e.jsx(a,{style:{padding:16,gap:24},children:o.map(r=>e.jsxs(a,{children:[e.jsxs(z,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,fontWeight:"600",color:n.content.subtle,textTransform:"uppercase",letterSpacing:.4,marginBottom:12},children:["Size: ",r]}),e.jsx(a,{style:{flexDirection:"row",flexWrap:"wrap",gap:12},children:k.map(t=>{const w=t==="ghost-oncolor"||t==="oncolor";return e.jsxs(a,{style:{alignItems:"center"},children:[e.jsx(a,{style:{padding:8,borderRadius:24,backgroundColor:w?n.surface.accent.primary:"transparent"},children:e.jsx(i,{variant:t,size:r,accessibilityLabel:`${t} ${r}`,icon:e.jsx(m,{color:ce[t]})})}),e.jsx(R,{label:t})]},t)})})]},r))})}};var F,W,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(q=(W=y.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var N,_,M;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'State / Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Todas as variantes no estado \`disabled\`. Visual unificado: fundo \`surface.common.disabled\`, ícone \`content.common.disabled\`.'
      }
    }
  },
  render: () => <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    padding: 16
  }}>\r
      {ALL_VARIANTS.map(variant => <View key={variant} style={{
      alignItems: 'center'
    }}>\r
          <IconButton variant={variant} size="medium" disabled accessibilityLabel={\`\${variant} disabled\`} icon={<PlaceholderIcon color="#9e9e9e" />} />\r
          <VariantLabel label={variant} />\r
        </View>)}\r
    </View>
}`,...(M=(_=h.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var E,$,H;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'OnColor Background',
  parameters: {
    docs: {
      description: {
        story: 'Variantes \`oncolor\` e \`ghost-oncolor\` em contexto de uso correto: sobre \`surface.accent.primary\`.'
      }
    }
  },
  render: () => {
    const {
      theme
    } = useTheme();
    return <View style={{
      flexDirection: 'row',
      gap: 16,
      padding: 24,
      backgroundColor: theme.surface.accent.primary,
      borderRadius: 16,
      alignSelf: 'flex-start'
    }}>\r
        {(['oncolor', 'ghost-oncolor'] as IconButtonVariant[]).map(variant => <View key={variant} style={{
        alignItems: 'center'
      }}>\r
            <IconButton variant={variant} size="medium" accessibilityLabel={variant} icon={<PlaceholderIcon color={variant === 'oncolor' ? '#0033c6' : '#fff'} />} />\r
            <Text style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize.x3,
          color: theme.content.common.onColor,
          marginTop: 4
        }}>\r
              {variant}\r
            </Text>\r
          </View>)}\r
      </View>;
  }
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var Q,G,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Critical Variants',
  parameters: {
    docs: {
      description: {
        story: '\`critical\` (fundo sólido vermelho) e \`ghost-critical\` (sem fundo, ícone vermelho). Para ações destrutivas ou alertas.'
      }
    }
  },
  render: () => <View style={{
    flexDirection: 'row',
    gap: 16,
    padding: 16
  }}>\r
      {(['critical', 'ghost-critical'] as IconButtonVariant[]).map(variant => <View key={variant} style={{
      alignItems: 'center'
    }}>\r
          <IconButton variant={variant} size="medium" accessibilityLabel={variant} icon={<PlaceholderIcon color="#fff" />} />\r
          <VariantLabel label={variant} />\r
        </View>)}\r
    </View>
}`,...(Y=(G=v.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var J,K,U;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Full Matrix — Variants × Sizes',
  parameters: {
    docs: {
      description: {
        story: 'Todas as variantes × tamanhos (enabled). Referência visual para QA e design review.'
      }
    }
  },
  render: () => {
    const {
      theme
    } = useTheme();
    const sizes: IconButtonSize[] = ['medium', 'small'];
    return <View style={{
      padding: 16,
      gap: 24
    }}>\r
        {sizes.map(size => <View key={size}>\r
            <Text style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize.x3,
          fontWeight: '600',
          color: theme.content.subtle,
          textTransform: 'uppercase',
          letterSpacing: 0.4,
          marginBottom: 12
        }}>\r
              Size: {size}\r
            </Text>\r
            <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 12
        }}>\r
              {ALL_VARIANTS.map(variant => {
            const needsColorBg = variant === 'ghost-oncolor' || variant === 'oncolor';
            return <View key={variant} style={{
              alignItems: 'center'
            }}>\r
                    <View style={{
                padding: 8,
                borderRadius: 24,
                backgroundColor: needsColorBg ? theme.surface.accent.primary : 'transparent'
              }}>\r
                      <IconButton variant={variant} size={size} accessibilityLabel={\`\${variant} \${size}\`} icon={<PlaceholderIcon color={VARIANT_ICON_COLOR[variant]} />} />\r
                    </View>\r
                    <VariantLabel label={variant} />\r
                  </View>;
          })}\r
            </View>\r
          </View>)}\r
      </View>;
  }
}`,...(U=(K=C.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const he=["Playground","DisabledState","OnColorBackground","CriticalVariants","FullMatrix"];export{v as CriticalVariants,h as DisabledState,C as FullMatrix,x as OnColorBackground,y as Playground,he as __namedExportsOrder,ye as default};
