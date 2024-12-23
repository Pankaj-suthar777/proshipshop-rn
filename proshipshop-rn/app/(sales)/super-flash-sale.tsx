import ProductsGridList from "@/components/products/ProductsGridList";
import { productsShoes } from "@/data/data";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "@/components/layout/HeaderComponent";

const SuperFlashSaleScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <HeaderComponent text="Super Flash Sale" />

        <View style={{ paddingHorizontal: 16 }}>
          <Image
            style={{
              width: "100%",
              height: 250,
              marginTop: 24,
              marginBottom: 12,
              borderRadius: 8,
              objectFit: "cover",
            }}
            source={require("@/assets/shoe-banner/5.jpg")}
          />
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

export default SuperFlashSaleScreen;
