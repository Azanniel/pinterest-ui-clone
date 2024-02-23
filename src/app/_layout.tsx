import { StatusBar } from 'expo-status-bar'
import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

import { theme } from '@/theme';

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.colors.black }}>
      <StatusBar style='light' />
      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  )
}