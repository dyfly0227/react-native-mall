import FontAwesome from '@expo/vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {SplashScreen, Stack} from 'expo-router';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    BMBKI: require('../assets/fonts/Bodoni-MT-Black-Italic.ttf'),
    BM: require('../assets/fonts/Bodoni-MT.ttf'),
    BMI: require('../assets/fonts/Bodoni-MT-Italic.ttf'),
    BMC: require('../assets/fonts/Bodoni-MT-Condensed.ttf'),
    BMCI: require('../assets/fonts/Bodoni-MT-Condensed-Italic.ttf'),
    BMCB: require('../assets/fonts/Bodoni-MT-Condensed-Bold.ttf'),
    BMCBI: require('../assets/fonts/Bodoni-MT-Condensed-Bold-Italic.ttf'),
    BMB: require('../assets/fonts/Bodoni-MT-Bold.ttf'),
    BMBI: require('../assets/fonts/Bodoni-MT-Bold-Italic.ttf'),
    BMBK: require('../assets/fonts/Bodoni-MT-Black.ttf'),
    DIN: require('../assets/fonts/DIN-Regular.otf'),
    DINM: require('../assets/fonts/DIN-Medium.otf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="modal" options={{presentation: 'modal'}} />
      </Stack>
    </ThemeProvider>
  );
}
