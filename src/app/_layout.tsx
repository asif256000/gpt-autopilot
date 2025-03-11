import { Stack, router, useNavigation } from "expo-router";
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { StatusBar, useColorScheme } from "react-native";
import { SettingsButton } from "../components";
// import { ThemeProvider as CustomThemeProvider } from "../context";

export default function HomePageLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    // <CustomThemeProvider></CustomThemeProvider>
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle="default" />
      <Stack
        screenOptions={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { fontWeight: "bold" },
          // headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home Page",
            headerShown: true,
            headerRight: () => (
              <SettingsButton
                color="white"
                onPressFunction={() => router.push("settings")}
              />
            ),
          }}
        />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
        {/* <Stack.Screen name="auth" options={{ title: "Authorize" }} />
        <Stack.Screen
          name="login"
          options={{ title: "Login", presentation: "modal" }}
        />
        <Stack.Screen
          name="signup"
          options={{ title: "Create Account", presentation: "modal" }}
        /> */}
        <Stack.Screen
          name="assistants"
          options={{ title: "Assistant Options" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
