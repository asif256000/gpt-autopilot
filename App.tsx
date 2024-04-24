import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Chat } from "./src/screens/chats";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Chat />
      <StatusBar style="auto" />
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
