import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { usePathname, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import Logo from "@/components/Logo";
import { View, StyleSheet } from "react-native";
import { useEffect } from "react";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const HEADER_OFFSET = 12;

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/"); // fallback vers l'accueil
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="questions"
            options={{
              headerShown: true,
              headerTransparent: true,
              headerShadowVisible: false,
              headerTitleAlign: "center",

              headerStyle: {
                backgroundColor: colorScheme === "dark" ? "#121212" : "#fff",
              },
              header: () => (
                <View
                  style={{
                    height:120,
                    display: "flex",
                    flexDirection: "row",
                    alignItems:"flex-end",
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                  }}
                >
                  <Pressable onPress={handleBack} style={{ marginRight: 12 }}>
                    <Ionicons
                      name="chevron-back-outline"
                      size={32}
                      color={colorScheme === "dark" ? "white" : "black"}
                    />
                  </Pressable>

                  <View
                    style={{

                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent:"flex-end",
                    }}
                  >
                    <Logo
                      width={80}
                      height={50}
                      color={colorScheme === "dark" ? "white" : "black"}
                    />
                  </View>
                </View>
              ),
              /* headerLeft: () => (
                <View style={{ marginTop: HEADER_OFFSET }}>
                  <Pressable onPress={handleBack}>
                    <Ionicons
                      name="chevron-back-outline"
                      size={32}
                      color={colorScheme === "dark" ? "white" : "black"}
                    />
                  </Pressable>
                </View>
              ),
              headerTitle: () => (
                <View style={{ marginTop: HEADER_OFFSET }}>
                  <Logo
                    width={96}
                    height={96}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                </View>
              ), */
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
