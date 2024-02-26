import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";

interface PostProps {
  title: string
  image: string
}

export function Post({ image, title }: PostProps) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  })

  return (
    <View style={styles.container}>
      <Image style={[{ aspectRatio }, styles.image]} source={{ uri: image }} />

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