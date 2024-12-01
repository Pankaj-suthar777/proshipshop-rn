import { Image, ScrollView, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { View } from "@/components/Themed";
import CarouselHome from "@/components/CarouselHome";
import CategoryRow from "@/components/CategoryRow";
import FlashSaleRow from "@/components/FlashSaleRow";
import MegaSaleRow from "@/components/MegaSaleRow";
import ProductsGridList from "@/components/ProductsGridList";
import { productsShoes } from "@/data/data";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <SearchInputHeader />
        <CarouselHome />
        <View style={{ paddingHorizontal: 16 }}>
          <CategoryRow />
          <FlashSaleRow />
          <MegaSaleRow />
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
}

const SearchInputHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <View style={[styles.row, styles.searchContainer]}>
          <Feather
            name="search"
            color={Colors.light.tint || "#000"}
            size={24}
          />
          <TextInput
            placeholder="Search Product"
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>
        <View style={[styles.row, styles.iconsContainer]}>
          <Feather name="heart" color={Colors.light.icon || "#000"} size={24} />
          <Feather name="bell" color={Colors.light.icon || "#000"} size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Align elements to opposite ends
  },
  searchContainer: {
    flex: 1, // Allows the search input container to take up available space
    gap: 8,
  },
  searchInput: {
    fontSize: 16,
    flex: 1, // Makes the input grow to fill available space
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 16, // Space between the icons; fallback to marginRight if unsupported
  },
});
