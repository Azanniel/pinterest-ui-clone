import { FlatList, StyleSheet } from "react-native";
import { Filter } from "./filter";

interface FiltersProps {
  filters: string[]
  filter: string
  onChange: (value: string) => void
}

export function Filters(props: FiltersProps) {
  return (
    <FlatList
      style={styles.list}
      horizontal
      data={props.filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        return (
          <Filter 
            filter={item} 
            selected={item === props.filter}
            onPress={() => props.onChange(item)}
          />
        )
      }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 4,
  },
  content: {
    gap: 24,
    paddingHorizontal: 8
  }
})