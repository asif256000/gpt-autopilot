import { Stack } from "expo-router/stack";
import {
  ThemeProvider,
  useTheme,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

export default function Layout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      ></Stack>
    </ThemeProvider>
  );
}
