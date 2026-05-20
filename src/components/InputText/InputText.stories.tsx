import { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { InputText } from './InputText';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import type { InputTextSize, InputTextState } from './InputText';
const meta: Meta<typeof InputText> = {
  title: 'Components/InputText',
  component: InputText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Campo de entrada de texto, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797:1690).
Consome exclusivamente tokens do pacote \`banqi-tokens/rn\` via **ThemeProvider**. Use o botão **Theme** na toolbar para alternar entre os temas.
- **size**: \`default\` (16px) ou \`large\` (32px)
- **state**: \`default\` · \`disabled\` · \`readOnly\` · \`success\` · \`error\` · \`warning\`
- **prefix**: string (ex.: \`"R$"\`) ou ReactNode dentro do campo
- **trailingIcon**: slot ReactNode no fim do campo
- **focus**: estado interno — borda muda para \`stroke.accent.primary\` e sombra inverte (\`+1.5px\` → \`-1.5px\`)
`,
      },
    },
  },
  argTypes: {
    label: { control: 'text', table: { type: { summary: 'string' } } },
    placeholder: { control: 'text', table: { type: { summary: 'string' } } },
    hintMessage: { control: 'text', table: { type: { summary: 'string' } } },
    size: {
      control: 'select',
      options: ['default', 'large'] satisfies InputTextSize[],
      table: {
        type: { summary: 'InputTextSize' },
        defaultValue: { summary: 'default' },
      },
    },
    state: {
      control: 'select',
      options: [
        'default',
        'disabled',
        'readOnly',
        'success',
        'error',
        'warning',
      ] satisfies InputTextState[],
      table: {
        type: { summary: 'InputTextState' },
        defaultValue: { summary: 'default' },
      },
    },
    prefix: { table: { type: { summary: 'ReactNode | string' } } },
    trailingIcon: { table: { type: { summary: 'ReactNode' } } },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    hintMessage: 'Message',
    size: 'default',
    state: 'default',
  },
};
export default meta;
type Story = StoryObj<typeof InputText>;
export const Playground: Story = { name: 'Playground' };
// ─── Variações de uso ─────────────────────────────────────────────────────────
export const WithPrefix: Story = {
  name: 'With Prefix',
  args: {
    label: 'Valor',
    placeholder: '0,00',
    prefix: 'R$',
    hintMessage: 'Informe o valor em reais',
  },
};
const DotIcon = ({ color = '#191E2F' }: { color?: string }) => (
  <View
    style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: color }}
  />
);
export const WithTrailingIcon: Story = {
  name: 'With Trailing Icon',
  args: {
    label: 'CPF',
    placeholder: '000.000.000-00',
    hintMessage: 'Digite seu CPF',
  },
  render: (args) => <InputText {...args} trailingIcon={<DotIcon />} />,
};
export const Controlled: Story = {
  name: 'Controlled',
  args: {
    label: 'Nome',
    placeholder: 'Como podemos te chamar?',
    hintMessage: 'Apenas letras',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputText {...args} value={value} onChangeText={setValue} />;
  },
};
// ─── Grid: todos os estados × tamanhos ────────────────────────────────────────
const ALL_STATES: InputTextState[] = [
  'default',
  'disabled',
  'readOnly',
  'success',
  'error',
  'warning',
];
const ALL_SIZES: InputTextSize[] = ['default', 'large'];
const HINT_BY_STATE: Record<InputTextState, string> = {
  default: 'Message',
  disabled: 'Message',
  readOnly: 'Message',
  success: 'Tudo certo!',
  error: 'Campo inválido',
  warning: 'Verifique a informação',
};
function VariantsGrid({ size }: { size: InputTextSize }) {
  const { theme } = useTheme();
  return (
    <View style={{ gap: 24, padding: 16 }}>
      {ALL_STATES.map((state) => (
        <View key={state} style={{ gap: 8, maxWidth: 360 }}>
          <Text
            style={{
              fontFamily: typography.fontFamily,
              fontSize: typography.fontSize.x3,
              fontWeight: '600',
              color: theme.content.subtle,
              textTransform: 'uppercase',
              letterSpacing: 0.4,
            }}
          >
            State: {state}
          </Text>
          <InputText
            label="Label"
            placeholder="Placeholder"
            hintMessage={HINT_BY_STATE[state]}
            size={size}
            state={state}
          />
          <InputText
            label="Label (filled)"
            value="Filled"
            hintMessage={HINT_BY_STATE[state]}
            size={size}
            state={state}
            prefix="R$"
          />
        </View>
      ))}
    </View>
  );
}
export const AllStates: Story = {
  name: 'All States × Default',
  render: () => <VariantsGrid size="default" />,
};
export const AllStatesLarge: Story = {
  name: 'All States × Large',
  render: () => <VariantsGrid size="large" />,
};
export const AllSizes: Story = {
  name: 'All Sizes (default state)',
  render: () => (
    <View style={{ gap: 24, padding: 16, maxWidth: 360 }}>
      {ALL_SIZES.map((size) => (
        <InputText
          key={size}
          label={`Size: ${size}`}
          placeholder="Placeholder"
          hintMessage="Message"
          size={size}
        />
      ))}
    </View>
  ),
};
