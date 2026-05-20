import { useState } from 'react';
import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Toggle } from './Toggle';
import { useTheme } from '../ThemeProvider/ThemeProvider';
const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente Toggle do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-2684).
Suporta **4 estados** (enabled, hover, pressed, disabled) × **2 posições** (off/on),
com animação suave do knob entre as posições e label opcional.
Track 40×24px com knob 16×16px animado via \`Animated.spring\`.
Consome tokens via \`useTheme()\`.
`,
      },
    },
  },
  argTypes: {
    enabled: {
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
    enabled: true,
    disabled: false,
    label: 'Label',
    accessibilityLabel: 'Toggle',
  },
};
export default meta;
type Story = StoryObj<typeof Toggle>;
export const Playground: Story = {
  name: 'Playground',
  render: (args) => {
    const [enabled, setEnabled] = useState(args.enabled ?? true);
    return <Toggle {...args} enabled={enabled} onChange={setEnabled} />;
  },
};
// ─── Without Label ────────────────────────────────────────────────────────────
export const WithoutLabel: Story = {
  name: 'Without Label',
  args: { label: undefined },
  parameters: {
    docs: { description: { story: 'Apenas o track 40×24px, sem label.' } },
  },
  render: (args) => {
    const [enabled, setEnabled] = useState(true);
    return <Toggle {...args} enabled={enabled} onChange={setEnabled} />;
  },
};
// ─── All States ───────────────────────────────────────────────────────────────
type StateRow = { label: string; enabled: boolean; disabled: boolean };
const STATE_ROWS: StateRow[] = [
  { label: 'Enabled / Off', enabled: false, disabled: false },
  { label: 'Enabled / On', enabled: true, disabled: false },
  { label: 'Disabled / Off', enabled: false, disabled: true },
  { label: 'Disabled / On', enabled: true, disabled: true },
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
        story: 'Todas as combinações de estado × posição, com e sem label.',
      },
    },
  },
  render: () => {
    const [states, setStates] = useState<Record<number, boolean>>(
      Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.enabled]))
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
            <Toggle
              enabled={row.disabled ? row.enabled : states[i]}
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
            <Toggle
              enabled={row.disabled ? row.enabled : states[i]}
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
// ─── Interactive Settings List ────────────────────────────────────────────────
export const InteractiveList: Story = {
  name: 'Interactive Settings List',
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de uso real: lista de configurações com toggles independentes.',
      },
    },
  },
  render: () => {
    const settings = [
      'Receber notificações',
      'Modo escuro',
      'Autenticação biométrica',
      'Salvar senha',
    ];
    const [states, setStates] = useState<Record<number, boolean>>({
      0: true,
      1: false,
      2: true,
      3: false,
    });
    return (
      <View style={{ padding: 16, gap: 16 }}>
        {settings.map((setting, i) => (
          <Toggle
            key={setting}
            enabled={states[i]}
            onChange={() => setStates((prev) => ({ ...prev, [i]: !prev[i] }))}
            label={setting}
            accessibilityLabel={setting}
          />
        ))}
      </View>
    );
  },
};
