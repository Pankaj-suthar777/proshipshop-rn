// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import {
//   AntDesign,
//   Feather,
//   Ionicons,
//   MaterialIcons,
// } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import ProductsList from "@/components/products/ProductsList";
// import { productsShoes } from "@/data/data";

// const SearchFilterHeader = () => {
//   return (
//     <View style={{ flexDirection: "row", paddingHorizontal: 12 }}>
//       <View style={styles.searchBar}>
//         <Ionicons name="search-outline" size={20} color="#666" />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Nike Air Max"
//           placeholderTextColor="#999"
//         />
//       </View>
//       <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
//         <TouchableOpacity>
//           <MaterialIcons name="sort" size={24} color="#666" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <AntDesign name="filter" size={24} color="#666" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// import { Picker } from "@react-native-picker/picker";

// const Select = ({ options, selectedValue, onValueChange, placeholder }) => {
//   return (
//     <View style={selectStyles.container}>
//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={onValueChange}
//         style={selectStyles.picker}
//       >
//         {placeholder && <Picker.Item label={placeholder} value="" />}
//         {options.map((option, index) => (
//           <Picker.Item key={index} label={option.label} value={option.value} />
//         ))}
//       </Picker>
//     </View>
//   );
// };

// const selectStyles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   container: {
//     width: 160,
//     marginHorizontal: 12,
//   },
//   picker: {
//     height: 60,
//     width: "100%",
//   },
//   selectedText: {
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// const ProductsScreen = () => {
//   const router = useRouter();
//   const { width } = Dimensions.get("window");
//   const [selectedValue, setSelectedValue] = useState("");

//   const options = [
//     { label: "Option 1", value: "option1" },
//     { label: "Option 2", value: "option2" },
//     { label: "Option 3", value: "option3" },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <SearchFilterHeader />
//       <View
//         style={{
//           backgroundColor: "#999",
//           width: width,
//           marginVertical: 8,
//           height: 1,
//         }}
//       />

//       <View style={{ marginHorizontal: 12 }}>
//         <ProductsList
//           products={productsShoes}
//           headerComponent={
//             <View
//               style={{
//                 flexDirection: "row",
//                 width: "100%",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Text style={{ fontWeight: "700", color: "#666", fontSize: 16 }}>
//                 145 Result
//               </Text>
//               <Select
//                 options={options}
//                 selectedValue={selectedValue}
//                 onValueChange={setSelectedValue}
//                 placeholder="Please select"
//               />
//             </View>
//           }
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ProductsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   searchBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 12,
//     marginVertical: 12,
//     backgroundColor: "#F8F8F8",
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     flex: 1,
//   },
//   searchInput: {
//     flex: 1,
//     marginHorizontal: 8,
//     fontSize: 16,
//     color: "#333",
//   },
//   listContainer: {
//     paddingHorizontal: 16,
//     paddingTop: 10,
//   },
//   listItem: {
//     fontSize: 16,
//     color: "#666",
//     marginVertical: 16,
//   },
// });
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ProductsList from "@/components/products/ProductsList";
import { productsShoes } from "@/data/data";

const SearchFilterHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Nike Air Max"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <MaterialIcons name="sort" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="filter" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

import RNPickerSelect from "react-native-picker-select";

const Select = ({ options, selectedValue, onValueChange, placeholder }) => {
  return (
    <View>
      <RNPickerSelect
        style={{
          viewContainer: { width: 120 },
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Football", value: "football" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
      />
    </View>
  );
};

const selectStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 50,
    width: 100,
    marginHorizontal: 8,
  },
  picker: {
    height: 60,
  },
});

const ProductsScreen = () => {
  const router = useRouter();
  const { width } = Dimensions.get("window");
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SearchFilterHeader />
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <ProductsList
          products={productsShoes}
          headerComponent={
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsText}>145 Results</Text>
              <Select
                options={options}
                selectedValue={selectedValue}
                onValueChange={setSelectedValue}
                placeholder="Please select"
              />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    color: "#333",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  divider: {
    backgroundColor: "#D3D3D3",
    width: "100%",
    height: 1,
  },
  contentContainer: {
    marginHorizontal: 8,
    flex: 1,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultsText: {
    fontWeight: "700",
    color: "#666",
    fontSize: 16,
  },
});
