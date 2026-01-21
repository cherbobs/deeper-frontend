import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="questions"
            options={{
              headerShown: true,
              title: "", // supprime fallback
              headerLeft: () => (
                <Pressable
                  onPress={router.back}
                  style={{ paddingHorizontal: 12, marginTop: 16 }}
                >
                  <Ionicons
                    name="chevron-back-outline"
                    size={32}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                </Pressable>
              ),
              headerTransparent: true,
              headerStyle: {
                backgroundColor: colorScheme === "dark" ? "#121212" : "#fff", // couleur du header
              },
              headerShadowVisible: false, // supprime l'ombre / la ligne
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
