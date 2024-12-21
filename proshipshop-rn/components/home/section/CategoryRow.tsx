import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { FlatList } from "react-native";
import { categories } from "@/data/data";
import { useRouter } from "expo-router";

const CategoryRow = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Category</Text>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(products)/categories",
            })
          }
        >
          <Text style={styles.headerMore}>More Category</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        contentContainerStyle={{ gap: 24 }}
        style={{ marginTop: 12 }}
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryRow;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: Colors.light.text,
    fontWeight: "700",
  },
  headerMore: {
    fontSize: 16,
    color: Colors.light.tint,
    fontWeight: "700",
  },
  itemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  iconContainer: {
    height: 60,
    width: 60,
    borderWidth: 0.8,
    borderColor: Colors.light.tint,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: Colors.light.text,
    fontWeight: 400,
    fontSize: 12,
  },
});
