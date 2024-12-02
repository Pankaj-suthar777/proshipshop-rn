import {
  Dimensions,
  Image,
  ImageProps,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Product } from "@/data/data";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
  products: Product[];
}

const ProductsGridList = ({ products }: Props) => {
  const width = Dimensions.get("window").width;
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {products.map((item) => {
          const discountPercentage = Math.floor(
            ((item.price - item.discount_price) / item.price) * 100
          );

          return (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/(products)/[productId]",
                  params: {
                    productId: item.id,
                  },
                })
              }
              key={item.id}
              style={[styles.productContainer, { height: width / 1.2 }]}
            >
              <View style={styles.productImageContainer}>
                <Image
                  style={styles.productImage}
                  source={item.image as ImageProps}
                />
              </View>

              <View>
                <Text style={styles.productName}>{item.name}</Text>
              </View>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Ionicons key={i} name="star" color={"#FFBF00"} size={16} />
                ))}
              </View>
              <Text style={styles.productPrice}>${item.price}</Text>
              <View style={styles.discountContainer}>
                <Text style={styles.originalPrice}>
                  ${(item.price + item.discount_price).toFixed(2)}
                </Text>
                <Text style={styles.discountPercentage}>
                  {discountPercentage}% Off
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8,
  },
  productContainer: {
    width: "48%",
    borderWidth: 0.6,
    borderColor: Colors.light.tint,
    padding: 12,
    borderRadius: 6,
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
  ratingContainer: {
    marginBottom: 16,
    flexDirection: "row",
    width: "100%",
    gap: 4,
  },
  productPrice: {
    fontWeight: "700",
    letterSpacing: 0.4,
    marginBottom: 8,
    fontSize: 18,
    color: Colors.light.tint,
  },
  discountContainer: {
    marginBottom: 8,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  originalPrice: {
    fontWeight: "700",
    letterSpacing: 0.4,
    fontSize: 14,
    color: Colors.light.tabIconDefault,
    textDecorationLine: "line-through",
  },
  discountPercentage: {
    fontWeight: "700",
    letterSpacing: 0.4,
    fontSize: 14,
    color: "#EE4B2B",
  },
});

export default ProductsGridList;
