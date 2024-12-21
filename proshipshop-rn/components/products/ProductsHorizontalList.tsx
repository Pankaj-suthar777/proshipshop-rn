import Colors from "@/constants/Colors";
import { Product } from "@/data/data";
import { FC } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  ImageProps,
} from "react-native";

interface Props {
  products: Product[];
}

const ProductsHorizontalList: FC<Props> = ({ products }) => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        contentContainerStyle={styles.flatListContent}
        style={styles.flatList}
        data={products.reverse()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const discountPercentage = Math.floor(
            ((item.price - item.discount_price) / item.price) * 100
          );

          return (
            <View
              key={item.id}
              style={[styles.productContainer, { height: width / 1.6 }]}
            >
              <TouchableOpacity style={styles.productImageContainer}>
                <Image
                  style={styles.productImage}
                  source={item.image as ImageProps}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Text
                  style={styles.productName}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
              <Text style={styles.productPrice}>${item.price}</Text>
              <View style={styles.discountContainer}>
                <Text style={styles.originalPrice}>
                  ${(item.price + item.discount_price).toFixed(2)}
                </Text>
                <Text style={styles.discountPercentage}>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  flatListContent: {
    gap: 12,
  },
  flatList: {
    marginTop: 12,
  },
  productContainer: {
    width: Dimensions.get("window").width / 2.6,
    borderWidth: 0.5,
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

export default ProductsHorizontalList;
