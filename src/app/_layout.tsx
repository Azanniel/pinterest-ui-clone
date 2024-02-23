import { StatusBar } from 'expo-status-bar'
import { Slot, SplashScreen } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style='light' />
      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  )
}