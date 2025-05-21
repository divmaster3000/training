import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
