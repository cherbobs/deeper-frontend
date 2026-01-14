import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AppButton } from "@/components/AppButton";
import "react-native-reanimated";


export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisis ton mode</Text>

      <AppButton label="Couple" onPress={() => router.push("/couple")} />
      <AppButton label="Amitié" onPress={() => console.log("Amitié")} />
      <AppButton
        label="Première rencontre"
        onPress={() => console.log("Première rencontre")}
      />
    </View>
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
