import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import SettingsScreen from ".";

export default function SettingsLayout() {
  const backIcon = Platform.OS === "ios" ? "chevron-back" : "arrow-back-sharp";

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="settings"
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
    // <SettingsScreen></SettingsScreen>
  );
}
