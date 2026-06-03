import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Radio } from './Radio';
import { useTheme } from '../ThemeProvider/ThemeProvider';
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
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
export const WithoutLabel: Story = {
  name: 'Without Label',
  args: { label: undefined },
  render: (args) => {
    const [selected, setSelected] = useState(true);
    return <Radio {...args} selected={selected} onChange={setSelected} />;
  },
};
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
    <Text style={[styles.stateLabel, { color: theme.content.subtle }]}>
      {text}
    </Text>
  );
}
export const AllStates: Story = {
  name: 'All States',
  render: () => {
    const [states, setStates] = useState<Record<number, boolean>>(
      Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.selected]))
    );
    return (
      <View style={styles.container}>
        <Text style={styles.groupTitle}>With Label</Text>
        {STATE_ROWS.map((row, i) => (
          <View key={i} style={styles.row}>
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
        <Text style={styles.groupTitleSpaced}>Without Label</Text>
        {STATE_ROWS.map((row, i) => (
          <View key={`nl-${i}`} style={styles.row}>
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
const styles = StyleSheet.create({
  stateLabel: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 8,
    width: 160,
  },
  container: { padding: 16, gap: 20 },
  groupTitle: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '700',
    marginBottom: 4,
  },
  groupTitleSpaced: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 4,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 16 },
});
