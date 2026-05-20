import { View, Text } from 'react-native';
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
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: typography.fontFamily,
          fontWeight: '700',
          fontSize: size * 0.5,
          color,
          lineHeight: size * 0.6,
        }}
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
      <View style={{ alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Componente Avatar do Design System Banqi, mapeado 1:1 com o Figma **Casas Bahia Pay — Design System** (node 795-672).
Suporta **4 variantes** × **3 tamanhos** × **3 estados**.
- \`icon\`: slot composable — aceita qualquer ReactNode
- \`initials\`: texto de até 2 caracteres via prop \`initials\`
- \`image\`: foto via \`imageSource\` (URI ou require)
- \`logo\`: logo Casas Bahia Pay embutido
\`\`\`tsx
import { Avatar } from '../Avatar';
<Avatar variant="initials" initials="CB" size="large" />
<Avatar variant="image" imageSource={{ uri: 'https://...' }} />
<Avatar variant="logo" size="standard" />
<Avatar variant="icon" icon={<MyIcon size={20} />} />
\`\`\`
`,
      },
    },
  },
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
// ─── All States ───────────────────────────────────────────────────────────────
function SectionTitle({ text }: { text: string }) {
  const { theme } = useTheme();
  return (
    <Text
      style={{
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize.x3,
        fontWeight: '700',
        color: theme.content.default,
        marginBottom: 8,
      }}
    >
      {text}
    </Text>
  );
}
function SizeLabel({ text }: { text: string }) {
  return (
    <Text
      style={{
        fontFamily: typography.fontFamily,
        fontSize: 11,
        color: '#9E9E9E',
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
        story:
          'Todos os estados (enabled, disabled, skeleton) para initials e icon.',
      },
    },
  },
  render: () => (
    <View style={{ gap: 16 }}>
      <SectionTitle text="All States / Initials / Standard" />
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        {STATES.map((state) => (
          <View key={state} style={{ alignItems: 'center', gap: 4 }}>
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
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        {STATES.map((state) => (
          <View key={state} style={{ alignItems: 'center', gap: 4 }}>
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
// ─── Full Grid ────────────────────────────────────────────────────────────────
export const FullGrid: Story = {
  name: 'Full Grid',
  parameters: {
    docs: { description: { story: 'Todas as variantes × todos os tamanhos.' } },
  },
  render: () => (
    <View style={{ gap: 20 }}>
      {VARIANTS.map((variant) => (
        <View key={variant} style={{ gap: 8 }}>
          <SectionTitle text={`${variant} — small / standard / large`} />
          <View
            style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-end' }}
          >
            {SIZES.map((size) => (
              <View key={size} style={{ alignItems: 'center', gap: 4 }}>
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
// ─── In Context ───────────────────────────────────────────────────────────────
export const InContext: Story = {
  name: 'In Context',
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de uso real: cabeçalho de perfil com avatar, nome e lista de usuários.',
      },
    },
  },
  render: () => {
    const { theme } = useTheme();
    return (
      <View style={{ gap: 24, padding: 16 }}>
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Avatar variant="image" size="large" />
          <View style={{ gap: 2 }}>
            <Text
              style={{
                fontFamily: typography.fontFamily,
                fontWeight: '700',
                fontSize: 16,
                color: theme.content.default,
              }}
            >
              João da Silva
            </Text>
            <Text
              style={{
                fontFamily: typography.fontFamily,
                fontSize: 14,
                color: theme.content.subtle,
              }}
            >
              joao.silva@email.com
            </Text>
          </View>
        </View>
        {[
          { initials: 'AB', name: 'Ana Beatriz' },
          { initials: 'MC', name: 'Marcos Costa' },
          { initials: 'RL', name: 'Roberta Lima' },
        ].map((user) => (
          <View
            key={user.initials}
            style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}
          >
            <Avatar
              variant="initials"
              initials={user.initials}
              size="standard"
            />
            <Text
              style={{
                fontFamily: typography.fontFamily,
                fontSize: 14,
                color: theme.content.default,
              }}
            >
              {user.name}
            </Text>
          </View>
        ))}
      </View>
    );
  },
};
