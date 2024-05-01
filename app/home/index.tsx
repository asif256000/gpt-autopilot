import { router } from "expo-router";
import React from "react";
import { View, Button, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Page 1" onPress={() => router.navigate("Page1")} />
      <Button title="Page 2" onPress={() => router.navigate("Page2")} />
      <Button title="Page 3" onPress={() => router.navigate("Page3")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
