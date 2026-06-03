import { StyleSheet, View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Avatar } from './Avatar';
import type { AvatarSize, AvatarState, AvatarVariant } from './Avatar.types';
import { useTheme } from '../ThemeProvider/ThemeProvider';
function PlaceholderIcon({
  color = '#191E2F',
  size = 20,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <View
      style={[
        styles.placeholderIcon,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: color,
        },
      ]}
    >
      <Text
        style={[
          styles.placeholderText,
          { fontSize: size * 0.5, color, lineHeight: size * 0.6 },
        ]}
      >
        i
      </Text>
    </View>
  );
}
const VARIANTS: AvatarVariant[] = ['initials', 'icon', 'image', 'logo'];
const SIZES: AvatarSize[] = ['small', 'standard', 'large'];
const STATES: AvatarState[] = ['enabled', 'disabled', 'skeleton'];
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
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
      options: VARIANTS,
      table: { defaultValue: { summary: 'initials' } },
    },
    size: {
      control: 'select',
      options: SIZES,
      table: { defaultValue: { summary: 'standard' } },
    },
    state: {
      control: 'select',
      options: STATES,
      table: { defaultValue: { summary: 'enabled' } },
    },
    initials: { control: 'text' },
    icon: { table: { disable: true } },
    imageSource: { table: { disable: true } },
  },
  args: {
    variant: 'initials',
    size: 'standard',
    state: 'enabled',
    initials: 'CB',
  },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Playground: Story = {
  name: 'Playground',
  render: (args) => (
    <Avatar
      {...args}
      icon={
        args.variant === 'icon' ? (
          <PlaceholderIcon size={args.size === 'large' ? 24 : 20} />
        ) : undefined
      }
    />
  ),
};
function SectionTitle({ text }: { text: string }) {
  const { theme } = useTheme();
  return (
    <Text style={[styles.sectionTitle, { color: theme.content.default }]}>
      {text}
    </Text>
  );
}
function SizeLabel({ text }: { text: string }) {
  return <Text style={styles.sizeLabel}>{text}</Text>;
}
export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <View style={styles.allStatesContainer}>
      <SectionTitle text="All States / Initials / Standard" />
      <View style={styles.row}>
        {STATES.map((state) => (
          <View key={state} style={styles.item}>
            <Avatar
              variant="initials"
              initials="CB"
              size="standard"
              state={state}
            />
            <SizeLabel text={state} />
          </View>
        ))}
      </View>
      <SectionTitle text="All States / Icon / Standard" />
      <View style={styles.row}>
        {STATES.map((state) => (
          <View key={state} style={styles.item}>
            <Avatar
              variant="icon"
              icon={
                <PlaceholderIcon
                  size={20}
                  color={state === 'disabled' ? '#9E9E9E' : '#191E2F'}
                />
              }
              size="standard"
              state={state}
            />
            <SizeLabel text={state} />
          </View>
        ))}
      </View>
    </View>
  ),
};
export const FullGrid: Story = {
  name: 'Full Grid',
  render: () => (
    <View style={styles.gridContainer}>
      {VARIANTS.map((variant) => (
        <View key={variant} style={styles.variantGroup}>
          <SectionTitle text={`${variant} — small / standard / large`} />
          <View style={styles.rowEnd}>
            {SIZES.map((size) => (
              <View key={size} style={styles.item}>
                <Avatar
                  variant={variant}
                  initials="CB"
                  size={size}
                  icon={
                    variant === 'icon' ? (
                      <PlaceholderIcon size={size === 'large' ? 24 : 20} />
                    ) : undefined
                  }
                />
                <SizeLabel text={size} />
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  ),
};
const styles = StyleSheet.create({
  decorator: { alignItems: 'flex-start' },
  placeholderIcon: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontFamily: typography.fontFamily,
    fontWeight: '700',
  },
  sectionTitle: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.x3,
    fontWeight: '700',
    marginBottom: 8,
  },
  sizeLabel: {
    fontFamily: typography.fontFamily,
    fontSize: 11,
    color: '#9E9E9E',
  },
  allStatesContainer: { gap: 16 },
  row: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  item: { alignItems: 'center', gap: 4 },
  gridContainer: { gap: 20 },
  variantGroup: { gap: 8 },
  rowEnd: { flexDirection: 'row', gap: 12, alignItems: 'flex-end' },
});
