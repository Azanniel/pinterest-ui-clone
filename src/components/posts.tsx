import { ScrollView, StyleSheet, View } from "react-native";
import { Post } from "./post";
import { POSTS } from "@/utils/posts";

export function Posts() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
        {POSTS.map((post) => {
          return (
            <Post key={post.id} image={post.image} title={post.title} />
          )
        })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  }
})