/// <reference lib="dom" />
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import type { Decorator } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider';
const BG_LIGHT = '#F0F2F7';
const BG_DARK = '#06090E';
function ThemeDecorator({
  isDark,
  children,
}: {
  isDark: boolean;
  children: ReactNode;
}) {
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? BG_DARK : BG_LIGHT;
    document.body.style.transition = 'background-color 0.2s ease';
  }, [isDark]);
  return <ThemeProvider isDark={isDark}>{children}</ThemeProvider>;
}

export const withThemeProvider: Decorator = (Story, context) => {
  const isDark = context.globals.theme === 'dark';
  return (
    <ThemeDecorator isDark={isDark}>
      <Story />
    </ThemeDecorator>
  );
};
