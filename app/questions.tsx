// app/questions.tsx
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { AppButton } from "@/components/AppButton";
import "react-native-reanimated";
import React, { useState } from "react";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";
import { data } from "@/src/data/data";
import Card from "@/components/Card";
import { useSharedValue, runOnJS } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function QuestionsScreen() {
  const [newData, setNewData] = useState([...data, ...data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftScreen, setShowLeftScreen] = useState(false);
  const [showRightScreen, setShowRightScreen] = useState(false);
  const animatedValue = useSharedValue(0);
  const MAX = 3;
  const tap = Gesture.Tap().onEnd(() => {
    console.log("🟦 TAP GESTURE FIRED");
    runOnJS(setShowLeftScreen)(false);
    runOnJS(setShowRightScreen)(false);
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={tap}>
        <SafeAreaView style={styles.container}>
          <View style={styles.cardContainer}>
            {newData.map((item, index) => {
              if (index > currentIndex + MAX || index < currentIndex) {
                return null;
              }
              return (
                <Card
                  item={item}
                  index={index}
                  key={index}
                  dataLength={newData.length}
                  maxVisibleItem={MAX}
                  currentIndex={currentIndex}
                  animatedValue={animatedValue}
                  setCurrentIndex={setCurrentIndex}
                  setNewData={setNewData}
                  newData={newData}
                  setShowLeftScreen={setShowLeftScreen}
                  setShowRightScreen={setShowRightScreen}
                />
              );
            })}
          </View>
          {showLeftScreen && (
            <View style={StyleSheet.absoluteFill}>
              <Pressable
                style={styles.leftScreen}
                onPress={() => {
                  console.log("🟥 PRESSABLE LEFT SCREEN PRESSED");
                  setShowLeftScreen(false);
                }}
                onPressIn={() => console.log("🟥 PRESS IN")}
                onPressOut={() => console.log("🟥 PRESS OUT")}
                android_disableSound
              />
            </View>
          )}
          {showRightScreen && (
            <Pressable
              pointerEvents="auto"
              style={styles.rightScreen}
              onPress={() => setShowRightScreen(false)}
            />
          )}
        </SafeAreaView>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  leftScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,0,0,0.5)",
  },

  rightScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "blue",
    zIndex: 999,
    elevation: 999,
  },
});
