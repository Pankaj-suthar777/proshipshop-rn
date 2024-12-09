import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SearchScreen: React.FC = () => {
  const data = [
    "Nike Air Max 270 React ENG",
    "Nike Air Vapormax 360",
    "Nike Air Max 270 React ENG",
    "Nike Air Max 270 React",
    "Nike Air VaporMax Flyknit 3",
    "Nike Air Max 97 Utility",
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* Header / Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Nike Air Max"
          placeholderTextColor="#999"
        />
        <View style={{ flexDirection: "row", gap: 8 }}>
          <TouchableOpacity>
            <Feather name="x" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="mic-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* List of Items */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: "#333",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  listItem: {
    fontSize: 16,
    color: "#666",
    marginVertical: 16,
  },
});

export default SearchScreen;
