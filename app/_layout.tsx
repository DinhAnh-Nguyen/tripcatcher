// Managing the main layout of the app

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // Hide the screen header for every screens inside this Stack component
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
