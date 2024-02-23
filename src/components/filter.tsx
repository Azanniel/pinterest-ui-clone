import { Pressable, PressableProps, Text, StyleSheet } from "react-native";
import { theme } from "@/theme";

interface FilterProps extends PressableProps {
  filter: string
  selected: boolean
}

export function Filter({ filter, selected, ...props }: FilterProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...props}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 6,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },
  pressableSelected: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  },
})