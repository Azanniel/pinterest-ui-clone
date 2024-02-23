import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Filters } from '@/components/filters'
import { theme } from '@/theme'
import { FILTERS } from '@/utils/filters'

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0])

  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 52,
    backgroundColor: theme.colors.black
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold
  }
})