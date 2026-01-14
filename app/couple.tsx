import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { AppButton } from "@/components/AppButton";
import "react-native-reanimated";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function CoupleScreen() {
  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <Text style={styles.title}>Mode Couple</Text>

        <AppButton label="Questions" onPress={() => console.log("Questions")} />

        <AppButton label="Défis" onPress={() => console.log("Défis")} />
      </GestureHandlerRootView>
    </>
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
});
