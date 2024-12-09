import ProductsGridList from "@/components/products/ProductsGridList";
import { productsShoes } from "@/data/data";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "@/components/layout/HeaderComponent";

const FavoriteProductsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <HeaderComponent text="Favorite Products" showSearch={false} />

        <View style={{ paddingHorizontal: 16 }}>
          <ProductsGridList products={productsShoes} />
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
});

export default FavoriteProductsScreen;
