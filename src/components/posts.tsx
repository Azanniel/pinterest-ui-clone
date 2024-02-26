import { ScrollView, StyleSheet, View } from "react-native";
import { Post } from "./post";
import { POSTS } from "@/utils/posts";

export function Posts() {
  function postByColumn(column: 'left' | 'right') {
    const rest = column === 'left' ? 0 : 1

    return POSTS
      .filter((_, index) => index % 2 === rest)
      .map((post) => {
        return (
          <Post
            key={post.id}
            image={post.image}
            title={post.title}
          />
        )
      })
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postByColumn('left')}</View>
        <View style={styles.column}>{postByColumn('right')}</View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 16
  },

  container: {
    flex: 1,
    flexDirection: 'row'
  },

  column: {
    flex: 1
  }
})