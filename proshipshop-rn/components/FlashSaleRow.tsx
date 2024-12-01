import {
  Dimensions,
  FlatList,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Image } from "react-native";
import { products } from "@/data/data";
import { useRouter } from "expo-router";
interface ProductReview {
  user: string;
  comment: string;
  rating: number;
}

interface ProductSpecifications {
  [key: string]: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount_price: number;
  description: string;
  rating: number;
  reviews: ProductReview[];
  sizes: string[];
  colors: string[];
  specifications: ProductSpecifications;
}

const FlashSaleRow = () => {
  const width = Dimensions.get("window").width;
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
      <FlatList
        horizontal
        contentContainerStyle={{ gap: 12 }}
        style={{ marginTop: 12 }}
        data={products as Product[]}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const discountPercentage = Math.floor(
            ((item.price - item.discount_price) / item.price) * 100
          );

          return (
            <View
              style={{
                width: width / 2.6,
                borderWidth: 0.5,
                borderColor: Colors.light.tint,
                height: width / 1.6,
                padding: 12,
                borderRadius: 6,
              }}
            >
              <TouchableOpacity style={styles.productImageContainer}>
                <Image
                  style={styles.productImage}
                  source={item.image as ImageProps}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.productName}>{item.name}</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: 700,
                  letterSpacing: 0.4,
                  marginBottom: 8,
                  fontSize: 18,
                  color: Colors.light.tint,
                }}
              >
                ${item.price}
              </Text>
              <View
                style={{
                  marginBottom: 8,
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontWeight: 700,
                    letterSpacing: 0.4,
                    fontSize: 14,
                    color: Colors.light.tabIconDefault,
                    textDecorationLine: "line-through",
                  }}
                >
                  ${(item.price + item.discount_price).toFixed(2)}
                </Text>
                <Text
                  style={{
                    fontWeight: 700,
                    letterSpacing: 0.4,
                    fontSize: 14,
                    color: "#EE4B2B",
                  }}
                >
                  {discountPercentage}% Off
                </Text>
              </View>
            </View>
          );
        }}
      />
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
  itemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  iconContainer: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: Colors.light.tint,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: Colors.light.text,
    fontWeight: 400,
  },
  productImageContainer: {
    width: "100%",
    height: "55%",
    borderRadius: 6,
  },
  productImage: {
    height: "100%",
    width: "100%",
    borderRadius: 6,
  },
  productName: {
    fontWeight: "700",
    letterSpacing: 0.4,
    marginTop: 8,
    marginBottom: 8,
    fontSize: 14,
  },
});
