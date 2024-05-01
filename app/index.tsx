import { Stack, useNavigation } from "expo-router";
import { AuthScreen } from "./auth";
import { useAuth } from "../src/context";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  //   const { isLoggedIn } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Home" }} />
      <AuthScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
