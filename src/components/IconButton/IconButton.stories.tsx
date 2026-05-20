import { View, Text } from 'react-native';
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
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: color,
      }}
    />
  );
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
  parameters: {
    docs: {
      description: {
        component: `
Componente IconButton do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 797-1528).
Suporta **7 variantes**, **4 estados** (enabled, hover, pressed, disabled) e **2 tamanhos** (medium 48px, small 36px).
Consome exclusivamente tokens do pacote \`banqi-tokens/rn\` via **ThemeProvider**.
`,
      },
    },
  },
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
// ─── Disabled State ───────────────────────────────────────────────────────────
function VariantLabel({ label }: { label: string }) {
  const { theme } = useTheme();
  return (
    <Text
      style={{
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.x3,
        color: theme.content.subtle,
        marginTop: 4,
        textAlign: 'center',
      }}
    >
      {label}
    </Text>
  );
}
export const DisabledState: Story = {
  name: 'State / Disabled',
  parameters: {
    docs: {
      description: {
        story:
          'Todas as variantes no estado `disabled`. Visual unificado: fundo `surface.common.disabled`, ícone `content.common.disabled`.',
      },
    },
  },
  render: () => (
    <View
      style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, padding: 16 }}
    >
      {ALL_VARIANTS.map((variant) => (
        <View key={variant} style={{ alignItems: 'center' }}>
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
// ─── OnColor Background ───────────────────────────────────────────────────────
export const OnColorBackground: Story = {
  name: 'OnColor Background',
  parameters: {
    docs: {
      description: {
        story:
          'Variantes `oncolor` e `ghost-oncolor` em contexto de uso correto: sobre `surface.accent.primary`.',
      },
    },
  },
  render: () => {
    const { theme } = useTheme();
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 16,
          padding: 24,
          backgroundColor: theme.surface.accent.primary,
          borderRadius: 16,
          alignSelf: 'flex-start',
        }}
      >
        {(['oncolor', 'ghost-oncolor'] as IconButtonVariant[]).map(
          (variant) => (
            <View key={variant} style={{ alignItems: 'center' }}>
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
                style={{
                  fontFamily: typography.fontFamily,
                  fontSize: typography.fontSize.x3,
                  color: theme.content.common.onColor,
                  marginTop: 4,
                }}
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
// ─── Critical Variants ────────────────────────────────────────────────────────
export const CriticalVariants: Story = {
  name: 'Critical Variants',
  parameters: {
    docs: {
      description: {
        story:
          '`critical` (fundo sólido vermelho) e `ghost-critical` (sem fundo, ícone vermelho). Para ações destrutivas ou alertas.',
      },
    },
  },
  render: () => (
    <View style={{ flexDirection: 'row', gap: 16, padding: 16 }}>
      {(['critical', 'ghost-critical'] as IconButtonVariant[]).map(
        (variant) => (
          <View key={variant} style={{ alignItems: 'center' }}>
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
// ─── Full Matrix ──────────────────────────────────────────────────────────────
export const FullMatrix: Story = {
  name: 'Full Matrix — Variants × Sizes',
  parameters: {
    docs: {
      description: {
        story:
          'Todas as variantes × tamanhos (enabled). Referência visual para QA e design review.',
      },
    },
  },
  render: () => {
    const { theme } = useTheme();
    const sizes: IconButtonSize[] = ['medium', 'small'];
    return (
      <View style={{ padding: 16, gap: 24 }}>
        {sizes.map((size) => (
          <View key={size}>
            <Text
              style={{
                fontFamily: typography.fontFamily,
                fontSize: typography.fontSize.x3,
                fontWeight: '600',
                color: theme.content.subtle,
                textTransform: 'uppercase',
                letterSpacing: 0.4,
                marginBottom: 12,
              }}
            >
              Size: {size}
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
              {ALL_VARIANTS.map((variant) => {
                const needsColorBg =
                  variant === 'ghost-oncolor' || variant === 'oncolor';
                return (
                  <View key={variant} style={{ alignItems: 'center' }}>
                    <View
                      style={{
                        padding: 8,
                        borderRadius: 24,
                        backgroundColor: needsColorBg
                          ? theme.surface.accent.primary
                          : 'transparent',
                      }}
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
