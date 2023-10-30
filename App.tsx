import { ThemeProvider } from 'styled-components'
import { Groups } from '@screens/Groups';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { NewGroup } from '@components/NewGroup';

export default function App() {
  const [fontsLeaded, fontsError] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      { fontsLeaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}