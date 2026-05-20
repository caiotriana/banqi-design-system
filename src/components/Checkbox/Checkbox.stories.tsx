import { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Checkbox } from './Checkbox';
import { useTheme } from '../ThemeProvider/ThemeProvider';
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente Checkbox do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 795-820).
Suporta **4 estados** (enabled, hover, pressed, disabled) × **2 seleções** (checked/unchecked),
com preview do checkmark em hover/pressed unchecked e label opcional.
Consome tokens via \`useTheme()\`.
`,
      },
    },
  },
  argTypes: {
    checked: {
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
    checked: true,
    disabled: false,
    label: 'Label',
    accessibilityLabel: 'Checkbox',
  },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
};
// ─── Without Label ────────────────────────────────────────────────────────────
export const WithoutLabel: Story = {
  name: 'Without Label',
  args: { label: undefined },
  parameters: {
    docs: { description: { story: 'Apenas o quadrado 24×24, sem label.' } },
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
};
// ─── All States ───────────────────────────────────────────────────────────────
type StateRow = { label: string; checked: boolean; disabled: boolean };
const STATE_ROWS: StateRow[] = [
  { label: 'Enabled / Unchecked', checked: false, disabled: false },
  { label: 'Enabled / Checked', checked: true, disabled: false },
  { label: 'Disabled / Unchecked', checked: false, disabled: true },
  { label: 'Disabled / Checked', checked: true, disabled: true },
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
      Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.checked]))
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
            <Checkbox
              checked={row.disabled ? row.checked : states[i]}
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
            <Checkbox
              checked={row.disabled ? row.checked : states[i]}
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
// ─── Interactive List ─────────────────────────────────────────────────────────
export const InteractiveList: Story = {
  name: 'Interactive List',
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de uso real: lista de opções com checkboxes independentes.',
      },
    },
  },
  render: () => {
    const options = ['Transferência', 'Pix', 'Boleto', 'Cartão de crédito'];
    const [selected, setSelected] = useState<Set<number>>(new Set([0]));
    function toggle(i: number) {
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(i) ? next.delete(i) : next.add(i);
        return next;
      });
    }
    return (
      <View style={{ padding: 16, gap: 12 }}>
        {options.map((opt, i) => (
          <Checkbox
            key={opt}
            checked={selected.has(i)}
            onChange={() => toggle(i)}
            label={opt}
            accessibilityLabel={opt}
          />
        ))}
      </View>
    );
  },
};
