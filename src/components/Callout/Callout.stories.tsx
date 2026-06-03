import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Placeholder, Info, Warning, Check, Block } from 'banqi-icons';
import { Callout } from './Callout';
import { getCalloutTokens } from './Callout.styles';
import type { CalloutVariant } from './Callout.types';
import { useTheme } from '../ThemeProvider/ThemeProvider';

const VARIANTS: CalloutVariant[] = [
  'standard',
  'info',
  'success',
  'attention',
  'critical',
];

const VARIANT_ICONS: Record<
  CalloutVariant,
  React.ComponentType<{ size?: number; color?: string }>
> = {
  standard: Placeholder,
  info: Info,
  success: Check,
  attention: Warning,
  critical: Block,
};

/** Ícone semântico da variante, colorido com o token de texto do Callout. */
function CalloutIcon({ variant }: { variant: CalloutVariant }) {
  const { theme } = useTheme();
  const { textColor } = getCalloutTokens(theme, variant);
  const Icon = VARIANT_ICONS[variant];
  return <Icon size={20} color={textColor} />;
}

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
      icon={<CalloutIcon variant={args.variant ?? 'standard'} />}
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
          icon={<CalloutIcon variant={variant} />}
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
          icon={<CalloutIcon variant={variant} />}
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
          icon={<CalloutIcon variant={variant} />}
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
        icon={<CalloutIcon variant="info" />}
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
        icon={<CalloutIcon variant="critical" />}
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
