import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Checkbox } from './Checkbox';
import { useTheme } from '../ThemeProvider/ThemeProvider';
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
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
export const WithoutLabel: Story = {
  name: 'Without Label',
  args: { label: undefined },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
};
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
    <Text style={[styles.stateLabel, { color: theme.content.subtle }]}>
      {text}
    </Text>
  );
}
export const AllStates: Story = {
  name: 'All States',
  render: () => {
    const [states, setStates] = useState<Record<number, boolean>>(
      Object.fromEntries(STATE_ROWS.map((r, i) => [i, r.checked]))
    );
    return (
      <View style={styles.container}>
        <Text style={styles.groupTitle}>With Label</Text>
        {STATE_ROWS.map((row, i) => (
          <View key={i} style={styles.row}>
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
        <Text style={styles.groupTitleSpaced}>Without Label</Text>
        {STATE_ROWS.map((row, i) => (
          <View key={`nl-${i}`} style={styles.row}>
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
