import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Badge } from './Badge';
import type { BadgeVariant } from './Badge.types';
import { useTheme } from '../ThemeProvider/ThemeProvider';
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
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
      options: [
        'highlight',
        'neutral',
        'accent',
        'success',
        'warning',
        'critical',
      ],
      table: { defaultValue: { summary: 'neutral' } },
    },
    showDot: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    label: { control: 'text' },
  },
  args: { label: 'Label', variant: 'accent', showDot: false, disabled: false },
};
export default meta;
type Story = StoryObj<typeof Badge>;
export const Playground: Story = { name: 'Playground' };
const VARIANTS: BadgeVariant[] = [
  'highlight',
  'neutral',
  'accent',
  'success',
  'warning',
  'critical',
];
function SectionTitle({ text }: { text: string }) {
  const { theme } = useTheme();
  return (
    <Text style={[styles.sectionTitle, { color: theme.content.default }]}>
      {text}
    </Text>
  );
}
export const FullMatrix: Story = {
  name: 'Full Matrix',
  render: () => (
    <View style={styles.container}>
      <View style={styles.group}>
        <SectionTitle text="Status=False" />
        <View style={styles.rowWrap}>
          {VARIANTS.map((v) => (
            <Badge key={v} label={v} variant={v} />
          ))}
        </View>
      </View>
      <View style={styles.group}>
        <SectionTitle text="Status=True" />
        <View style={styles.rowWrap}>
          {VARIANTS.map((v) => (
            <Badge key={v} label={v} variant={v} showDot />
          ))}
        </View>
      </View>
      <View style={styles.group}>
        <SectionTitle text="Disabled" />
        <View style={styles.row}>
          <Badge label="Label" disabled />
          <Badge label="Label" disabled showDot />
        </View>
      </View>
    </View>
  ),
};
const styles = StyleSheet.create({
  decorator: { alignItems: 'flex-start' },
  sectionTitle: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '700',
    marginBottom: 8,
  },
  container: { padding: 16, gap: 20 },
  group: { gap: 10 },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  row: { flexDirection: 'row', gap: 8 },
});
