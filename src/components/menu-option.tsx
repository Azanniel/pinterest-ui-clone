import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";

interface MenuOptionProps {
  title: string
  icon: keyof typeof FontAwesome.glyphMap
}

export function MenuOption({ title, icon }: MenuOptionProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <View style={styles.icon}>
        <FontAwesome
          name={icon}
          size={32}
          color={theme.colors.white}
        />
      </View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  text: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
    marginTop: 10,
  },

  icon: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.gray[700],
    borderRadius: 22,
  },
})