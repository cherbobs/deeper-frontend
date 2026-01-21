import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { DataType } from "@/src/data/data";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    Extrapolation,
  getAnimatedStyle,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  item: DataType;
  index: number;
  dataLength: number;
  maxVisibleItem: number;
  currentIndex: number;
  animatedValue: SharedValue<number>;
};

const Card = ({
  item,
  index,
  dataLength,
  maxVisibleItem,
  currentIndex,
  animatedValue,
}: Props) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);
  const pan = Gesture.Pan()
    .onUpdate((e) => {
      const isSwipeRight = e.translationX > 0;
      direction.value = isSwipeRight ? 1 : -1;
      console.log(e.translationX);
      if (currentIndex === index) {
        translateX.value = e.translationX;
      }
    })

    .onEnd((e) => {
      if (currentIndex === index) {
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value);
        } else {
          translateX.value = withTiming(0, { duration: 500 });
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;
    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, 20],
      [0, 10],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        { translateX: translateX.value },
        { scale: 1 - index * 0.05 },
        {
          translateY: index * -30,
        },
        { rotateZ: currentItem ? `${direction.value * rotateZ}deg` : `0deg` },
      ],
      opacity: index < maxVisibleItem ? 1 : 0,
    };
  });
  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: item.backgroundColor,
            zIndex: dataLength - index,
          },
          animatedStyle,
        ]}
      >
        <Text style={styles.text}>{item.text}</Text>
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 360,
    height: 360,
    borderRadius: 28,
    padding: 16,
  },

  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
});
