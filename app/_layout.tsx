import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const RootLayout = () => {
  return (
    <GluestackUIProvider mode="light"><Stack>
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      </Stack></GluestackUIProvider>
  );
};

export default RootLayout;
