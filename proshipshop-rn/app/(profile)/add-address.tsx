import HeaderComponent from "@/components/layout/HeaderComponent";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddAddressScreen = () => {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const handleInputChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAddress = () => {
    console.log("Address added:", formData);
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <HeaderComponent text="Add Address" showSearch={false} />
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country or region</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the country or region"
              value={formData.country}
              onChangeText={(value) => handleInputChange("country", value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the first name"
              value={formData.firstName}
              onChangeText={(value) => handleInputChange("firstName", value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the last name"
              value={formData.lastName}
              onChangeText={(value) => handleInputChange("lastName", value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Street Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the street address"
              value={formData.streetAddress}
              onChangeText={(value) =>
                handleInputChange("streetAddress", value)
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Street Address 2 (Optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the street address 2"
              value={formData.streetAddress2}
              onChangeText={(value) =>
                handleInputChange("streetAddress2", value)
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the city"
              value={formData.city}
              onChangeText={(value) => handleInputChange("city", value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>State/Province/Region</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the state/province/region"
              value={formData.state}
              onChangeText={(value) => handleInputChange("state", value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the zip code"
              value={formData.zipCode}
              onChangeText={(value) => handleInputChange("zipCode", value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the phone number"
              value={formData.phoneNumber}
              onChangeText={(value) => handleInputChange("phoneNumber", value)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleAddAddress}>
            <Text style={styles.buttonText}>Add Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#2d2d2d",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2d2d2d",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#00aaff",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddAddressScreen;
