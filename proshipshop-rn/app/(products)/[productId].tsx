import { FC } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComponent } from "../(sales)/super-flash-sale";
import { useLocalSearchParams } from "expo-router";
import { productsShoes } from "@/data/data";
import CarouselProductGallery from "@/components/CarouselProductGallery";
import Colors from "@/constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ReviewSection from "@/components/ReviewSection";
import ProductsHorizontalList from "@/components/ProductsHorizontalList";

interface Props {}

const ProductScreen: FC<Props> = (props) => {
  const { productId } = useLocalSearchParams();

  const product = productsShoes.find(
    (p) => p.id == parseInt(productId as string)
  );

  if (!product) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <HeaderComponent text={product.name} />
        <CarouselProductGallery />
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <Text style={styles.productName}>{product.name}</Text>
            <Ionicons name="heart-outline" size={24} style={styles.heartIcon} />
          </View>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <AntDesign key={i} name="star" color={"#FFBF00"} size={18} />
            ))}
          </View>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.selectText}>Select Size</Text>
          <FlatList
            horizontal
            contentContainerStyle={{ gap: 18 }}
            style={{ marginTop: 12 }}
            data={product.sizes}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.itemContainer}>
                  <View style={styles.sizeContainer}>
                    <Text style={styles.sizeText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={[styles.selectText, { marginTop: 24 }]}>
            Select Color
          </Text>
          <FlatList
            horizontal
            contentContainerStyle={{ gap: 18 }}
            style={{ marginTop: 12 }}
            data={product.colors}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.itemContainer}>
                  <View
                    style={[
                      styles.sizeContainer,
                      { backgroundColor: item.toLowerCase() },
                    ]}
                  ></View>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={[styles.selectText, { marginTop: 24 }]}>
            Specification
          </Text>
          <View style={styles.specContainer}>
            {Object.entries(product.specifications).map(([key, value]) => (
              <View key={key} style={styles.specRow}>
                <Text style={styles.specKey}>{key}:</Text>
                <Text style={styles.specValue}>{value}</Text>
              </View>
            ))}
          </View>
          <ReviewSection reviews={product.reviews} />
          <Text style={styles.headerText}>You Might also Like</Text>
          <ProductsHorizontalList products={productsShoes} />
          <View style={{ marginVertical: 24 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
  },
  headerText: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  contentContainer: {
    marginHorizontal: 12,
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 20,
    color: Colors.light.text,
    fontWeight: "bold",
    flex: 1,
  },
  heartIcon: {
    marginLeft: 8,
  },
  ratingContainer: {
    marginVertical: 16,
    flexDirection: "row",
    width: "100%",
    gap: 4,
  },
  productPrice: {
    fontWeight: "700",
    letterSpacing: 0.4,
    fontSize: 24,
    color: Colors.light.tint,
  },
  itemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  sizeText: {
    color: "black",
    fontWeight: "bold",
  },
  sizeContainer: {
    height: 45,
    width: 45,
    borderWidth: 0.8,
    borderColor: Colors.light.tint,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  selectText: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 18,
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  specContainer: {
    marginTop: 12,
    borderRadius: 8,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  specKey: {
    fontWeight: "bold",
    color: "#555",
    marginRight: 8,
    fontSize: 14,
  },
  specValue: {
    color: "#555",
    fontSize: 14,
  },
  button: {
    backgroundColor: Colors.light.tint,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 0.8,
  },
});

export default ProductScreen;
