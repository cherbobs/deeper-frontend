import { TouchableOpacity, Text, StyleSheet } from "react-native";

type AppButtonProps = {
  label: string;
  onPress: () => void;
};

export function AppButton({ label, onPress }: AppButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
