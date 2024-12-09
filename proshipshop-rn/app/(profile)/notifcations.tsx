import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "@/components/layout/HeaderComponent";

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="Notification" showSearch={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  menuList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 15,
    color: "#1a1a1a",
  },
});

export default NotificationScreen;
