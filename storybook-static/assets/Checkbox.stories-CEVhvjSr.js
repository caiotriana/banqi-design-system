import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-wjN1KwZK.js";import{r as G,d as p,v as I,x as i,t as j,s as h,V as c,T as C}from"./base-DPM9NSJ_.js";import{u as X}from"./ThemeProvider-D24FPcro.js";import{A as f}from"./Animated-CZFtwW3c.js";import{M as J}from"./index-BOkGXpOT.js";import"./extends-CF3RwP-h.js";import"./index-BkewXaNL.js";const P=j.x6,L=G.x2,V=j.x4;function K(e,t,o,n,r){return o?{boxBg:t?e.surface.common.disabled:e.surface.default,boxBorderColor:t?e.surface.common.disabled:e.stroke.common.disabled,boxBorderWidth:p.quarter,checkmarkColor:null,overlayColor:null,labelColor:e.content.common.disabled,hasShadow:!1}:r?{boxBg:t?e.surface.accent.primary:e.surface.default,boxBorderColor:"transparent",boxBorderWidth:p.none,checkmarkColor:t?e.content.common.onColor:e.content.accent.primary,overlayColor:e.surface.common.pressed,labelColor:e.content.default,hasShadow:!0}:n?{boxBg:t?e.surface.accent.primary:e.surface.default,boxBorderColor:e.stroke.accent.primary,boxBorderWidth:p.quarter,checkmarkColor:t?e.content.common.onColor:e.content.accent.primary,overlayColor:e.surface.common.hover,labelColor:e.content.default,hasShadow:!0}:{boxBg:t?e.surface.accent.primary:e.surface.default,boxBorderColor:t?"transparent":e.stroke.default,boxBorderWidth:t?p.none:p.quarter,checkmarkColor:t?e.content.common.onColor:null,overlayColor:null,labelColor:e.content.default,hasShadow:!0}}const m=I.create({container:{flexDirection:"row",alignItems:"center",gap:j.x2,alignSelf:"flex-start"},shadowWrapper:{alignSelf:"flex-start",borderRadius:L},box:{width:P,height:P,borderRadius:L,overflow:"hidden",alignItems:"center",justifyContent:"center"},iconContainer:{width:V,height:V,alignItems:"center",justifyContent:"center"},overlay:{...I.absoluteFill},label:{fontFamily:i.fontFamily,fontWeight:"400",fontSize:i.fontSize.x3_5,lineHeight:i.lineHeight.x5,includeFontPadding:!1}});function ee({color:e}){return a.jsx(c,{style:{width:11,height:6,borderLeftWidth:2,borderBottomWidth:2,borderColor:e,transform:[{rotate:"-45deg"}],marginTop:-2}})}function b({checked:e=!1,onChange:t,label:o,disabled:n=!1,accessibilityLabel:r,testID:s}){const{theme:d}=X(),S=u.useRef(new f.Value(1)).current,[v,B]=u.useState(!1),[w,W]=u.useState(!1),l=K(d,e,n,v,w);function Z(){return w?-1.5:v?h.axis.third:h.axis.quarter}function $(){W(!0),f.spring(S,{toValue:.95,useNativeDriver:!0,speed:50,bounciness:0}).start()}function Q(){W(!1),f.spring(S,{toValue:1,useNativeDriver:!0,speed:50,bounciness:2}).start()}function Y(){n||t==null||t(!e)}return a.jsxs(J,{onPress:Y,onPressIn:n?void 0:$,onPressOut:n?void 0:Q,onHoverIn:n?void 0:()=>B(!0),onHoverOut:()=>B(!1),disabled:n,accessible:!0,accessibilityRole:"checkbox",accessibilityLabel:r??o,accessibilityState:{checked:e,disabled:n},testID:s,style:m.container,children:[a.jsx(f.View,{style:[m.shadowWrapper,{transform:[{scale:S}]},l.hasShadow&&{shadowColor:d.elevation.default,shadowOffset:{width:h.axis.none,height:Z()},shadowOpacity:1,shadowRadius:h.blur.none,elevation:w?1:v?4:2}],children:a.jsxs(c,{style:[m.box,{backgroundColor:l.boxBg,borderColor:l.boxBorderColor,borderWidth:l.boxBorderWidth}],children:[l.checkmarkColor!=null&&a.jsx(c,{style:m.iconContainer,children:a.jsx(ee,{color:l.checkmarkColor})}),l.overlayColor!=null&&a.jsx(c,{style:[m.overlay,{backgroundColor:l.overlayColor,borderRadius:L}],pointerEvents:"none"})]})}),o!=null&&a.jsx(C,{style:[m.label,{color:l.labelColor}],numberOfLines:1,children:o})]})}b.__docgenInfo={description:`Checkbox — componente de seleção binária.

Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
(node 795:820 / componentSet 46:3804). Suporta 4 estados
(enabled, hover, pressed, disabled) e exibe preview do checkmark
em hover/pressed unchecked.

@example
const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={setChecked}
  label="Aceitar termos"
/>`,methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:`Estado de seleção controlado.
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback disparado ao pressionar o checkbox"},label:{required:!1,tsType:{name:"string"},description:`Texto do label exibido ao lado do checkbox.
Quando omitido, o label não é renderizado.`},disabled:{required:!1,tsType:{name:"boolean"},description:`Desabilita interações e aplica estilos de estado disabled.
@default false`,defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Label descritivo para leitores de tela"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};const ce={title:"Components/Checkbox",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
Componente Checkbox do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 795-820).
Suporta **4 estados** (enabled, hover, pressed, disabled) × **2 seleções** (checked/unchecked),
com preview do checkmark em hover/pressed unchecked e label opcional.
Consome tokens via \`useTheme()\`.
`}}},argTypes:{checked:{control:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},label:{control:"text"},onChange:{table:{disable:!0}}},args:{checked:!0,disabled:!1,label:"Label",accessibilityLabel:"Checkbox"}},x={name:"Playground",render:e=>{const[t,o]=u.useState(e.checked??!0);return a.jsx(b,{...e,checked:t,onChange:o})}},g={name:"Without Label",args:{label:void 0},parameters:{docs:{description:{story:"Apenas o quadrado 24×24, sem label."}}},render:e=>{const[t,o]=u.useState(!0);return a.jsx(b,{...e,checked:t,onChange:o})}},T=[{label:"Enabled / Unchecked",checked:!1,disabled:!1},{label:"Enabled / Checked",checked:!0,disabled:!1},{label:"Disabled / Unchecked",checked:!1,disabled:!0},{label:"Disabled / Checked",checked:!0,disabled:!0}];function E({text:e}){const{theme:t}=X();return a.jsx(C,{style:{fontFamily:i.fontFamily,fontSize:i.fontSize.x3,fontWeight:"600",color:t.content.subtle,textTransform:"uppercase",letterSpacing:.4,marginBottom:8,width:160},children:e})}const y={name:"All States",parameters:{docs:{description:{story:"Todas as combinações de estado × seleção, com e sem label."}}},render:()=>{const[e,t]=u.useState(Object.fromEntries(T.map((o,n)=>[n,o.checked])));return a.jsxs(c,{style:{padding:16,gap:20},children:[a.jsx(C,{style:{fontFamily:i.fontFamily,fontSize:i.fontSize.x3,fontWeight:"700",marginBottom:4},children:"With Label"}),T.map((o,n)=>a.jsxs(c,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[a.jsx(E,{text:o.label}),a.jsx(b,{checked:o.disabled?o.checked:e[n],onChange:r=>t(s=>({...s,[n]:r})),label:"Label",disabled:o.disabled,accessibilityLabel:o.label})]},n)),a.jsx(C,{style:{fontFamily:i.fontFamily,fontSize:i.fontSize.x3,fontWeight:"700",marginTop:8,marginBottom:4},children:"Without Label"}),T.map((o,n)=>a.jsxs(c,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[a.jsx(E,{text:o.label}),a.jsx(b,{checked:o.disabled?o.checked:e[n],onChange:r=>t(s=>({...s,[n]:r})),disabled:o.disabled,accessibilityLabel:o.label})]},`nl-${n}`))]})}},k={name:"Interactive List",parameters:{docs:{description:{story:"Exemplo de uso real: lista de opções com checkboxes independentes."}}},render:()=>{const e=["Transferência","Pix","Boleto","Cartão de crédito"],[t,o]=u.useState(new Set([0]));function n(r){o(s=>{const d=new Set(s);return d.has(r)?d.delete(r):d.add(r),d})}return a.jsx(c,{style:{padding:16,gap:12},children:e.map((r,s)=>a.jsx(b,{checked:t.has(s),onChange:()=>n(s),label:r,accessibilityLabel:r},r))})}};var O,D,F;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  }
}`,...(F=(D=x.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var z,A,q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Without Label',
  args: {
    label: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Apenas o quadrado 24×24, sem label.'
      }
    }
  },
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  }
}`,...(q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var R,_,H;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Todas as combinações de estado × seleção, com e sem label.'
      }
    }
  },
  render: () => {
    const [states, setStates] = useState<Record<number, boolean>>(Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.checked])));
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
            <Checkbox checked={row.disabled ? row.checked : states[i]} onChange={v => setStates(s => ({
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
            <Checkbox checked={row.disabled ? row.checked : states[i]} onChange={v => setStates(s => ({
          ...s,
          [i]: v
        }))} disabled={row.disabled} accessibilityLabel={row.label} />\r
          </View>)}\r
      </View>;
  }
}`,...(H=(_=y.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var N,M,U;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Interactive List',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: lista de opções com checkboxes independentes.'
      }
    }
  },
  render: () => {
    const options = ['Transferência', 'Pix', 'Boleto', 'Cartão de crédito'];
    const [selected, setSelected] = useState<Set<number>>(new Set([0]));
    function toggle(i: number) {
      setSelected(prev => {
        const next = new Set(prev);
        next.has(i) ? next.delete(i) : next.add(i);
        return next;
      });
    }
    return <View style={{
      padding: 16,
      gap: 12
    }}>\r
        {options.map((opt, i) => <Checkbox key={opt} checked={selected.has(i)} onChange={() => toggle(i)} label={opt} accessibilityLabel={opt} />)}\r
      </View>;
  }
}`,...(U=(M=k.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const de=["Playground","WithoutLabel","AllStates","InteractiveList"];export{y as AllStates,k as InteractiveList,x as Playground,g as WithoutLabel,de as __namedExportsOrder,ce as default};
