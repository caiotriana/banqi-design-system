import { View, StyleSheet } from 'react-native';
import { Button, ThemeProvider } from 'banqi-design-system';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Button label="Hello Banqi" onPress={() => {}} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
