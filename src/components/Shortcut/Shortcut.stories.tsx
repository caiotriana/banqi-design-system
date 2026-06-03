import { StyleSheet, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Shortcut } from './Shortcut';
import { Badge } from '../Badge';
function PlaceholderIcon({ color = '#191E2F' }: { color?: string }) {
  return <View style={[styles.placeholderIcon, { backgroundColor: color }]} />;
}
const meta: Meta<typeof Shortcut> = {
  title: 'Components/Shortcut',
  component: Shortcut,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
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
export const SlotVariants: Story = {
  name: 'Slot Variants',
  render: () => (
    <View style={styles.group}>
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
export const TrailingBadgeVariants: Story = {
  name: 'Trailing / Badge Variants',
  render: () => (
    <View style={styles.group}>
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
const styles = StyleSheet.create({
  placeholderIcon: { width: 20, height: 20, borderRadius: 4, opacity: 0.2 },
  decorator: { alignItems: 'flex-start' },
  group: { gap: 12 },
});
