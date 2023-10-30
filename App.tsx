import { ThemeProvider } from 'styled-components'
import { Groups } from '@screens/Groups';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLeaded, fontsError] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  

  return (
    <ThemeProvider theme={theme}>
      { !fontsLeaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}