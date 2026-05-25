import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-wjN1KwZK.js";import{r as X,p as f,d as c,v as I,x as i,t as v,s as g,V as m,T as k}from"./base-DPM9NSJ_.js";import{u as $}from"./ThemeProvider-D24FPcro.js";import{A as u}from"./Animated-CZFtwW3c.js";import{M as ne}from"./index-BOkGXpOT.js";import"./extends-CF3RwP-h.js";import"./index-BkewXaNL.js";const Q=40,oe=v.x6,B=X.x2,E=v.x4,se=X.x1,R=v.x1,Y=R,re=Q-R-E,le=re-Y;function ie(e,a,t,n,s){return t?{trackBg:a?e.surface.common.disabled:e.surface.default,trackBorderColor:a?"transparent":e.stroke.common.disabled,trackBorderWidth:a?c.none:c.quarter,knobColor:e.content.common.disabled,knobOpacity:f.solid,overlayColor:null,labelColor:e.content.common.disabled,hasShadow:!1}:s?{trackBg:a?e.surface.accent.primary:e.surface.default,trackBorderColor:a?"transparent":e.stroke.accent.primary,trackBorderWidth:a?c.none:c.quarter,knobColor:a?e.content.common.onColor:e.content.accent.primary,knobOpacity:f.intense,overlayColor:e.surface.common.pressed,labelColor:e.content.default,hasShadow:!0}:n?{trackBg:a?e.surface.accent.primary:e.surface.default,trackBorderColor:a?"transparent":e.stroke.accent.primary,trackBorderWidth:a?c.none:c.quarter,knobColor:a?e.content.common.onColor:e.content.accent.primary,knobOpacity:f.intense,overlayColor:e.surface.common.hover,labelColor:e.content.default,hasShadow:!0}:{trackBg:a?e.surface.accent.primary:e.surface.default,trackBorderColor:a?"transparent":e.stroke.default,trackBorderWidth:a?c.none:c.quarter,knobColor:a?e.content.common.onColor:e.content.accent.primary,knobOpacity:f.intense,overlayColor:null,labelColor:e.content.default,hasShadow:!0}}const p=I.create({container:{flexDirection:"row",alignItems:"center",gap:v.x2,alignSelf:"flex-start"},shadowWrapper:{alignSelf:"flex-start",borderRadius:B},track:{width:Q,height:oe,borderRadius:B,overflow:"hidden"},knob:{position:"absolute",left:Y,top:R,width:E,height:E,borderRadius:se},overlay:{...I.absoluteFill},label:{fontFamily:i.fontFamily,fontWeight:"400",fontSize:i.fontSize.x3_5,lineHeight:i.lineHeight.x5,includeFontPadding:!1}});function b({enabled:e=!1,onChange:a,label:t,disabled:n=!1,accessibilityLabel:s,testID:d}){const{theme:W}=$(),T=l.useRef(new u.Value(1)).current,C=l.useRef(new u.Value(e?1:0)).current,[w,A]=l.useState(!1),[O,j]=l.useState(!1),r=ie(W,e,n,w,O);l.useEffect(()=>{u.spring(C,{toValue:e?1:0,useNativeDriver:!0,speed:20,bounciness:4}).start()},[e,C]);const Z=C.interpolate({inputRange:[0,1],outputRange:[0,le]});function J(){return O?-1.5:w?g.axis.third:g.axis.quarter}function ee(){j(!0),u.spring(T,{toValue:.95,useNativeDriver:!0,speed:50,bounciness:0}).start()}function ae(){j(!1),u.spring(T,{toValue:1,useNativeDriver:!0,speed:50,bounciness:2}).start()}function te(){n||a==null||a(!e)}return o.jsxs(ne,{onPress:te,onPressIn:n?void 0:ee,onPressOut:n?void 0:ae,onHoverIn:n?void 0:()=>A(!0),onHoverOut:()=>A(!1),disabled:n,accessible:!0,accessibilityRole:"switch",accessibilityLabel:s??t,accessibilityState:{checked:e,disabled:n},testID:d,style:p.container,children:[o.jsx(u.View,{style:[p.shadowWrapper,{transform:[{scale:T}]},r.hasShadow&&{shadowColor:W.elevation.default,shadowOffset:{width:g.axis.none,height:J()},shadowOpacity:1,shadowRadius:g.blur.none,elevation:O?1:w?4:2}],children:o.jsxs(m,{style:[p.track,{backgroundColor:r.trackBg,borderColor:r.trackBorderColor,borderWidth:r.trackBorderWidth}],children:[o.jsx(u.View,{style:[p.knob,{backgroundColor:r.knobColor,opacity:r.knobOpacity,transform:[{translateX:Z}]}]}),r.overlayColor!=null&&o.jsx(m,{style:[p.overlay,{backgroundColor:r.overlayColor,borderRadius:B}],pointerEvents:"none"})]})}),t!=null&&o.jsx(k,{style:[p.label,{color:r.labelColor}],numberOfLines:1,children:t})]})}b.__docgenInfo={description:`Toggle — componente de ativação binária (switch).

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
@default false`,defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Label descritivo para leitores de tela"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};const ye={title:"Components/Toggle",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
Componente Toggle do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-2684).
Suporta **4 estados** (enabled, hover, pressed, disabled) × **2 posições** (off/on),
com animação suave do knob entre as posições e label opcional.
Track 40×24px com knob 16×16px animado via \`Animated.spring\`.
Consome tokens via \`useTheme()\`.
`}}},argTypes:{enabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},label:{control:"text"},onChange:{table:{disable:!0}}},args:{enabled:!0,disabled:!1,label:"Label",accessibilityLabel:"Toggle"}},y={name:"Playground",render:e=>{const[a,t]=l.useState(e.enabled??!0);return o.jsx(b,{...e,enabled:a,onChange:t})}},S={name:"Without Label",args:{label:void 0},parameters:{docs:{description:{story:"Apenas o track 40×24px, sem label."}}},render:e=>{const[a,t]=l.useState(!0);return o.jsx(b,{...e,enabled:a,onChange:t})}},L=[{label:"Enabled / Off",enabled:!1,disabled:!1},{label:"Enabled / On",enabled:!0,disabled:!1},{label:"Disabled / Off",enabled:!1,disabled:!0},{label:"Disabled / On",enabled:!0,disabled:!0}];function V({text:e}){const{theme:a}=$();return o.jsx(k,{style:{fontFamily:i.fontFamily,fontSize:i.fontSize.x3,fontWeight:"600",color:a.content.subtle,textTransform:"uppercase",letterSpacing:.4,marginBottom:8,width:160},children:e})}const h={name:"All States",parameters:{docs:{description:{story:"Todas as combinações de estado × posição, com e sem label."}}},render:()=>{const[e,a]=l.useState(Object.fromEntries(L.map((t,n)=>[n,t.enabled])));return o.jsxs(m,{style:{padding:16,gap:20},children:[o.jsx(k,{style:{fontFamily:i.fontFamily,fontSize:i.fontSize.x3,fontWeight:"700",marginBottom:4},children:"With Label"}),L.map((t,n)=>o.jsxs(m,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[o.jsx(V,{text:t.label}),o.jsx(b,{enabled:t.disabled?t.enabled:e[n],onChange:s=>a(d=>({...d,[n]:s})),label:"Label",disabled:t.disabled,accessibilityLabel:t.label})]},n)),o.jsx(k,{style:{fontFamily:i.fontFamily,fontSize:i.fontSize.x3,fontWeight:"700",marginTop:8,marginBottom:4},children:"Without Label"}),L.map((t,n)=>o.jsxs(m,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[o.jsx(V,{text:t.label}),o.jsx(b,{enabled:t.disabled?t.enabled:e[n],onChange:s=>a(d=>({...d,[n]:s})),disabled:t.disabled,accessibilityLabel:t.label})]},`nl-${n}`))]})}},x={name:"Interactive Settings List",parameters:{docs:{description:{story:"Exemplo de uso real: lista de configurações com toggles independentes."}}},render:()=>{const e=["Receber notificações","Modo escuro","Autenticação biométrica","Salvar senha"],[a,t]=l.useState({0:!0,1:!1,2:!0,3:!1});return o.jsx(m,{style:{padding:16,gap:16},children:e.map((n,s)=>o.jsx(b,{enabled:a[s],onChange:()=>t(d=>({...d,[s]:!d[s]})),label:n,accessibilityLabel:n},n))})}};var D,F,_;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const [enabled, setEnabled] = useState(args.enabled ?? true);
    return <Toggle {...args} enabled={enabled} onChange={setEnabled} />;
  }
}`,...(_=(F=y.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var P,z,q;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(z=S.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var N,K,H;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(K=h.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var M,G,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(G=x.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};const Se=["Playground","WithoutLabel","AllStates","InteractiveList"];export{h as AllStates,x as InteractiveList,y as Playground,S as WithoutLabel,Se as __namedExportsOrder,ye as default};
