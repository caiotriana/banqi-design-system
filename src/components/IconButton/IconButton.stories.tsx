import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { IconButton } from './IconButton';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import type { IconButtonVariant, IconButtonSize } from './IconButton.types';
const VARIANT_ICON_COLOR: Record<string, string> = {
  'primary': '#ffffff',
  'secondary': '#0033c6',
  'ghost': '#0033c6',
  'ghost-oncolor': '#ffffff',
  'oncolor': '#0033c6',
  'critical': '#ffffff',
  'ghost-critical': '#ce1732',
};
function PlaceholderIcon({ color = '#fff' }: { color?: string }) {
  return <View style={[styles.placeholderIcon, { borderColor: color }]} />;
}
const ALL_VARIANTS: IconButtonVariant[] = [
  'primary',
  'secondary',
  'ghost',
  'ghost-oncolor',
  'oncolor',
  'critical',
  'ghost-critical',
];
const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
      table: {
        type: { summary: 'IconButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['medium', 'small'] satisfies IconButtonSize[],
      table: {
        type: { summary: 'IconButtonSize' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: { table: { disable: true } },
    onPress: { table: { disable: true } },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    accessibilityLabel: 'Ação',
  },
  render: (args) => (
    <IconButton {...args} icon={<PlaceholderIcon color="#fff" />} />
  ),
};
export default meta;
type Story = StoryObj<typeof IconButton>;
export const Playground: Story = { name: 'Playground' };
function VariantLabel({ label }: { label: string }) {
  const { theme } = useTheme();
  return (
    <Text style={[styles.variantLabel, { color: theme.content.subtle }]}>
      {label}
    </Text>
  );
}
export const DisabledState: Story = {
  name: 'State / Disabled',
  render: () => (
    <View style={styles.rowWrap}>
      {ALL_VARIANTS.map((variant) => (
        <View key={variant} style={styles.item}>
          <IconButton
            variant={variant}
            size="medium"
            disabled
            accessibilityLabel={`${variant} disabled`}
            icon={<PlaceholderIcon color="#9e9e9e" />}
          />
          <VariantLabel label={variant} />
        </View>
      ))}
    </View>
  ),
};
export const OnColorBackground: Story = {
  name: 'OnColor Background',
  render: () => {
    const { theme } = useTheme();
    return (
      <View
        style={[
          styles.onColorContainer,
          { backgroundColor: theme.surface.accent.primary },
        ]}
      >
        {(['oncolor', 'ghost-oncolor'] as IconButtonVariant[]).map(
          (variant) => (
            <View key={variant} style={styles.item}>
              <IconButton
                variant={variant}
                size="medium"
                accessibilityLabel={variant}
                icon={
                  <PlaceholderIcon
                    color={variant === 'oncolor' ? '#0033c6' : '#fff'}
                  />
                }
              />
              <Text
                style={[
                  styles.onColorLabel,
                  { color: theme.content.common.onColor },
                ]}
              >
                {variant}
              </Text>
            </View>
          )
        )}
      </View>
    );
  },
};
export const CriticalVariants: Story = {
  name: 'Critical Variants',
  render: () => (
    <View style={styles.row}>
      {(['critical', 'ghost-critical'] as IconButtonVariant[]).map(
        (variant) => (
          <View key={variant} style={styles.item}>
            <IconButton
              variant={variant}
              size="medium"
              accessibilityLabel={variant}
              icon={<PlaceholderIcon color="#fff" />}
            />
            <VariantLabel label={variant} />
          </View>
        )
      )}
    </View>
  ),
};
export const FullMatrix: Story = {
  name: 'Full Matrix — Variants × Sizes',
  render: () => {
    const { theme } = useTheme();
    const sizes: IconButtonSize[] = ['medium', 'small'];
    return (
      <View style={styles.matrixContainer}>
        {sizes.map((size) => (
          <View key={size}>
            <Text style={[styles.sizeLabel, { color: theme.content.subtle }]}>
              Size: {size}
            </Text>
            <View style={styles.matrixRow}>
              {ALL_VARIANTS.map((variant) => {
                const needsColorBg =
                  variant === 'ghost-oncolor' || variant === 'oncolor';
                return (
                  <View key={variant} style={styles.item}>
                    <View
                      style={[
                        styles.iconBg,
                        {
                          backgroundColor: needsColorBg
                            ? theme.surface.accent.primary
                            : 'transparent',
                        },
                      ]}
                    >
                      <IconButton
                        variant={variant}
                        size={size}
                        accessibilityLabel={`${variant} ${size}`}
                        icon={
                          <PlaceholderIcon
                            color={VARIANT_ICON_COLOR[variant]}
                          />
                        }
                      />
                    </View>
                    <VariantLabel label={variant} />
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    );
  },
};
const styles = StyleSheet.create({
  placeholderIcon: { width: 20, height: 20, borderRadius: 10, borderWidth: 2 },
  variantLabel: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    marginTop: 4,
    textAlign: 'center',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    padding: 16,
  },
  row: { flexDirection: 'row', gap: 16, padding: 16 },
  item: { alignItems: 'center' },
  onColorContainer: {
    flexDirection: 'row',
    gap: 16,
    padding: 24,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  onColorLabel: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    marginTop: 4,
  },
  matrixContainer: { padding: 16, gap: 24 },
  sizeLabel: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 12,
  },
  matrixRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  iconBg: { padding: 8, borderRadius: 24 },
});
