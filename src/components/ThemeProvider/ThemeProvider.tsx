import { createContext, useContext } from 'react';
import { light, dark, type ColorTheme } from 'banqi-tokens/rn';
type ThemeContextValue = {
  theme: ColorTheme;
  isDark: boolean;
};
const ThemeContext = createContext<ThemeContextValue>({
  theme: light,
  isDark: false,
});
export type ThemeProviderProps = {
  children: React.ReactNode;
  isDark?: boolean;
};
export function ThemeProvider({
  children,
  isDark = false,
}: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ theme: isDark ? dark : light, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
