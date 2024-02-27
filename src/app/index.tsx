import { useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import Animated, {
  SlideInDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from "react-native-reanimated";
import { Skeleton } from "moti/skeleton";
import { theme } from "@/theme";

export default function Splash() {
  const logoScale = useSharedValue(1)
  const logoPositionY = useSharedValue(0)
  const contentDisplay = useSharedValue(0)

  const dimensions = useWindowDimensions()

  const skeletonColors = [
    theme.colors.gray[600],
    theme.colors.gray[700],
    theme.colors.gray[600],
  ]

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value }
    ]
  }))

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    display: contentDisplay.value === 1 ? 'flex' : 'none'
  }))

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, { duration: 300 }, (finished) => {
        if (finished) {
          logoPositionY.value = withSequence(
            withTiming(50),
            withTiming(
              -dimensions.height, 
              { duration: 400 }, 
              () => contentDisplay.value = 1
            )
          )

          runOnJS(onEndSplash)()
        }
      })
    )
  }

  function onEndSplash() {
    setTimeout(() => {
      router.push('/(tabs)')
    }, 2000);
  }

  function generateBoxes(column: 'left' | 'right') {
    const rest = column === "left" ? 0 : 1

    return Array.from({ length: 20 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === rest ? 200 : 300

        return (
          <Animated.View key={index} style={[styles.box, { height }]}>
            <Skeleton colors={skeletonColors} width="100%" height={height} />
          </Animated.View>
        )
      })
  }

  function generateFilters() {
    return Array.from({ length: 10 }).map((_, index) => {
      return (
        <Skeleton key={index} width={60} height={26} radius={6} colors={skeletonColors} />
      )
    })
  }

  useEffect(() => {
    logoAnimation()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, logoAnimatedStyle]}
        source={require('@/assets/logo.png')}
      />

      <Animated.View 
        style={[styles.content, contentAnimatedStyle]}
        entering={SlideInDown.duration(700)}
      >
        <View style={styles.header}>{generateFilters()}</View>

        <View style={styles.boxes}>
          <View style={styles.column}>{generateBoxes('left')}</View>
          <View style={styles.column}>{generateBoxes('right')}</View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12
  },

  logo: {
    width: 64,
    height: 64
  },

  content: {
    flex: 1,
    width: '100%',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    paddingBottom: 12
  },

  boxes: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    gap: 12,
  },

  column: {
    flex: 1,
    gap: 12,
  },

  box: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: theme.colors.gray[600],
  },
})