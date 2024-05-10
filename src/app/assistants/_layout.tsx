import { Stack, router } from "expo-router";

export default function AssistantOptionsLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Assistant Page", headerShown: false }}
        />
        <Stack.Screen
          name="create"
          options={{ title: "Create Assistant", headerShown: false }}
        />
        <Stack.Screen
          name="update"
          options={{ title: "Modify Assistant", headerShown: false }}
        />
        <Stack.Screen
          name="delete"
          options={{ title: "Delete Assistant", headerShown: false }}
        />
      </Stack>
    </>
  );
}
