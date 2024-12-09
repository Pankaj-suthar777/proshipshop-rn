import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "@/components/layout/HeaderComponent";
import Colors from "@/constants/Colors";

const addresses = [
  {
    id: "1",
    name: "Priscekila",
    address:
      "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
    phone: "+99 1234567890",
  },
  {
    id: "2",
    name: "Ahmad Khaidir",
    address:
      "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
    phone: "+99 1234567890",
  },
  {
    id: "3",
    name: "Ahmad Khaidir",
    address:
      "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
    phone: "+99 1234567890",
  },
  {
    id: "4",
    name: "Ahmad Khaidir",
    address:
      "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
    phone: "+99 1234567890",
  },
];

const AddressScreen = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>{item.address}</Text>
      <Text style={styles.details}>{item.phone}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="Address" showSearch={false} />
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle" size={24} color="white" />
        <Text style={styles.addButtonText}>Add Address</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: Colors.light.tint,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#e3f2fd",
    borderRadius: 4,
  },
  editText: {
    color: "#2196f3",
    fontWeight: "bold",
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#ffebee",
    borderRadius: 4,
  },
  deleteText: {
    color: "#f44336",
    fontWeight: "bold",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196f3",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default AddressScreen;
