import {
  Dimensions,
  FlatList,
  Image,
  ImageProps,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Product } from "@/data/data";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  products: Product[];
}

const ProductsList = ({ products }: Props) => {
  const width = Dimensions.get("window").width;

  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        gap: 8,
      }}
      contentContainerStyle={{ gap: 24 }}
      style={{ marginTop: 12, marginBottom: 24 }}
      data={products}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const discountPercentage = Math.floor(
          ((item.price - item.discount_price) / item.price) * 100
        );

        return (
          <View
            style={{
              width: "48%",
              borderWidth: 0.6,
              borderColor: Colors.light.tint,
              height: width / 1.4,
              padding: 12,
              borderRadius: 6,
            }}
          >
            <Image
              style={{ width: "100%", height: "55%", borderRadius: 6 }}
              source={item.image as ImageProps}
            />
            <Text
              style={{
                fontWeight: 700,
                letterSpacing: 0.4,
                marginTop: 8,
                marginBottom: 8,
                fontSize: 14,
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                marginBottom: 16,
                flexDirection: "row",
                width: "100%",
                gap: 4,
              }}
            >
              {[1, 2, 3, 4, 5].map(() => (
                <Ionicons name="star" color={"#FFBF00"} size={16} />
              ))}
            </View>
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
  );
};

export default ProductsList;
