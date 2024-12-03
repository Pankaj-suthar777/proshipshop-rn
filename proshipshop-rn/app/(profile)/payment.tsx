import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome5, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { HeaderComponent } from "../(sales)/super-flash-sale";
import { SafeAreaView } from "react-native-safe-area-context";

const paymentOptions = [
  {
    id: "1",
    name: "Credit Card Or Debit",
    icon: <MaterialIcons name="credit-card" size={24} color="#2196f3" />,
  },
  {
    id: "2",
    name: "Paypal",
    icon: <FontAwesome name="paypal" size={24} color="#003087" />,
  },
  {
    id: "3",
    name: "Bank Transfer",
    icon: <FontAwesome5 name="university" size={24} color="#2196f3" />,
  },
];

const PaymentScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.paymentItem}>
      <View style={{ width: 35 }}>{item.icon}</View>
      <Text style={styles.paymentText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="Payment" showSearch={false} />

      <FlatList
        data={paymentOptions}
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
  paymentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  paymentText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 12,
    fontWeight: "500",
  },
});

export default PaymentScreen;
