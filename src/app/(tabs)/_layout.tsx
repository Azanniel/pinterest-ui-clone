import { useRef } from 'react';
import { View } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { FontAwesome5, Foundation, Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet"
import { Avatar } from "@/components/avatar";
import { Menu } from '@/components/menu';
import { theme } from "@/theme";

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleBottomSheetOpen() {
    if(bottomSheetRef.current) {
      bottomSheetRef.current.expand()
    }
  }

  function handleBottomSheetClose() {
    if(bottomSheetRef.current) {
      bottomSheetRef.current.close()
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light' />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
            borderBlockColor: theme.colors.black
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Foundation name="home" size={size} color={color} />
            }
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="search" size={size} color={color} />
            }
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <FontAwesome5 name="plus" size={size} color={color} />
            }
          }}
          listeners={() => {
            return {
              tabPress: (event) => {
                event.preventDefault()
                handleBottomSheetOpen()
              }
            }
          }}
        />

        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="chatbubble-ellipses" size={size} color={color} />
            }
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Avatar
                  selected={focused}
                  source={{ uri: 'https://github.com/azanniel.png' }}
                />
              )
            }
          }}
        />
      </Tabs>

      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />
    </View>
  )
}