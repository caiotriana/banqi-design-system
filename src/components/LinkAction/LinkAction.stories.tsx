import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { LinkAction } from './LinkAction';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import type { LinkActionSize } from './LinkAction';
const meta: Meta<typeof LinkAction> = {
  title: 'Components/LinkAction',
  component: LinkAction,
  tags: ['autodocs'],
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
const ALL_SIZES: LinkActionSize[] = ['standard', 'large'];
function VariantsGrid() {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={[styles.label, { color: theme.content.subtle }]}>
          OnColor: False
        </Text>
        {ALL_SIZES.map((size) => (
          <View key={size} style={styles.sizeGroup}>
            <Text
              style={[
                styles.label,
                {
                  fontSize: typography.fontSize.x3 - 2,
                  color: theme.content.subtle,
                },
              ]}
            >
              {size} — enabled / disabled
            </Text>
            <View style={styles.row}>
              <LinkAction size={size} label="Link" />
              <LinkAction size={size} label="Link" disabled />
            </View>
          </View>
        ))}
      </View>
      <View
        style={[
          styles.onColorContainer,
          { backgroundColor: theme.surface.accent.primary },
        ]}
      >
        <Text
          style={[styles.label, { color: theme.content.common.onColorSubtle }]}
        >
          OnColor: True
        </Text>
        {ALL_SIZES.map((size) => (
          <View key={size} style={styles.sizeGroup}>
            <Text
              style={[
                styles.label,
                {
                  fontSize: typography.fontSize.x3 - 2,
                  color: theme.content.common.onColorSubtle,
                },
              ]}
            >
              {size} — enabled / disabled
            </Text>
            <View style={styles.row}>
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
const styles = StyleSheet.create({
  label: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  container: { gap: 24, padding: 16 },
  group: { gap: 16 },
  sizeGroup: { gap: 8 },
  row: { flexDirection: 'row', gap: 24, flexWrap: 'wrap' },
  onColorContainer: { borderRadius: 12, padding: 16, gap: 16 },
});
