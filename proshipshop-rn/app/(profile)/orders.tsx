import HeaderComponent from "@/components/layout/HeaderComponent";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderScreen = () => {
  const orders = [
    {
      id: "SDG1345KJD",
      date: "August 1, 2017",
      status: "Shipping",
      items: 1,
      price: "299,43",
    },
    {
      id: "SDG1345KJD",
      date: "August 1, 2017",
      status: "Shipping",
      items: 1,
      price: "299,43",
    },
    {
      id: "SDG1345KJD",
      date: "August 1, 2017",
      status: "Shipping",
      items: 1,
      price: "299,43",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="Order" showSearch={false} />
      <ScrollView>
        {orders.map((order, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.orderId}>{order.id}</Text>
            <Text style={styles.date}>Order at E-com : {order.date}</Text>
            <View style={styles.divider} />
            <View style={styles.row}>
              <Text style={styles.label}>Order Status</Text>
              <Text style={styles.value}>{order.status}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Items</Text>
              <Text style={styles.value}>{order.items} Items purchased</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Price</Text>
              <Text style={styles.price}>${order.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    padding: 16,
    borderColor: "#9e9e9e",
    borderWidth: 0.4,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d2d2d",
  },
  date: {
    fontSize: 14,
    color: "#9e9e9e",
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#9e9e9e",
  },
  value: {
    fontSize: 14,
    color: "#2d2d2d",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00aaff",
  },
});

export default OrderScreen;
