import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Shortcut } from './Shortcut';
import { Badge } from '../Badge';
// Substitua pelo seu sistema de ícones real (ex: @expo/vector-icons, react-native-vector-icons)
function PlaceholderIcon({ color = '#191E2F' }: { color?: string }) {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: color,
        opacity: 0.2,
      }}
    />
  );
}
const meta: Meta<typeof Shortcut> = {
  title: 'Components/Shortcut',
  component: Shortcut,
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
Componente Shortcut do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-2489).
Card de atalho interativo com suporte a 3 estados (enabled, hover, pressed).
**Composable** — os slots \`leading\` e \`trailing\` aceitam qualquer \`ReactNode\`:
- \`leading\`: slot de ícone (esquerda do topo)
- \`trailing\`: slot de badge/notificação (direita do topo)
O componente **não importa** Badge nem ícones diretamente.
No consumidor:
\`\`\`tsx
import { Shortcut } from '../Shortcut';
import { Badge } from '../Badge';
<Shortcut
  title="Pix"
  description="Transferência instantânea"
  leading={<Icon name="pix" size={20} />}
  trailing={<Badge label="Novo" variant="accent" />}
  onPress={() => navigate('pix')}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    leading: { table: { disable: true } },
    trailing: { table: { disable: true } },
    onPress: { table: { disable: true } },
  },
  args: { title: 'Title', description: 'Description' },
};
export default meta;
type Story = StoryObj<typeof Shortcut>;
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Shortcut
      {...args}
      leading={<PlaceholderIcon />}
      trailing={<Badge label="Novo" variant="accent" />}
      onPress={() => {}}
    />
  ),
};
// ─── Combinações de slots ─────────────────────────────────────────────────────
export const SlotVariants: Story = {
  name: 'Slot Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Todas as combinações de slots opcionais: com/sem leading, trailing e description.',
      },
    },
  },
  render: () => (
    <View style={{ gap: 12 }}>
      <Shortcut
        title="Com todos os slots"
        description="Description"
        leading={<PlaceholderIcon />}
        trailing={<Badge label="Novo" variant="accent" />}
        onPress={() => {}}
      />
      <Shortcut
        title="Sem description"
        leading={<PlaceholderIcon />}
        trailing={<Badge label="Novo" variant="accent" />}
        onPress={() => {}}
      />
      <Shortcut
        title="Sem leading"
        description="Description"
        trailing={<Badge label="Novo" variant="accent" />}
        onPress={() => {}}
      />
      <Shortcut
        title="Sem trailing"
        description="Description"
        leading={<PlaceholderIcon />}
        onPress={() => {}}
      />
      <Shortcut
        title="Apenas texto"
        description="Description"
        onPress={() => {}}
      />
    </View>
  ),
};
// ─── Trailing / Badge Variants ────────────────────────────────────────────────
export const TrailingBadgeVariants: Story = {
  name: 'Trailing / Badge Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Diferentes badges no slot trailing. O Shortcut não depende do tipo de badge usado.',
      },
    },
  },
  render: () => (
    <View style={{ gap: 12 }}>
      <Shortcut
        title="Pix"
        description="Transferência instantânea"
        leading={<PlaceholderIcon />}
        trailing={<Badge label="Novo" variant="accent" />}
        onPress={() => {}}
      />
      <Shortcut
        title="Boleto"
        description="Pagamento de contas"
        leading={<PlaceholderIcon />}
        trailing={<Badge label="Pendente" variant="warning" showDot />}
        onPress={() => {}}
      />
      <Shortcut
        title="Transferência"
        description="TED e DOC"
        leading={<PlaceholderIcon />}
        trailing={<Badge label="Aprovado" variant="success" />}
        onPress={() => {}}
      />
      <Shortcut
        title="Cartão"
        description="Crédito e débito"
        leading={<PlaceholderIcon />}
        trailing={<Badge label="Bloqueado" variant="critical" />}
        onPress={() => {}}
      />
      <Shortcut
        title="Extrato"
        description="Histórico de transações"
        leading={<PlaceholderIcon />}
        trailing={<Badge label="Destaque" variant="highlight" />}
        onPress={() => {}}
      />
    </View>
  ),
};
// ─── Shortcut Grid ────────────────────────────────────────────────────────────
export const ShortcutGrid: Story = {
  name: 'Shortcut Grid',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: grid de atalhos na home do app.',
      },
    },
  },
  render: () => {
    const shortcuts = [
      {
        title: 'Pix',
        description: 'Enviar e receber',
        badge: { label: 'Novo', variant: 'accent' as const },
      },
      {
        title: 'Boleto',
        description: 'Pagar contas',
        badge: { label: '3', variant: 'critical' as const },
      },
      { title: 'Transferir', description: 'TED e DOC' },
      {
        title: 'Cobrar',
        description: 'Gere uma cobrança',
        badge: { label: 'Beta', variant: 'highlight' as const },
      },
      { title: 'Recarga', description: 'Celular e TV' },
      { title: 'Cartão', description: 'Virtual e físico' },
    ];
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {shortcuts.map((item) => (
          <Shortcut
            key={item.title}
            title={item.title}
            description={item.description}
            leading={<PlaceholderIcon />}
            trailing={
              item.badge ? (
                <Badge label={item.badge.label} variant={item.badge.variant} />
              ) : undefined
            }
            onPress={() => {}}
            accessibilityLabel={item.title}
          />
        ))}
      </View>
    );
  },
};
