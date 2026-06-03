import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Callout } from './Callout';
import type { CalloutVariant } from './Callout.types';
import { useTheme } from '../ThemeProvider/ThemeProvider';
function PlaceholderIcon({ color = '#191E2F' }: { color?: string }) {
  return (
    <View style={[styles.placeholderIcon, { borderColor: color }]}>
      <Text style={[styles.placeholderText, { color }]}>i</Text>
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
      <View style={styles.decorator}>
        <Story />
      </View>
    ),
  ],
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
function SectionTitle({ text }: { text: string }) {
  const { theme } = useTheme();
  return (
    <Text style={[styles.sectionTitle, { color: theme.content.default }]}>
      {text}
    </Text>
  );
}
export const AllVariantsWithIcon: Story = {
  name: 'All Variants',
  render: () => (
    <View style={styles.group}>
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
export const AllVariantsActionable: Story = {
  name: 'All Variants Actionable',
  render: () => (
    <View style={styles.group}>
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
export const WithoutTitle: Story = {
  name: 'Without Title',
  render: () => (
    <View style={styles.group}>
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
export const Closable: Story = {
  name: 'Closable',
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
      <Text style={styles.closedText}>
        Callout fechado. Recarregue a story para ver novamente.
      </Text>
    );
  },
};
export const FullCombo: Story = {
  name: 'Full Combo (Actionable + Closable)',
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
      <Text style={styles.closedText}>Callout fechado.</Text>
    );
  },
};
const styles = StyleSheet.create({
  decorator: { alignItems: 'flex-start' },
  placeholderIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontFamily: typography.fontFamily,
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 12,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '700',
    marginBottom: 8,
  },
  group: { gap: 12 },
  closedText: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    color: '#9E9E9E',
  },
});
