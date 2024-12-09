import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[productId].tsx" />
      <Stack.Screen name="categories" />
      <Stack.Screen name="more-reviews" />
      <Stack.Screen name="write-review" />
      <Stack.Screen name="search" />
    </Stack>
  );
}
