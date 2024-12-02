import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { products } from "@/data/data";
import ProductsHorizontalList from "./ProductsHorizontalList";

const MegaSaleRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mega Sale</Text>
        <Text style={styles.headerMore}>See More</Text>
      </View>
      <ProductsHorizontalList products={products} />
    </View>
  );
};

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

export default MegaSaleRow;
