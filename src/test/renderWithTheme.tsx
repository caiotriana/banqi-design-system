import type { ReactElement, ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';

type RenderWithThemeOptions = RenderOptions & { isDark?: boolean };

/**
 * Renderiza a UI envolvida no ThemeProvider da biblioteca.
 * Todo componente exige um tema acima na árvore — use este helper no lugar do
 * `render` cru do RNTL. Passe `{ isDark: true }` para testar o tema escuro.
 */
export function renderWithTheme(
  ui: ReactElement,
  { isDark = false, ...options }: RenderWithThemeOptions = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <ThemeProvider isDark={isDark}>{children}</ThemeProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

// Reexporta utilitários do RNTL para um import único nos testes.
export * from '@testing-library/react-native';
