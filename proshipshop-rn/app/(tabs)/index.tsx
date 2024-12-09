import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { View } from "@/components/ui/Themed";
import CarouselHome from "@/components/home/CarouselHome";
import CategoryRow from "@/components/home/section/CategoryRow";
import FlashSaleRow from "@/components/home/section/FlashSaleRow";
import MegaSaleRow from "@/components/home/section/MegaSaleRow";
import ProductsGridList from "@/components/products/ProductsGridList";
import { productsShoes } from "@/data/data";
import { useRouter } from "expo-router";

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
  const router = useRouter();
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
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: "/(profile)/favoirite-products" })
            }
          >
            <Feather
              name="heart"
              color={Colors.light.icon || "#000"}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/(profile)/notifcations" })}
          >
            <Feather
              name="bell"
              color={Colors.light.icon || "#000"}
              size={24}
            />
          </TouchableOpacity>
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
    justifyContent: "space-between",
  },
  searchContainer: {
    flex: 1,
    gap: 8,
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 16,
  },
});
