import { forwardRef } from "react"
import { StyleSheet, Text, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import BottomSheet from "@gorhom/bottom-sheet"
import { theme } from "@/theme"
import { MenuOption } from "./menu-option"

interface MenuProps {
  onClose: () => void
}

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      backgroundStyle={styles.container}
      snapPoints={[230]}
      enablePanDownToClose
      handleComponent={null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            color={theme.colors.white}
            onPress={onClose}
          />

          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuOption title="Pin" icon="thumb-tack" />
          <MenuOption title="Colagem" icon="paste" />
          <MenuOption title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800]
  },

  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row'
  },

  title: {
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },

  options: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16
  }
})