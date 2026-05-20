import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-wjN1KwZK.js";import{r as U,d as b,u as I,w as l,q as R,s as m,V as d,T as h}from"./base-m3uPMzji.js";import{u as X}from"./ThemeProvider-D24FPcro.js";import{A as f}from"./Animated-CWQe7C5U.js";import{M as J}from"./index-N69qlPG8.js";import"./extends-CF3RwP-h.js";import"./index-Dg8UTxH2.js";const O=R.x6,B=U.full,k=R.x4;function K(e,o,t,a,r){return t?{boxBg:e.surface.default,boxBorderColor:e.stroke.common.disabled,boxBorderWidth:b.quarter,dotColor:null,overlayColor:null,labelColor:e.content.common.disabled,hasShadow:!1}:r?{boxBg:o?e.surface.accent.primarySubtle:e.surface.default,boxBorderColor:o?e.stroke.accent.primary:e.stroke.default,boxBorderWidth:b.quarter,dotColor:e.content.accent.primary,overlayColor:e.surface.common.pressed,labelColor:e.content.default,hasShadow:!0}:a?{boxBg:o?e.surface.accent.primarySubtle:e.surface.default,boxBorderColor:o?e.stroke.accent.primary:e.stroke.default,boxBorderWidth:b.quarter,dotColor:e.content.accent.primary,overlayColor:e.surface.common.hover,labelColor:e.content.default,hasShadow:!0}:{boxBg:o?e.surface.accent.primarySubtle:e.surface.default,boxBorderColor:o?e.stroke.accent.primary:e.stroke.default,boxBorderWidth:b.quarter,dotColor:o?e.content.accent.primary:null,overlayColor:null,labelColor:e.content.default,hasShadow:!0}}const u=I.create({container:{flexDirection:"row",alignItems:"center",gap:R.x2,alignSelf:"flex-start"},shadowWrapper:{alignSelf:"flex-start",borderRadius:B},box:{width:O,height:O,borderRadius:B,overflow:"hidden",alignItems:"center",justifyContent:"center"},dot:{width:k,height:k,borderRadius:U.full},overlay:{...I.absoluteFillObject},label:{fontFamily:l.fontFamily,fontWeight:"400",fontSize:l.fontSize.x3_5,lineHeight:l.lineHeight.x5,includeFontPadding:!1}});function c({selected:e=!1,onChange:o,label:t,disabled:a=!1,accessibilityLabel:r,testID:p}){const{theme:j}=X(),v=i.useRef(new f.Value(1)).current,[C,W]=i.useState(!1),[w,L]=i.useState(!1),n=K(j,e,a,C,w);function Z(){return w?-1.5:C?m.axis.third:m.axis.quarter}function $(){L(!0),f.spring(v,{toValue:.95,useNativeDriver:!0,speed:50,bounciness:0}).start()}function Q(){L(!1),f.spring(v,{toValue:1,useNativeDriver:!0,speed:50,bounciness:2}).start()}function Y(){a||o==null||o(!e)}return s.jsxs(J,{onPress:Y,onPressIn:a?void 0:$,onPressOut:a?void 0:Q,onHoverIn:a?void 0:()=>W(!0),onHoverOut:()=>W(!1),disabled:a,accessible:!0,accessibilityRole:"radio",accessibilityLabel:r??t,accessibilityState:{checked:e,disabled:a},testID:p,style:u.container,children:[s.jsx(f.View,{style:[u.shadowWrapper,{transform:[{scale:v}]},n.hasShadow&&{shadowColor:j.elevation.default,shadowOffset:{width:m.axis.none,height:Z()},shadowOpacity:1,shadowRadius:m.blur.none,elevation:w?1:C?4:2}],children:s.jsxs(d,{style:[u.box,{backgroundColor:n.boxBg,borderColor:n.boxBorderColor,borderWidth:n.boxBorderWidth}],children:[n.dotColor!=null&&s.jsx(d,{style:[u.dot,{backgroundColor:n.dotColor}]}),n.overlayColor!=null&&s.jsx(d,{style:[u.overlay,{backgroundColor:n.overlayColor,borderRadius:B}],pointerEvents:"none"})]})}),t!=null&&s.jsx(h,{style:[u.label,{color:n.labelColor}],numberOfLines:1,children:t})]})}c.__docgenInfo={description:`Radio — componente de seleção exclusiva.

Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
(node 797:2340 / componentSet 46:3745). Suporta 4 estados
(enabled, hover, pressed, disabled) e exibe preview do dot
em hover/pressed unselected.

@example
const [selected, setSelected] = useState(false);

<Radio
  selected={selected}
  onChange={setSelected}
  label="Opção A"
/>`,methods:[],displayName:"Radio",props:{selected:{required:!1,tsType:{name:"boolean"},description:`Estado de seleção controlado.
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:"Callback disparado ao pressionar o radio"},label:{required:!1,tsType:{name:"string"},description:`Texto do label exibido ao lado do radio.
Quando omitido, o label não é renderizado.`},disabled:{required:!1,tsType:{name:"boolean"},description:`Desabilita interações e aplica estilos de estado disabled.
@default false`,defaultValue:{value:"false",computed:!1}},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Label descritivo para leitores de tela"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};const ie={title:"Components/Radio",component:c,tags:["autodocs"],parameters:{docs:{description:{component:`
Componente Radio do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-2340).

Suporta **4 estados** (enabled, hover, pressed, disabled) × **2 seleções** (selected/unselected),
com preview do dot em hover/pressed unselected e label opcional.
Consome tokens via \`useTheme()\`.
`}}},argTypes:{selected:{control:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",table:{defaultValue:{summary:"false"}}},label:{control:"text"},onChange:{table:{disable:!0}}},args:{selected:!0,disabled:!1,label:"Label",accessibilityLabel:"Radio"}},y={name:"Playground",render:e=>{const[o,t]=i.useState(e.selected??!0);return s.jsx(c,{...e,selected:o,onChange:t})}},g={name:"Without Label",args:{label:void 0},parameters:{docs:{description:{story:"Apenas o círculo 24×24, sem label."}}},render:e=>{const[o,t]=i.useState(!0);return s.jsx(c,{...e,selected:o,onChange:t})}},T=[{label:"Enabled / Unselected",selected:!1,disabled:!1},{label:"Enabled / Selected",selected:!0,disabled:!1},{label:"Disabled / Unselected",selected:!1,disabled:!0},{label:"Disabled / Selected",selected:!0,disabled:!0}];function P({text:e}){const{theme:o}=X();return s.jsx(h,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,fontWeight:"600",color:o.content.subtle,textTransform:"uppercase",letterSpacing:.4,marginBottom:8,width:160},children:e})}const x={name:"All States",parameters:{docs:{description:{story:"Todas as combinações de estado × seleção, com e sem label."}}},render:()=>{const[e,o]=i.useState(Object.fromEntries(T.map((t,a)=>[a,t.selected])));return s.jsxs(d,{style:{padding:16,gap:20},children:[s.jsx(h,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,fontWeight:"700",marginBottom:4},children:"With Label"}),T.map((t,a)=>s.jsxs(d,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[s.jsx(P,{text:t.label}),s.jsx(c,{selected:t.disabled?t.selected:e[a],onChange:r=>o(p=>({...p,[a]:r})),label:"Label",disabled:t.disabled,accessibilityLabel:t.label})]},a)),s.jsx(h,{style:{fontFamily:l.fontFamily,fontSize:l.fontSize.x3,fontWeight:"700",marginTop:8,marginBottom:4},children:"Without Label"}),T.map((t,a)=>s.jsxs(d,{style:{flexDirection:"row",alignItems:"center",gap:16},children:[s.jsx(P,{text:t.label}),s.jsx(c,{selected:t.disabled?t.selected:e[a],onChange:r=>o(p=>({...p,[a]:r})),disabled:t.disabled,accessibilityLabel:t.label})]},`nl-${a}`))]})}},S={name:"Interactive Group",parameters:{docs:{description:{story:"Exemplo de uso real: grupo de opções mutuamente exclusivas."}}},render:()=>{const e=["Transferência","Pix","Boleto","Cartão de crédito"],[o,t]=i.useState(0);return s.jsx(d,{style:{padding:16,gap:12},children:e.map((a,r)=>s.jsx(c,{selected:o===r,onChange:()=>t(r),label:a,accessibilityLabel:a},a))})}};var V,D,E;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const [selected, setSelected] = useState(args.selected ?? true);
    return <Radio {...args} selected={selected} onChange={setSelected} />;
  }
}`,...(E=(D=y.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,z,A;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Without Label',
  args: {
    label: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Apenas o círculo 24×24, sem label.'
      }
    }
  },
  render: args => {
    const [selected, setSelected] = useState(true);
    return <Radio {...args} selected={selected} onChange={setSelected} />;
  }
}`,...(A=(z=g.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var q,_,H;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Todas as combinações de estado × seleção, com e sem label.'
      }
    }
  },
  render: () => {
    const [states, setStates] = useState<Record<number, boolean>>(Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.selected])));
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
            <Radio selected={row.disabled ? row.selected : states[i]} onChange={v => setStates(s => ({
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
            <Radio selected={row.disabled ? row.selected : states[i]} onChange={v => setStates(s => ({
          ...s,
          [i]: v
        }))} disabled={row.disabled} accessibilityLabel={row.label} />\r
          </View>)}\r
      </View>;
  }
}`,...(H=(_=x.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var G,M,N;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Interactive Group',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: grupo de opções mutuamente exclusivas.'
      }
    }
  },
  render: () => {
    const options = ['Transferência', 'Pix', 'Boleto', 'Cartão de crédito'];
    const [selected, setSelected] = useState<number>(0);
    return <View style={{
      padding: 16,
      gap: 12
    }}>\r
        {options.map((opt, i) => <Radio key={opt} selected={selected === i} onChange={() => setSelected(i)} label={opt} accessibilityLabel={opt} />)}\r
      </View>;
  }
}`,...(N=(M=S.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const de=["Playground","WithoutLabel","AllStates","InteractiveGroup"];export{x as AllStates,S as InteractiveGroup,y as Playground,g as WithoutLabel,de as __namedExportsOrder,ie as default};
