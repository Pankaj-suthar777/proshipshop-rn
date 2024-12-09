import Colors from "@/constants/Colors";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Nike Air Zoom Pegasus 36 Miami",
      price: 299.43,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      id: "2",
      name: "Nike Air Zoom Pegasus 36 Miami",
      price: 299.43,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      id: "3",
      name: "Nike Air Zoom Pegasus 36 Miami",
      price: 299.43,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      id: "4",
      name: "Nike Air Zoom Pegasus 36 Miami",
      price: 299.43,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
  ]);

  const incrementQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        <View style={styles.itemActions}>
          <Feather name="heart" color={Colors.light.icon || "#000"} size={20} />
          <TouchableOpacity>
            <Text style={styles.icon}>
              <Feather
                name="trash"
                color={Colors.light.icon || "#000"}
                size={20}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quantityControls}>
          <TouchableOpacity
            onPress={() => decrementQuantity(item.id)}
            style={{ padding: 4, paddingHorizontal: 8 }}
          >
            <AntDesign name="minus" size={16} color="black" />
          </TouchableOpacity>
          <View style={{ paddingVertical: 2, paddingHorizontal: 8 }}>
            <Text style={styles.quantity}>{item.quantity}</Text>
          </View>

          <TouchableOpacity
            onPress={() => incrementQuantity(item.id)}
            style={{ padding: 4, paddingHorizontal: 8 }}
          >
            <AntDesign name="plus" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 40.0;
  const importCharges = 128.0;
  const totalPrice = subtotal + shipping + importCharges;
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Cart</Text>
        <Feather
          name="bell"
          size={24}
          color="#aaa"
          onPress={() =>
            router.push({
              pathname: "/(profile)/notifcations",
            })
          }
        />
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.couponContainer}>
        <TextInput placeholder="Enter Coupon Code" style={styles.couponInput} />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Items ({totalItems})</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Import charges</Text>
          <Text style={styles.summaryValue}>${importCharges.toFixed(2)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total Price</Text>
          <Text style={styles.totalValue}>${totalPrice.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Check Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  cartList: {
    paddingHorizontal: 16,
  },
  itemCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2d2d2d",
  },
  itemPrice: {
    fontSize: 14,
    color: "#00aaff",
    marginTop: 4,
  },
  itemActions: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  icon: {
    fontSize: 16,
    marginVertical: 4,
    color: "#ff6b6b",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    borderWidth: 0.8,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d2d2d",
    paddingHorizontal: 8,
  },
  quantity: {
    fontSize: 16,
    color: "#2d2d2d",
  },
  couponContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: "#00aaff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  applyText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  summary: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: "#9e9e9e",
  },
  summaryValue: {
    fontSize: 14,
    color: "#2d2d2d",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d2d2d",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00aaff",
  },
  checkoutButton: {
    backgroundColor: "#00aaff",
    paddingVertical: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
});

export default CartScreen;
