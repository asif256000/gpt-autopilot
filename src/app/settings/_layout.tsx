import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function SettingsLayout() {
  const backIcon = Platform.OS === "ios" ? "chevron-back" : "arrow-back-sharp";

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTintColor: "white",
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: { fontWeight: "bold" },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          // headerLeft: () => (
          //   <Ionicons
          //     name={backIcon}
          //     size={25}
          //     color="white"
          //     onPress={() => router.back()}
          //   />
          // ),
        }}
      />
      <Stack.Screen name="auth" options={{ title: "Authorize" }} />
    </Stack>
  );
}
