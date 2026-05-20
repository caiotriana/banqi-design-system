import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-wjN1KwZK.js";import{r as U,d as c,u as A,w as l,q as T,s as f,V as m,T as x}from"./base-m3uPMzji.js";import{u as X}from"./ThemeProvider-D24FPcro.js";import{A as u}from"./Animated-CWQe7C5U.js";import{M as te}from"./index-N69qlPG8.js";import"./extends-CF3RwP-h.js";import"./index-Dg8UTxH2.js";const $=40,ne=T.x6,O=U.x2,B=T.x4,oe=U.x1,E=T.x1,Q=E,se=$-E-B,re=se-Q;function le(e,a,t,n,s){return t?{trackBg:a?e.surface.common.disabled:e.surface.default,trackBorderColor:a?"transparent":e.stroke.common.disabled,trackBorderWidth:a?c.none:c.quarter,knobColor:e.content.common.disabled,overlayColor:null,labelColor:e.content.common.disabled,hasShadow:!1}:s?{trackBg:a?e.surface.accent.primary:e.surface.default,trackBorderColor:a?"transparent":e.stroke.accent.primary,trackBorderWidth:a?c.none:c.quarter,knobColor:a?e.content.common.onColor:e.content.accent.primary,overlayColor:e.surface.common.pressed,labelColor:e.content.default,hasShadow:!0}:n?{trackBg:a?e.surface.accent.primary:e.surface.default,trackBorderColor:a?"transparent":e.stroke.accent.primary,trackBorderWidth:a?c.none:c.quarter,knobColor:a?e.content.common.onColor:e.content.accent.primary,overlayColor:e.surface.common.hover,labelColor:e.content.default,hasShadow:!0}:{trackBg:a?e.surface.accent.primary:e.surface.default,trackBorderColor:a?"transparent":e.stroke.default,trackBorderWidth:a?c.none:c.quarter,knobColor:a?e.content.common.onColor:e.content.accent.primary,overlayColor:null,labelColor:e.content.default,hasShadow:!0}}const p=A.create({container:{flexDirection:"row",alignItems:"center",gap:T.x2,alignSelf:"flex-start"},shadowWrapper:{alignSelf:"flex-start",borderRadius:O},track:{width:$,height:ne,borderRadius:O,overflow:"hidden"},knob:{position:"absolute",left:Q,top:E,width:B,height:B,borderRadius:oe},overlay:{...A.absoluteFillObject},label:{fontFamily:l.fontFamily,fontWeight:"400",fontSize:l.fontSize.x3_5,lineHeight:l.lineHeight.x5,includeFontPadding:!1}});function b({enabled:e=!1,onChange:a,label:t,disabled:n=!1,accessibilityLabel:s,testID:i}){const{theme:R}=X(),v=r.useRef(new u.Value(1)).current,C=r.useRef(new u.Value(e?1:0)).current,[k,W]=r.useState(!1),[w,j]=r.useState(!1),d=le(R,e,n,k,w);r.useEffect(()=>{u.spring(C,{toValue:e?1:0,useNativeDriver:!0,speed:20,bounciness:4}).start()},[e,C]);const Y=C.interpolate({inputRange:[0,1],outputRange:[0,re]});function Z(){return w?-1.5:k?f.axis.third:f.axis.quarter}function J(){j(!0),u.spring(v,{toValue:.95,useNativeDriver:!0,speed:50,bounciness:0}).start()}function ee(){j(!1),u.spring(v,{toValue:1,useNativeDriver:!0,speed:50,bounciness:2}).start()}function ae(){n||a==null||a(!e)}return o.jsxs(te,{onPress:ae,onPressIn:n?void 0:J,onPressOut:n?void 0:ee,onHoverIn:n?void 0:()=>W(!0),onHoverOut:()=>W(!1),disabled:n,accessible:!0,accessibilityRole:"switch",accessibilityLabel:s??t,accessibilityState:{checked:e,disabled:n},testID:i,style:p.container,children:[o.jsx(u.View,{style:[p.shadowWrapper,{transform:[{scale:v}]},d.hasShadow&&{shadowColor:R.elevation.default,shadowOffset:{width:f.axis.none,height:Z()},shadowOpacity:1,shadowRadius:f.blur.none,elevation:w?1:k?4:2}],children:o.jsxs(m,{style:[p.track,{backgroundColor:d.trackBg,borderColor:d.trackBorderColor,borderWidth:d.trackBorderWidth}],children:[o.jsx(u.View,{style:[p.knob,{backgroundColor:d.knobColor,transform:[{translateX:Y}]}]}),d.overlayColor!=null&&o.jsx(m,{style:[p.overlay,{backgroundColor:d.overlayColor,borderRadius:O}],pointerEvents:"none"})]})}),t!=null&&o.jsx(x,{style:[p.label,{color:d.labelColor}],numberOfLines:1,children:t})]})}b.__docgenInfo={description:`Toggle — componente de ativação binária (switch).

Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
(node 797:2684). Suporta 4 estados (enabled, hover, pressed, disabled)
e anima o knob entre as posições OFF/ON.

@example
const [enabled, setEnabled] = useState(false);

<Toggle
  enabled={enabled}
  onChange={setEnabled}
  label="Receber notificações"
/>`,methods:[],displayName:"Toggle",props:{enabled:{required:!1,tsType:{name:"boolean"},description:`Estado de ativação controlado.
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(enabled: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"enabled"}],return:{name:"void"}}},description:"Callback disparado ao pressionar o toggle"},label:{required:!1,tsType:{name:"string"},description:`Texto do label exibido ao lado do toggle.
Quando omitido, o label não é renderizado.`},disabled:{required:!1,tsType:{name:"boolean"},description:`Desabilita interações e aplica estilos de estado disabled.
@default false`,defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Label descritivo para leitores de tela"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};const ge={title:"Components/Toggle",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
Componente Toggle do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-2684).

Suporta **4 estados** (enabled, hover, pressed, disabled) × **2 posições** (off/on),
com animação suave do knob entre as posições e label opcional.
Track 40×24px com knob 16×16px animado via \`Animated.spring\`.
Consome tokens via \`useTheme()\`.
`}}},argTypes:{enabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},label:{control:"text"},onChange:{table:{disable:!0}}},args:{enabled:!0,disabled:!1,label:"Label",accessibilityLabel:"Toggle"}},g={name:"Playground",render:e=>{const[a,t]=r.useState(e.enabled??!0);return o.jsx(b,{...e,enabled:a,onChange:t})}},y={name:"Without Label",args:{label:void 0},parameters:{docs:{description:{story:"Apenas o track 40×24px, sem label."}}},render:e=>{const[a,t]=r.useState(!0);return o.jsx(b,{...e,enabled:a,onChange:t})}},L=[{label:"Enabled / Off",enabled:!1,disabled:!1},{label:"Enabled / On",enabled:!0,disabled:!1},{label:"Disabled / Off",enabled:!1,disabled:!0},{label:"Disabled / On",enabled:!0,disabled:!0}];function I({text:e}){const{theme:a}=X();return o.jsx(x,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,fontWeight:"600",color:a.content.subtle,textTransform:"uppercase",letterSpacing:.4,marginBottom:8,width:160},children:e})}const S={name:"All States",parameters:{docs:{description:{story:"Todas as combinações de estado × posição, com e sem label."}}},render:()=>{const[e,a]=r.useState(Object.fromEntries(L.map((t,n)=>[n,t.enabled])));return o.jsxs(m,{style:{padding:16,gap:20},children:[o.jsx(x,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,fontWeight:"700",marginBottom:4},children:"With Label"}),L.map((t,n)=>o.jsxs(m,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[o.jsx(I,{text:t.label}),o.jsx(b,{enabled:t.disabled?t.enabled:e[n],onChange:s=>a(i=>({...i,[n]:s})),label:"Label",disabled:t.disabled,accessibilityLabel:t.label})]},n)),o.jsx(x,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,fontWeight:"700",marginTop:8,marginBottom:4},children:"Without Label"}),L.map((t,n)=>o.jsxs(m,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[o.jsx(I,{text:t.label}),o.jsx(b,{enabled:t.disabled?t.enabled:e[n],onChange:s=>a(i=>({...i,[n]:s})),disabled:t.disabled,accessibilityLabel:t.label})]},`nl-${n}`))]})}},h={name:"Interactive Settings List",parameters:{docs:{description:{story:"Exemplo de uso real: lista de configurações com toggles independentes."}}},render:()=>{const e=["Receber notificações","Modo escuro","Autenticação biométrica","Salvar senha"],[a,t]=r.useState({0:!0,1:!1,2:!0,3:!1});return o.jsx(m,{style:{padding:16,gap:16},children:e.map((n,s)=>o.jsx(b,{enabled:a[s],onChange:()=>t(i=>({...i,[s]:!i[s]})),label:n,accessibilityLabel:n},n))})}};var V,D,F;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const [enabled, setEnabled] = useState(args.enabled ?? true);
    return <Toggle {...args} enabled={enabled} onChange={setEnabled} />;
  }
}`,...(F=(D=g.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var _,P,z;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Without Label',
  args: {
    label: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Apenas o track 40×24px, sem label.'
      }
    }
  },
  render: args => {
    const [enabled, setEnabled] = useState(true);
    return <Toggle {...args} enabled={enabled} onChange={setEnabled} />;
  }
}`,...(z=(P=y.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var q,N,K;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Todas as combinações de estado × posição, com e sem label.'
      }
    }
  },
  render: () => {
    const [states, setStates] = useState<Record<number, boolean>>(Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.enabled])));
    return <View style={{
      padding: 16,
      gap: 20
    }}>\r
        <Text style={{
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.x3,
        fontWeight: '700',
        marginBottom: 4
      }}>\r
          With Label\r
        </Text>\r
        {STATE_ROWS.map((row, i) => <View key={i} style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
      }}>\r
            <StateLabel text={row.label} />\r
            <Toggle enabled={row.disabled ? row.enabled : states[i]} onChange={v => setStates(s => ({
          ...s,
          [i]: v
        }))} label="Label" disabled={row.disabled} accessibilityLabel={row.label} />\r
          </View>)}\r
\r
        <Text style={{
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.x3,
        fontWeight: '700',
        marginTop: 8,
        marginBottom: 4
      }}>\r
          Without Label\r
        </Text>\r
        {STATE_ROWS.map((row, i) => <View key={\`nl-\${i}\`} style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
      }}>\r
            <StateLabel text={row.label} />\r
            <Toggle enabled={row.disabled ? row.enabled : states[i]} onChange={v => setStates(s => ({
          ...s,
          [i]: v
        }))} disabled={row.disabled} accessibilityLabel={row.label} />\r
          </View>)}\r
      </View>;
  }
}`,...(K=(N=S.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var H,M,G;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Interactive Settings List',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: lista de configurações com toggles independentes.'
      }
    }
  },
  render: () => {
    const settings = ['Receber notificações', 'Modo escuro', 'Autenticação biométrica', 'Salvar senha'];
    const [states, setStates] = useState<Record<number, boolean>>({
      0: true,
      1: false,
      2: true,
      3: false
    });
    return <View style={{
      padding: 16,
      gap: 16
    }}>\r
        {settings.map((setting, i) => <Toggle key={setting} enabled={states[i]} onChange={() => setStates(prev => ({
        ...prev,
        [i]: !prev[i]
      }))} label={setting} accessibilityLabel={setting} />)}\r
      </View>;
  }
}`,...(G=(M=h.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const ye=["Playground","WithoutLabel","AllStates","InteractiveList"];export{S as AllStates,h as InteractiveList,g as Playground,y as WithoutLabel,ye as __namedExportsOrder,ge as default};
