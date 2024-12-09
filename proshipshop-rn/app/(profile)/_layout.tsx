import React from "react";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" />
      <Stack.Screen name="address" />
      <Stack.Screen name="payment" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="favoirite-products" />
      <Stack.Screen name="orders" />
      <Stack.Screen name="add-address" />
    </Stack>
  );
}
