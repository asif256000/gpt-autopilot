import { Stack } from "expo-router";
import AuthScreen from ".";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen
        name="login"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="signup"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
    // <AuthScreen></AuthScreen>
  );
}
