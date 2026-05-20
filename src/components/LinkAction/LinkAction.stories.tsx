import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { LinkAction } from './LinkAction';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import type { LinkActionSize } from './LinkAction';
const meta: Meta<typeof LinkAction> = {
  title: 'Components/LinkAction',
  component: LinkAction,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente de link com ícone de ação, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-1867).
Consome exclusivamente tokens do pacote \`banqi-tokens/rn\` via **ThemeProvider**. Use o botão **Theme** na toolbar para alternar entre os temas.
- **size**: \`standard\` (14px, ícone 16×16) ou \`large\` (16px, ícone 20×20)
- **onColor**: aplica cores para fundos coloridos/escuros (branco)
- **disabled**: desativa interação e escurece o texto
- **icon**: slot ReactNode; padrão é a seta ↗ (external link)
`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: ['standard', 'large'] satisfies LinkActionSize[],
      table: {
        type: { summary: 'LinkActionSize' },
        defaultValue: { summary: 'standard' },
      },
    },
    onColor: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: { table: { type: { summary: 'ReactNode' } } },
    onPress: { table: { disable: true } },
  },
  args: { label: 'Link', size: 'standard', onColor: false, disabled: false },
};
export default meta;
type Story = StoryObj<typeof LinkAction>;
export const Playground: Story = { name: 'Playground' };
// ─── Grid todas as variantes ──────────────────────────────────────────────────
const ALL_SIZES: LinkActionSize[] = ['standard', 'large'];
function VariantsGrid() {
  const { theme } = useTheme();
  const labelStyle = {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '600' as const,
    color: theme.content.subtle,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.4,
    marginBottom: 8,
  };
  return (
    <View style={{ gap: 24, padding: 16 }}>
      {/* OnColor=False */}
      <View style={{ gap: 16 }}>
        <Text style={labelStyle}>OnColor: False</Text>
        {ALL_SIZES.map((size) => (
          <View key={size} style={{ gap: 8 }}>
            <Text
              style={[labelStyle, { fontSize: typography.fontSize.x3 - 2 }]}
            >
              {size} — enabled / disabled
            </Text>
            <View style={{ flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}>
              <LinkAction size={size} label="Link" />
              <LinkAction size={size} label="Link" disabled />
            </View>
          </View>
        ))}
      </View>
      {/* OnColor=True */}
      <View
        style={{
          backgroundColor: theme.surface.accent.primary,
          borderRadius: 12,
          padding: 16,
          gap: 16,
        }}
      >
        <Text
          style={[labelStyle, { color: theme.content.common.onColorSubtle }]}
        >
          OnColor: True
        </Text>
        {ALL_SIZES.map((size) => (
          <View key={size} style={{ gap: 8 }}>
            <Text
              style={[
                labelStyle,
                {
                  fontSize: typography.fontSize.x3 - 2,
                  color: theme.content.common.onColorSubtle,
                },
              ]}
            >
              {size} — enabled / disabled
            </Text>
            <View style={{ flexDirection: 'row', gap: 24, flexWrap: 'wrap' }}>
              <LinkAction size={size} label="Link" onColor />
              <LinkAction size={size} label="Link" onColor disabled />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
export const AllVariants: Story = {
  name: 'All Variants × States',
  render: () => <VariantsGrid />,
};
