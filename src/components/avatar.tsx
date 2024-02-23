import { Image, ImageProps, StyleSheet } from "react-native";
import { theme } from "@/theme";

interface AvatarProps extends ImageProps {
  selected: boolean
}

export function Avatar({ selected, ...props }: AvatarProps) {
  return (
    <Image style={[styles.image, selected && styles.selected]} {...props} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  selected: {
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
})