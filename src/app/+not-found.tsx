import React from "react";

import { bodyStyles } from "../components";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function NotFoundPage() {
  return (
    <View style={bodyStyles.container}>
      <Stack.Screen name="index" options={{ title: "404" }} />
      <Text style={bodyStyles.header1}>404</Text>
      <Text style={bodyStyles.header2}>Page not found!</Text>
    </View>
  );
}
