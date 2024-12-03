import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComponent } from "../(sales)/super-flash-sale";

const categories = [
  {
    id: "1",
    name: "Shirt",
    icon: <Ionicons name="shirt-outline" size={24} color="#2196f3" />,
  },
  {
    id: "2",
    name: "Bikini",
    icon: <FontAwesome5 name="swimmer" size={24} color="#2196f3" />,
  },
  {
    id: "3",
    name: "Dress",
    icon: <Entypo name="dress" size={24} color="#2196f3" />,
  },
  {
    id: "4",
    name: "Work Equipment",
    icon: (
      <MaterialCommunityIcons
        name="briefcase-outline"
        size={24}
        color="#2196f3"
      />
    ),
  },
  {
    id: "5",
    name: "Man Pants",
    icon: (
      <MaterialCommunityIcons name="human-male" size={24} color="#2196f3" />
    ),
  },
  {
    id: "6",
    name: "Man Shoes",
    icon: (
      <MaterialCommunityIcons name="shoe-formal" size={24} color="#2196f3" />
    ),
  },
  {
    id: "7",
    name: "Man Underwear",
    icon: <Ionicons name="body-outline" size={24} color="#2196f3" />,
  },
  {
    id: "8",
    name: "Man T-Shirt",
    icon: (
      <MaterialCommunityIcons
        name="tshirt-crew-outline"
        size={24}
        color="#2196f3"
      />
    ),
  },
  {
    id: "9",
    name: "Woman Bag",
    icon: <Entypo name="shopping-bag" size={24} color="#2196f3" />,
  },
  {
    id: "10",
    name: "Woman Pants",
    icon: (
      <MaterialCommunityIcons name="human-female" size={24} color="#2196f3" />
    ),
  },
  {
    id: "11",
    name: "High Heels",
    icon: <MaterialCommunityIcons name="shoe-heel" size={24} color="#2196f3" />,
  },
];

const CategoryScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={{ width: 40 }}>{item.icon}</View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="Category" showSearch={false} />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 12,
    fontWeight: "500",
  },
});

export default CategoryScreen;
