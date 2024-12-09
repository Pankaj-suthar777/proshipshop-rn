import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const ExploreScreen: React.FC = () => {
  const router = useRouter();
  const menCategories = [
    { id: 1, name: "Office Bag", icon: "briefcase-outline" },
    { id: 2, name: "Shirt", icon: "shirt-outline" },
    { id: 3, name: "T-Shirt", icon: "shirt-outline" },
    { id: 4, name: "Shoes", icon: "walk-outline" },
    { id: 5, name: "Pants", icon: "ios-trail-sign-outline" },
    { id: 6, name: "Underwear", icon: "cut-outline" },
  ];

  const womenCategories = [
    { id: 1, name: "T-Shirt", icon: "shirt-outline" },
    { id: 2, name: "Dress", icon: "ios-color-palette-outline" },
    { id: 3, name: "Pants", icon: "ios-trail-sign-outline" },
    { id: 4, name: "Skirt", icon: "ios-color-fill-outline" },
    { id: 5, name: "Bag", icon: "bag-outline" },
    { id: 6, name: "Heels", icon: "woman-outline" },
    { id: 7, name: "Bikini", icon: "woman-outline" },
  ];

  const renderCategory = ({ item }: { item: any }) => (
    <View style={styles.categoryItem}>
      <Ionicons name={item.icon} size={32} color="#00BFFF" />
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#333" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Product"
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          onPress={() =>
            router.push({ pathname: "/(profile)/favoirite-products" })
          }
        >
          <Feather name="heart" color={Colors.light.icon || "#000"} size={24} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Man Fashion</Text>
      <FlatList
        data={menCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={styles.categoryList}
      />

      <Text style={styles.sectionTitle}>Woman Fashion</Text>
      <FlatList
        data={womenCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        horizontal={false}
        numColumns={3}
        contentContainerStyle={styles.categoryList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  time: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: "#333",
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  categoryList: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
    margin: 8,
    width: "30%",
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
});

export default ExploreScreen;
