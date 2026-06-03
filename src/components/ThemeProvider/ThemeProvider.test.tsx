import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider, useTheme } from './ThemeProvider';

function Probe() {
  const { isDark } = useTheme();
  return <Text>{isDark ? 'dark' : 'light'}</Text>;
}

describe('ThemeProvider / useTheme', () => {
  it('usa o tema claro por padrão quando não há provider', () => {
    render(<Probe />);
    expect(screen.getByText('light')).toBeTruthy();
  });

  it('expõe o tema escuro quando isDark', () => {
    render(
      <ThemeProvider isDark>
        <Probe />
      </ThemeProvider>
    );
    expect(screen.getByText('dark')).toBeTruthy();
  });

  it('expõe o tema claro quando isDark={false}', () => {
    render(
      <ThemeProvider isDark={false}>
        <Probe />
      </ThemeProvider>
    );
    expect(screen.getByText('light')).toBeTruthy();
  });
});
