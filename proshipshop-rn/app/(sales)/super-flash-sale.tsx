import ProductsGridList from "@/components/ProductsGridList";
import Colors from "@/constants/Colors";
import { productsShoes } from "@/data/data";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FC } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const SuperFlashSaleScreen: FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <HeaderComponent />

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

const HeaderComponent = () => {
  const router = useRouter();
  return (
    <View
      style={{
        height: 80,
        justifyContent: "center",
        marginHorizontal: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => router.back()}>
            <Feather name="chevron-left" color={Colors.light.icon} size={28} />
          </Pressable>
          <Text
            style={{
              fontSize: 20,
              color: Colors.light.text,
              fontWeight: "800",
              marginLeft: 16,
            }}
          >
            Super Flash Sale
          </Text>
        </View>
        <View>
          <Feather name="search" color={Colors.light.icon} size={28} />
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
});

export default SuperFlashSaleScreen;
