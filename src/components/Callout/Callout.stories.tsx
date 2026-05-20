import { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Callout } from './Callout';
import type { CalloutVariant } from './Callout.types';
import { useTheme } from '../ThemeProvider/ThemeProvider';
// Substitua pelo seu sistema de ícones real
function PlaceholderIcon({ color = '#191E2F' }: { color?: string }) {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: typography.fontFamily,
          fontWeight: '700',
          fontSize: 10,
          color,
          lineHeight: 12,
        }}
      >
        i
      </Text>
    </View>
  );
}
const VARIANTS: CalloutVariant[] = [
  'standard',
  'info',
  'success',
  'attention',
  'critical',
];
const ICON_COLORS: Record<CalloutVariant, string> = {
  standard: '#191E2F',
  info: '#1466B8',
  success: '#1E730D',
  attention: '#8F5F10',
  critical: '#CE1732',
};
const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
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
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
      table: { defaultValue: { summary: 'standard' } },
    },
    title: { control: 'text' },
    description: { control: 'text' },
    actionLabel: { control: 'text' },
    icon: { table: { disable: true } },
    onActionPress: { table: { disable: true } },
    onClose: { table: { disable: true } },
  },
  args: {
    variant: 'info',
    title: 'Title',
    description: 'Description message with two lines or more.',
  },
};
export default meta;
type Story = StoryObj<typeof Callout>;
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Callout
      {...args}
      icon={<PlaceholderIcon color={ICON_COLORS[args.variant ?? 'standard']} />}
      actionLabel={args.actionLabel}
      onActionPress={() => {}}
      onClose={() => {}}
    />
  ),
};
// ─── All Variants With Icon ───────────────────────────────────────────────────
function SectionTitle({ text }: { text: string }) {
  const { theme } = useTheme();
  return (
    <Text
      style={{
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.x3,
        fontWeight: '700',
        color: theme.content.default,
        marginBottom: 8,
      }}
    >
      {text}
    </Text>
  );
}
export const AllVariantsWithIcon: Story = {
  name: 'All Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Todas as variantes com ícone (Actionable=False). O ícone usa a cor do texto da variante.',
      },
    },
  },
  render: () => (
    <View style={{ gap: 12 }}>
      <SectionTitle text="Actionable=False / With Icon" />
      {VARIANTS.map((variant) => (
        <Callout
          key={variant}
          variant={variant}
          title="Title"
          description="Description message with two lines or more."
          icon={<PlaceholderIcon color={ICON_COLORS[variant]} />}
        />
      ))}
    </View>
  ),
};
// ─── All Variants Actionable ──────────────────────────────────────────────────
export const AllVariantsActionable: Story = {
  name: 'All Variants Actionable',
  parameters: {
    docs: {
      description: {
        story:
          'Todas as variantes com actionLabel (Actionable=True). Ganha borda variant-specific e Elevation/Enabled.',
      },
    },
  },
  render: () => (
    <View style={{ gap: 12 }}>
      <SectionTitle text="Actionable=True" />
      {VARIANTS.map((variant) => (
        <Callout
          key={variant}
          variant={variant}
          title="Title"
          description="Description message with two lines or more."
          icon={<PlaceholderIcon color={ICON_COLORS[variant]} />}
          actionLabel="Link"
          onActionPress={() => {}}
        />
      ))}
    </View>
  ),
};
// ─── Without Title ────────────────────────────────────────────────────────────
export const WithoutTitle: Story = {
  name: 'Without Title',
  parameters: {
    docs: {
      description: {
        story:
          'Callout sem título (Title=False no Figma) — apenas a descrição é exibida.',
      },
    },
  },
  render: () => (
    <View style={{ gap: 12 }}>
      {VARIANTS.map((variant) => (
        <Callout
          key={variant}
          variant={variant}
          description="Description message with two lines or more."
          icon={<PlaceholderIcon color={ICON_COLORS[variant]} />}
        />
      ))}
    </View>
  ),
};
// ─── Closable ─────────────────────────────────────────────────────────────────
export const Closable: Story = {
  name: 'Closable',
  parameters: {
    docs: {
      description: {
        story: 'Fornecendo `onClose`, o botão × aparece à direita.',
      },
    },
  },
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Callout
        variant="info"
        title="Informação importante"
        description="Esta mensagem pode ser fechada pelo usuário."
        icon={<PlaceholderIcon color={ICON_COLORS.info} />}
        onClose={() => setVisible(false)}
      />
    ) : (
      <Text
        style={{
          fontFamily: typography.fontFamily,
          fontSize: 14,
          color: '#9E9E9E',
        }}
      >
        Callout fechado. Recarregue a story para ver novamente.
      </Text>
    );
  },
};
// ─── Full Combo ───────────────────────────────────────────────────────────────
export const FullCombo: Story = {
  name: 'Full Combo (Actionable + Closable)',
  parameters: {
    docs: {
      description: {
        story: 'Callout com ícone, actionLabel e botão fechar simultaneamente.',
      },
    },
  },
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Callout
        variant="critical"
        title="Ação necessária"
        description="Sua conta precisa de verificação para continuar operando."
        icon={<PlaceholderIcon color={ICON_COLORS.critical} />}
        actionLabel="Verificar agora"
        onActionPress={() => {}}
        onClose={() => setVisible(false)}
      />
    ) : (
      <Text
        style={{
          fontFamily: typography.fontFamily,
          fontSize: 14,
          color: '#9E9E9E',
        }}
      >
        Callout fechado.
      </Text>
    );
  },
};
// ─── In Context ───────────────────────────────────────────────────────────────
export const InContext: Story = {
  name: 'In Context',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: callouts em tela de pagamento.',
      },
    },
  },
  render: () => {
    const [showWarning, setShowWarning] = useState(true);
    return (
      <View style={{ gap: 16, padding: 16 }}>
        <Callout
          variant="success"
          title="Pagamento confirmado"
          description="Seu Pix de R$ 150,00 foi enviado com sucesso."
          icon={<PlaceholderIcon color={ICON_COLORS.success} />}
          onClose={() => {}}
        />
        {showWarning && (
          <Callout
            variant="attention"
            title="Limite atingido"
            description="Você está próximo do limite diário de transferências."
            icon={<PlaceholderIcon color={ICON_COLORS.attention} />}
            actionLabel="Aumentar limite"
            onActionPress={() => {}}
            onClose={() => setShowWarning(false)}
          />
        )}
        <Callout
          variant="info"
          description="Transações Pix ficam disponíveis em até 10 minutos."
          icon={<PlaceholderIcon color={ICON_COLORS.info} />}
        />
      </View>
    );
  },
};
