import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{v as w,x as n,t as y,r as A,V as i,T as c}from"./base-DPM9NSJ_.js";import{r as T}from"./index-wjN1KwZK.js";import{u as S}from"./ThemeProvider-D24FPcro.js";import{A as l,I as C}from"./Animated-CZFtwW3c.js";import"./extends-CF3RwP-h.js";import"./index-BkewXaNL.js";function Y(e){switch(e){case"small":return{dimension:36,borderRadius:A.x3,iconSize:y.x5,fontSize:n.fontSize.x3,lineHeight:n.lineHeight.x3_5};case"standard":return{dimension:48,borderRadius:A.x4,iconSize:y.x5,fontSize:n.fontSize.x3_5,lineHeight:n.lineHeight.x4};case"large":return{dimension:60,borderRadius:A.x6,iconSize:y.x6,fontSize:n.fontSize.x5,lineHeight:n.lineHeight.x5}}}function O(e,t,r){return t==="logo"?{bg:"transparent",contentColor:e.content.accent.primary}:t==="image"?{bg:e.surface.subtle,contentColor:e.content.common.onColor}:r==="disabled"?{bg:e.surface.common.disabled,contentColor:e.content.common.disabled}:{bg:e.surface.subtle,contentColor:e.content.default}}const m=w.create({container:{alignItems:"center",justifyContent:"center",overflow:"hidden"},skeletonOverlay:{...w.absoluteFill},image:{width:"100%",height:"100%"},logo:{width:"100%",height:"100%"},initials:{fontFamily:n.fontFamily,fontWeight:"600",textAlign:"center",includeFontPadding:!1}}),_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABURJREFUeAHtm1FMW1UYxz82NmS4gsyhIGadMxCzh9WhD2oM5VWB4IsLT2Biim+rce8tT77MZX1Sx8PKy4gPRuL2NB9WotmLbkCyaSAqXZxAWNxgtAOcszvfaS+763q5zZJl35f+f0nD7W3vLbm/fuf87zmnVdRxMUdADdsIqALClAFhyoAwZUCYMiBMGRCmDAhTBoQpA8KUAWHKgDBlQJgyIEwZEKYMCFMGhCkDwpQBYcqAMGVAmDIgTBkQpgwIUwaEKQPClAFhyoAwZUCYMqpJCCeXv6Eja7/Qk+b2tlq6Ut1MV3a00Ejdu3R9eyNpouIqLPD/Gr39758Uyf5EPy99Tt/+8yW13rtJWqj4JpHlsbjPVs+TBtCHFTiW+UGFNAhzwdI+zvxIkoGwIo5lzovu0yCsiPrcOiVMYpUKhJWAg0ggt0YSgTAPPsw++XvCxwHCPHjn7h8kEQjz4ODdeZKImKGpnW+FqHbPXpJCTXYH0SSJQ4yw2iPvUX13E0khML9B1HuZpIEm0YP0wgZJBMI8mJ7JkkQgzIPxCZmjHRBWgvT8OqUu3SaJQFgJ4iPXSSoQVkTy7BKNnr1BUoEwF9wUfnriGkkGwgpMz2Yp/MlvtLz6H0lGzI3z04IFnRxboOFTcvstNxUtLH7qL0qMLYqvKjcV3SRG+5vpu+PtNNAjZwzTj4oW1rC7msIdAUrGXqW5719XIQ6ho0Cw5Rkr7sLXB2mf2ZYKhBXBFZf66jWx0iCsBFxt48fbbJMpDQjzINRWR7HISyQNCNuCaH8LdZomUhIQ5gNHf0lAmA8cQiT1ZRDmA8uS1CxCWBmE2naRFCCsDILNcu7JxN1o5KfnV8290E7Tf9TTeOoWTc1mbMwu1Z/wVP7UTMZuf9C1h3K5nD2eCXfs3tzuCz/30LE8nTI5c2fzc7QgThhf4I+GfzcXsobqzQV2r17ifSkeOmqusc+HzWh73DUtwpOPfeFGIzm/gObWhTfNvrQdjV/O7LMx3SH6RdrKPh17hchH2Iqg0XyxTWJ6fsNeqFik1T54qIj3hYeu2td5Kt+RxaHgdOyAHbx1ZDFcUQM9z9ttrtQH536wyKbrjQbf/2VucZ2kIHo+zF1Ng917aX/vpJWWurRCo+fy6y4GupsoGT+Qf09Pk5G0nRJnFjfPMfh+k30+YQTx4tCgOZ+zyIaPdc6/FdOm6ZSC2ArjqnFfTB7fO2T6MWbK9D9zhZW5g4UKcggffrh5C7XXbcZyrkrG6deKjy2FtCVvYoWtrN4r633FS6pL3eTGIy/bv4mxBXvxrxkJ+RDjHzakrU8UK4yriJs+B051/GD4YgcL1ZcsWpKWPLf0yLmcdLlsvgTRE3N239H+F6gc4iN/kyRE92FdQ79SX2ej7ZfGJ/KhgZMiV0Y8UmVev2r7pv29l01TGLDV5lUR0f4XbUiZtlG+xjSH/sI4hXI1SkJshR1q35VPfRM3TdXcsNGc+yIOIgxXTdykR4aDCL9navaO5zT/Udcgbudh/6Zw1JVCJSG2whqerbZT9jxazkK4KkKF0OEQM33TgEmPLIoJF8LFYInfmblXRg0PtW710bZKo0IXlIpf5saSikW54fQYLJrOD5cYrC03yifOLBhZaZJKRaxLdIa7GK8oz1XFfZbUX604VIQwJ8o7gYXhgOLchHNwkS7KoYo6LuYIqAHTK8qAMGVAmDIgTBkQpgwIUwaEKQPClAFhyoAwZUCYMiBMGRCmDAhTBoQpA8KUAWHKgDBlQJgyIEwZEKYMCFMGhCkDwpQBYcqAMGVAmDIgTBkQpoz7AI+4di4Xf4MAAAAASUVORK5CYII=";function s({variant:e="initials",size:t="standard",state:r="enabled",initials:Z="AA",icon:G,imageSource:H,accessibilityLabel:N,testID:Q}){const{theme:K}=S(),o=Y(t),b=O(K,e,r),d=T.useRef(new l.Value(1)).current;T.useEffect(()=>{if(r==="skeleton"){const z=l.loop(l.sequence([l.timing(d,{toValue:.35,duration:700,useNativeDriver:!0}),l.timing(d,{toValue:1,duration:700,useNativeDriver:!0})]));return z.start(),()=>z.stop()}else d.setValue(1)},[r,d]);function X(){if(r==="skeleton")return null;switch(e){case"image":return a.jsx(C,{source:H??{uri:"https://i.pravatar.cc/300"},style:m.image,resizeMode:"cover",accessibilityIgnoresInvertColors:!0});case"logo":return a.jsx(C,{source:{uri:_},style:[m.logo,{width:o.dimension,height:o.dimension}],resizeMode:"contain",accessibilityIgnoresInvertColors:!0});case"icon":return G??null;case"initials":default:return a.jsx(l.Text,{style:[m.initials,{fontSize:o.fontSize,lineHeight:o.lineHeight,color:b.contentColor}],numberOfLines:1,children:Z.slice(0,2).toUpperCase()})}}const J={width:o.dimension,height:o.dimension,borderRadius:o.borderRadius,backgroundColor:b.bg};return a.jsx(l.View,{accessible:!0,accessibilityRole:"image",accessibilityLabel:N??`Avatar ${e}`,testID:Q,style:[m.container,J,r==="skeleton"&&{opacity:d}],children:X()})}s.__docgenInfo={description:`Avatar — componente de identificação visual de usuário ou marca.

Mapeia 1:1 os componentes do Figma **Casas Bahia Pay — Design System**
(node 795-672). Suporta 4 variantes × 3 tamanhos × 3 estados.

- \`icon\`: slot composable — aceita qualquer ReactNode
- \`initials\`: texto de até 2 caracteres
- \`image\`: foto via \`imageSource\` (URI ou require)
- \`logo\`: logo Casas Bahia Pay embutido (\`casas bahia pay/symbol/default\`)

@example
<Avatar variant="initials" initials="CB" size="large" />
<Avatar variant="image" imageSource={{ uri: 'https://...' }} />
<Avatar variant="logo" size="standard" />
<Avatar variant="icon" icon={<MyIcon size={20} />} />`,methods:[],displayName:"Avatar",props:{variant:{required:!1,tsType:{name:"union",raw:"'icon' | 'initials' | 'image' | 'logo'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'initials'"},{name:"literal",value:"'image'"},{name:"literal",value:"'logo'"}]},description:`Variante de conteúdo.
@default 'initials'`,defaultValue:{value:"'initials'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'standard' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'large'"}]},description:`Tamanho do avatar.
@default 'standard'`,defaultValue:{value:"'standard'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'enabled' | 'disabled' | 'skeleton'",elements:[{name:"literal",value:"'enabled'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'skeleton'"}]},description:`Estado visual.
@default 'enabled'`,defaultValue:{value:"'enabled'",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:`Texto de iniciais (variant='initials'). Máximo 2 caracteres.
@default 'AA'`,defaultValue:{value:"'AA'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Slot de ícone composable (variant='icon').
Aceita qualquer ReactNode — o componente não impõe o tipo de ícone.`},imageSource:{required:!1,tsType:{name:"ImageSourcePropType"},description:`Fonte da imagem (variant='image').
Aceita URI de rede ou require local.
@example { uri: 'https://example.com/photo.jpg' }`},accessibilityLabel:{required:!1,tsType:{name:"string"},description:"Label descritivo para leitores de tela"},testID:{required:!1,tsType:{name:"string"},description:"ID para seletores em testes automatizados"}}};function I({color:e="#191E2F",size:t=20}){return a.jsx(i,{style:{width:t,height:t,borderRadius:t/2,borderWidth:2,borderColor:e,alignItems:"center",justifyContent:"center"},children:a.jsx(c,{style:{fontFamily:n.fontFamily,fontWeight:"700",fontSize:t*.5,color:e,lineHeight:t*.6},children:"i"})})}const U=["initials","icon","image","logo"],W=["small","standard","large"],x=["enabled","disabled","skeleton"],re={title:"Components/Avatar",component:s,tags:["autodocs"],decorators:[e=>a.jsx(i,{style:{alignItems:"flex-start"},children:a.jsx(e,{})})],parameters:{docs:{description:{component:'\nComponente Avatar do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 795-672).\nSuporta **4 variantes** × **3 tamanhos** × **3 estados**.\n- `icon`: slot composable — aceita qualquer ReactNode\n- `initials`: texto de até 2 caracteres via prop `initials`\n- `image`: foto via `imageSource` (URI ou require)\n- `logo`: logo Casas Bahia Pay embutido\n```tsx\nimport { Avatar } from \'../Avatar\';\n<Avatar variant="initials" initials="CB" size="large" />\n<Avatar variant="image" imageSource={{ uri: \'https://...\' }} />\n<Avatar variant="logo" size="standard" />\n<Avatar variant="icon" icon={<MyIcon size={20} />} />\n```\n'}}},argTypes:{variant:{control:"select",options:U,table:{defaultValue:{summary:"initials"}}},size:{control:"select",options:W,table:{defaultValue:{summary:"standard"}}},state:{control:"select",options:x,table:{defaultValue:{summary:"enabled"}}},initials:{control:"text"},icon:{table:{disable:!0}},imageSource:{table:{disable:!0}}},args:{variant:"initials",size:"standard",state:"enabled",initials:"CB"}},u={name:"Playground",render:e=>a.jsx(s,{...e,icon:e.variant==="icon"?a.jsx(I,{size:e.size==="large"?24:20}):void 0})};function h({text:e}){const{theme:t}=S();return a.jsx(c,{style:{fontFamily:n.fontFamily,fontSize:n.fontSize.x3,fontWeight:"700",color:t.content.default,marginBottom:8},children:e})}function v({text:e}){return a.jsx(c,{style:{fontFamily:n.fontFamily,fontSize:11,color:"#9E9E9E"},children:e})}const g={name:"All States",parameters:{docs:{description:{story:"Todos os estados (enabled, disabled, skeleton) para initials e icon."}}},render:()=>a.jsxs(i,{style:{gap:16},children:[a.jsx(h,{text:"All States / Initials / Standard"}),a.jsx(i,{style:{flexDirection:"row",gap:12,alignItems:"center"},children:x.map(e=>a.jsxs(i,{style:{alignItems:"center",gap:4},children:[a.jsx(s,{variant:"initials",initials:"CB",size:"standard",state:e}),a.jsx(v,{text:e})]},e))}),a.jsx(h,{text:"All States / Icon / Standard"}),a.jsx(i,{style:{flexDirection:"row",gap:12,alignItems:"center"},children:x.map(e=>a.jsxs(i,{style:{alignItems:"center",gap:4},children:[a.jsx(s,{variant:"icon",icon:a.jsx(I,{size:20,color:e==="disabled"?"#9E9E9E":"#191E2F"}),size:"standard",state:e}),a.jsx(v,{text:e})]},e))})]})},p={name:"Full Grid",parameters:{docs:{description:{story:"Todas as variantes × todos os tamanhos."}}},render:()=>a.jsx(i,{style:{gap:20},children:U.map(e=>a.jsxs(i,{style:{gap:8},children:[a.jsx(h,{text:`${e} — small / standard / large`}),a.jsx(i,{style:{flexDirection:"row",gap:12,alignItems:"flex-end"},children:W.map(t=>a.jsxs(i,{style:{alignItems:"center",gap:4},children:[a.jsx(s,{variant:e,initials:"CB",size:t,icon:e==="icon"?a.jsx(I,{size:t==="large"?24:20}):void 0}),a.jsx(v,{text:t})]},t))})]},e))})},f={name:"In Context",parameters:{docs:{description:{story:"Exemplo de uso real: cabeçalho de perfil com avatar, nome e lista de usuários."}}},render:()=>{const{theme:e}=S();return a.jsxs(i,{style:{gap:24,padding:16},children:[a.jsxs(i,{style:{flexDirection:"row",gap:12,alignItems:"center"},children:[a.jsx(s,{variant:"image",size:"large"}),a.jsxs(i,{style:{gap:2},children:[a.jsx(c,{style:{fontFamily:n.fontFamily,fontWeight:"700",fontSize:16,color:e.content.default},children:"João da Silva"}),a.jsx(c,{style:{fontFamily:n.fontFamily,fontSize:14,color:e.content.subtle},children:"joao.silva@email.com"})]})]}),[{initials:"AB",name:"Ana Beatriz"},{initials:"MC",name:"Marcos Costa"},{initials:"RL",name:"Roberta Lima"}].map(t=>a.jsxs(i,{style:{flexDirection:"row",gap:12,alignItems:"center"},children:[a.jsx(s,{variant:"initials",initials:t.initials,size:"standard"}),a.jsx(c,{style:{fontFamily:n.fontFamily,fontSize:14,color:e.content.default},children:t.name})]},t.initials))]})}};var j,V,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Avatar {...args} icon={args.variant === 'icon' ? <PlaceholderIcon size={args.size === 'large' ? 24 : 20} /> : undefined} />
}`,...(F=(V=u.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var R,k,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Todos os estados (enabled, disabled, skeleton) para initials e icon.'
      }
    }
  },
  render: () => <View style={{
    gap: 16
  }}>\r
      <SectionTitle text="All States / Initials / Standard" />\r
      <View style={{
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center'
    }}>\r
        {STATES.map(state => <View key={state} style={{
        alignItems: 'center',
        gap: 4
      }}>\r
            <Avatar variant="initials" initials="CB" size="standard" state={state} />\r
            <SizeLabel text={state} />\r
          </View>)}\r
      </View>\r
      <SectionTitle text="All States / Icon / Standard" />\r
      <View style={{
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center'
    }}>\r
        {STATES.map(state => <View key={state} style={{
        alignItems: 'center',
        gap: 4
      }}>\r
            <Avatar variant="icon" icon={<PlaceholderIcon size={20} color={state === 'disabled' ? '#9E9E9E' : '#191E2F'} />} size="standard" state={state} />\r
            <SizeLabel text={state} />\r
          </View>)}\r
      </View>\r
    </View>
}`,...(B=(k=g.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var E,M,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Full Grid',
  parameters: {
    docs: {
      description: {
        story: 'Todas as variantes × todos os tamanhos.'
      }
    }
  },
  render: () => <View style={{
    gap: 20
  }}>\r
      {VARIANTS.map(variant => <View key={variant} style={{
      gap: 8
    }}>\r
          <SectionTitle text={\`\${variant} — small / standard / large\`} />\r
          <View style={{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-end'
      }}>\r
            {SIZES.map(size => <View key={size} style={{
          alignItems: 'center',
          gap: 4
        }}>\r
                <Avatar variant={variant} initials="CB" size={size} icon={variant === 'icon' ? <PlaceholderIcon size={size === 'large' ? 24 : 20} /> : undefined} />\r
                <SizeLabel text={size} />\r
              </View>)}\r
          </View>\r
        </View>)}\r
    </View>
}`,...(q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var L,D,P;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'In Context',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: cabeçalho de perfil com avatar, nome e lista de usuários.'
      }
    }
  },
  render: () => {
    const {
      theme
    } = useTheme();
    return <View style={{
      gap: 24,
      padding: 16
    }}>\r
        <View style={{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
      }}>\r
          <Avatar variant="image" size="large" />\r
          <View style={{
          gap: 2
        }}>\r
            <Text style={{
            fontFamily: typography.fontFamily,
            fontWeight: '700',
            fontSize: 16,
            color: theme.content.default
          }}>\r
              João da Silva\r
            </Text>\r
            <Text style={{
            fontFamily: typography.fontFamily,
            fontSize: 14,
            color: theme.content.subtle
          }}>\r
              joao.silva@email.com\r
            </Text>\r
          </View>\r
        </View>\r
        {[{
        initials: 'AB',
        name: 'Ana Beatriz'
      }, {
        initials: 'MC',
        name: 'Marcos Costa'
      }, {
        initials: 'RL',
        name: 'Roberta Lima'
      }].map(user => <View key={user.initials} style={{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
      }}>\r
            <Avatar variant="initials" initials={user.initials} size="standard" />\r
            <Text style={{
          fontFamily: typography.fontFamily,
          fontSize: 14,
          color: theme.content.default
        }}>\r
              {user.name}\r
            </Text>\r
          </View>)}\r
      </View>;
  }
}`,...(P=(D=f.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const oe=["Playground","AllStates","FullGrid","InContext"];export{g as AllStates,p as FullGrid,f as InContext,u as Playground,oe as __namedExportsOrder,re as default};
