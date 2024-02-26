import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";

interface PostProps {
  title: string
  image: string
}

export function Post({ image, title }: PostProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 22
  },

  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 14,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold
  },
})