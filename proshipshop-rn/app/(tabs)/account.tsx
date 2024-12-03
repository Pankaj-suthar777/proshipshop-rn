import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const router = useRouter();
  const menuItems = [
    {
      id: 1,
      title: "Profile",
      icon: "user",
      library: Feather,
      onPress: () => router.push({ pathname: "/(profile)/profile" }),
    },
    { id: 2, title: "Order", icon: "package", library: Feather },
    {
      id: 3,
      title: "Address",
      icon: "location-pin",
      library: MaterialIcons,
      onPress: () => router.push({ pathname: "/(profile)/address" }),
    },
    {
      id: 4,
      title: "Payment",
      icon: "credit-card",
      library: Feather,
      onPress: () => router.push({ pathname: "/(profile)/payment" }),
    },
  ];

  const renderMenuItem = ({ item }: { item: any }) => {
    const IconComponent = item.library;
    return (
      <TouchableOpacity
        style={styles.menuItem}
        onPress={item?.onPress ? item?.onPress : () => {}}
      >
        <IconComponent name={item.icon} size={24} color="#4a90e2" />
        <Text style={styles.menuText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Account</Text>
        <Feather name="bell" size={20} color="#aaa" />
      </View>

      {/* Menu List */}
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.menuList}
      />
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

export default AccountScreen;
