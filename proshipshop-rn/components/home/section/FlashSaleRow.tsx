import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { products } from "@/data/data";
import { useRouter } from "expo-router";
import ProductsHorizontalList from "../../products/ProductsHorizontalList";

const FlashSaleRow = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Flash Sale</Text>
        <TouchableOpacity
          onPress={() => router.push("/(sales)/super-flash-sale")}
        >
          <Text style={styles.headerMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <ProductsHorizontalList products={products} />
    </View>
  );
};

export default FlashSaleRow;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 20,
    color: Colors.light.text,
    fontWeight: "700",
  },
  headerMore: {
    fontSize: 20,
    color: Colors.light.tint,
    fontWeight: "700",
  },
});
