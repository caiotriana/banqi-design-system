import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Badge } from './Badge';
import type { BadgeVariant } from './Badge.types';
import { useTheme } from '../ThemeProvider/ThemeProvider';
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
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
Componente Badge do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 795-754).
Suporta **6 variantes** (highlight, neutral, accent, success, warning, critical) × **estado disabled**,
com dot de status opcional. Componente puramente visual — sem interação.
Consome tokens via \`useTheme()\`.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'highlight',
        'neutral',
        'accent',
        'success',
        'warning',
        'critical',
      ],
      table: { defaultValue: { summary: 'neutral' } },
    },
    showDot: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    label: { control: 'text' },
  },
  args: { label: 'Label', variant: 'accent', showDot: false, disabled: false },
};
export default meta;
type Story = StoryObj<typeof Badge>;
export const Playground: Story = { name: 'Playground' };
// ─── Full Matrix ──────────────────────────────────────────────────────────────
const VARIANTS: BadgeVariant[] = [
  'highlight',
  'neutral',
  'accent',
  'success',
  'warning',
  'critical',
];
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
export const FullMatrix: Story = {
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Grid completo: todas as variantes × sem dot / com dot / disabled.',
      },
    },
  },
  render: () => (
    <View style={{ padding: 16, gap: 20 }}>
      <View style={{ gap: 10 }}>
        <SectionTitle text="Status=False" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {VARIANTS.map((v) => (
            <Badge key={v} label={v} variant={v} />
          ))}
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <SectionTitle text="Status=True" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {VARIANTS.map((v) => (
            <Badge key={v} label={v} variant={v} showDot />
          ))}
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <SectionTitle text="Disabled" />
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <Badge label="Label" disabled />
          <Badge label="Label" disabled showDot />
        </View>
      </View>
    </View>
  ),
};
// ─── In Context ───────────────────────────────────────────────────────────────
export const InContext: Story = {
  name: 'In Context',
  parameters: {
    docs: {
      description: { story: 'Exemplo de uso real: badges em itens de lista.' },
    },
  },
  render: () => {
    const { theme } = useTheme();
    const items = [
      {
        title: 'Pix recebido',
        amount: 'R$ 150,00',
        badge: { label: 'Recebido', variant: 'success' as BadgeVariant },
      },
      {
        title: 'Boleto pendente',
        amount: 'R$ 89,90',
        badge: {
          label: 'Pendente',
          variant: 'warning' as BadgeVariant,
          showDot: true,
        },
      },
      {
        title: 'Transferência',
        amount: 'R$ 500,00',
        badge: { label: 'Novo', variant: 'accent' as BadgeVariant },
      },
      {
        title: 'Pagamento recusado',
        amount: 'R$ 200,00',
        badge: { label: 'Recusado', variant: 'critical' as BadgeVariant },
      },
      {
        title: 'Conta bloqueada',
        amount: '—',
        badge: { label: 'Inativo', disabled: true },
      },
    ];
    return (
      <View style={{ padding: 16, gap: 0 }}>
        {items.map((item, i) => (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: theme.stroke.default,
            }}
          >
            <Text
              style={{
                fontFamily: typography.fontFamily,
                fontSize: typography.fontSize.x3_5,
                color: theme.content.default,
                flex: 1,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: typography.fontFamily,
                fontSize: typography.fontSize.x3_5,
                fontWeight: '600',
                color: theme.content.default,
                marginRight: 8,
              }}
            >
              {item.amount}
            </Text>
            <Badge {...item.badge} label={item.badge.label} />
          </View>
        ))}
      </View>
    );
  },
};
