import { View, Text } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { typography } from 'banqi-tokens/rn';
import { Button } from './Button';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import type { ButtonVariant, ButtonSize, ButtonState } from './Button';
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente base do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System**.
Consome exclusivamente tokens do pacote \`banqi-tokens/rn\` via **ThemeProvider** — o tema (light/dark) é controlado pelo contexto, sem props extras. Use o botão **Theme** na toolbar para alternar entre os temas.
`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'onColor',
        'critical',
        'secondary',
        'ghost',
        'criticalGhost',
      ] satisfies ButtonVariant[],
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'compact'] satisfies ButtonSize[],
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'default' },
      },
    },
    state: {
      control: 'select',
      options: ['enabled', 'disabled', 'loading'] satisfies ButtonState[],
      table: {
        type: { summary: 'ButtonState' },
        defaultValue: { summary: 'enabled' },
      },
    },
    leadingIcon: { table: { type: { summary: 'ReactNode' } } },
    trailingIcon: { table: { type: { summary: 'ReactNode' } } },
    onPress: { table: { disable: true } },
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'default',
    state: 'enabled',
  },
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Playground: Story = { name: 'Playground' };
// ─── Com ícones ───────────────────────────────────────────────────────────────
const DummyIcon = ({ color = '#fff' }: { color?: string }) => (
  <View
    style={{
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: color,
      opacity: 0.7,
    }}
  />
);
export const WithLeadingIcon: Story = {
  name: 'With Leading Icon',
  args: { variant: 'primary', label: 'Pagar agora' },
  render: (args) => (
    <Button {...args} leadingIcon={<DummyIcon color="#ffffff" />} />
  ),
};
export const WithTrailingIcon: Story = {
  name: 'With Trailing Icon',
  args: { variant: 'secondary', label: 'Ver mais' },
  render: (args) => (
    <Button {...args} trailingIcon={<DummyIcon color="#0033c6" />} />
  ),
};
export const WithBothIcons: Story = {
  name: 'With Both Icons',
  args: { variant: 'ghost', label: 'Compartilhar' },
  render: (args) => (
    <Button
      {...args}
      leadingIcon={<DummyIcon color="#0033c6" />}
      trailingIcon={<DummyIcon color="#0033c6" />}
    />
  ),
};
// ─── Grids ────────────────────────────────────────────────────────────────────
const ALL_VARIANTS: ButtonVariant[] = [
  'primary',
  'onColor',
  'critical',
  'secondary',
  'ghost',
  'criticalGhost',
];
const ALL_STATES: ButtonState[] = ['enabled', 'disabled', 'loading'];
function VariantsGrid({ size }: { size: ButtonSize }) {
  const { theme } = useTheme();
  return (
    <View style={{ gap: 16, padding: 16 }}>
      {ALL_STATES.map((state) => (
        <View key={state} style={{ gap: 8 }}>
          <Text
            style={{
              fontFamily: typography.fontFamily,
              fontSize: typography.fontSize.x3,
              fontWeight: '600',
              color: theme.content.subtle,
              textTransform: 'uppercase',
              letterSpacing: 0.4,
              marginBottom: 4,
            }}
          >
            State: {state}
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {ALL_VARIANTS.map((variant) => (
              <Button
                key={variant}
                variant={variant}
                state={state}
                label={variant}
                size={size}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
export const AllVariants: Story = {
  name: 'All Variants × States',
  render: () => <VariantsGrid size="default" />,
};
export const AllVariantsCompact: Story = {
  name: 'All Variants × States (Compact)',
  render: () => <VariantsGrid size="compact" />,
};
