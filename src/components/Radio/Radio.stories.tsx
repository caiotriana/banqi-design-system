import { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Radio } from './Radio';
import { useTheme } from '../ThemeProvider/ThemeProvider';
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente Radio do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-2340).
Suporta **4 estados** (enabled, hover, pressed, disabled) × **2 seleções** (selected/unselected),
com preview do dot em hover/pressed unselected e label opcional.
Consome tokens via \`useTheme()\`.
`,
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    label: { control: 'text' },
    onChange: { table: { disable: true } },
  },
  args: {
    selected: true,
    disabled: false,
    label: 'Label',
    accessibilityLabel: 'Radio',
  },
};
export default meta;
type Story = StoryObj<typeof Radio>;
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const [selected, setSelected] = useState(args.selected ?? true);
    return <Radio {...args} selected={selected} onChange={setSelected} />;
  },
};
// ─── Without Label ────────────────────────────────────────────────────────────
export const WithoutLabel: Story = {
  name: 'Without Label',
  args: { label: undefined },
  parameters: {
    docs: { description: { story: 'Apenas o círculo 24×24, sem label.' } },
  },
  render: (args) => {
    const [selected, setSelected] = useState(true);
    return <Radio {...args} selected={selected} onChange={setSelected} />;
  },
};
// ─── All States ───────────────────────────────────────────────────────────────
type StateRow = { label: string; selected: boolean; disabled: boolean };
const STATE_ROWS: StateRow[] = [
  { label: 'Enabled / Unselected', selected: false, disabled: false },
  { label: 'Enabled / Selected', selected: true, disabled: false },
  { label: 'Disabled / Unselected', selected: false, disabled: true },
  { label: 'Disabled / Selected', selected: true, disabled: true },
];
function StateLabel({ text }: { text: string }) {
  const { theme } = useTheme();
  return (
    <Text
      style={{
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.x3,
        fontWeight: '600',
        color: theme.content.subtle,
        textTransform: 'uppercase',
        letterSpacing: 0.4,
        marginBottom: 8,
        width: 160,
      }}
    >
      {text}
    </Text>
  );
}
export const AllStates: Story = {
  name: 'All States',
  parameters: {
    docs: {
      description: {
        story: 'Todas as combinações de estado × seleção, com e sem label.',
      },
    },
  },
  render: () => {
    const [states, setStates] = useState<Record<number, boolean>>(
      Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.selected]))
    );
    return (
      <View style={{ padding: 16, gap: 20 }}>
        <Text
          style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize.x3,
            fontWeight: '700',
            marginBottom: 4,
          }}
        >
          With Label
        </Text>
        {STATE_ROWS.map((row, i) => (
          <View
            key={i}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}
          >
            <StateLabel text={row.label} />
            <Radio
              selected={row.disabled ? row.selected : states[i]}
              onChange={(v) => setStates((s) => ({ ...s, [i]: v }))}
              label="Label"
              disabled={row.disabled}
              accessibilityLabel={row.label}
            />
          </View>
        ))}
        <Text
          style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.fontSize.x3,
            fontWeight: '700',
            marginTop: 8,
            marginBottom: 4,
          }}
        >
          Without Label
        </Text>
        {STATE_ROWS.map((row, i) => (
          <View
            key={`nl-${i}`}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}
          >
            <StateLabel text={row.label} />
            <Radio
              selected={row.disabled ? row.selected : states[i]}
              onChange={(v) => setStates((s) => ({ ...s, [i]: v }))}
              disabled={row.disabled}
              accessibilityLabel={row.label}
            />
          </View>
        ))}
      </View>
    );
  },
};
// ─── Interactive Group ────────────────────────────────────────────────────────
export const InteractiveGroup: Story = {
  name: 'Interactive Group',
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso real: grupo de opções mutuamente exclusivas.',
      },
    },
  },
  render: () => {
    const options = ['Transferência', 'Pix', 'Boleto', 'Cartão de crédito'];
    const [selected, setSelected] = useState<number>(0);
    return (
      <View style={{ padding: 16, gap: 12 }}>
        {options.map((opt, i) => (
          <Radio
            key={opt}
            selected={selected === i}
            onChange={() => setSelected(i)}
            label={opt}
            accessibilityLabel={opt}
          />
        ))}
      </View>
    );
  },
};
