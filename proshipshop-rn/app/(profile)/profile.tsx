import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { HeaderComponent } from "../(sales)/super-flash-sale";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const ProfileScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="Profile" showSearch={false} />

      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual image link
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dominic Ovo</Text>
          <Text style={styles.username}>@dominic_ovo</Text>
        </View>
      </View>

      <View style={styles.detailsSection}>
        <TouchableOpacity style={styles.detailRow}>
          <Text style={styles.detailLabel}>Gender</Text>
          <Text style={styles.detailValue}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailRow}>
          <Text style={styles.detailLabel}>Birthday</Text>
          <Text style={styles.detailValue}>12-12-2000</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailRow}>
          <Text style={styles.detailLabel}>Email</Text>
          <Text style={styles.detailValue}>rex4dom@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailRow}>
          <Text style={styles.detailLabel}>Phone Number</Text>
          <Text style={styles.detailValue}>(307) 555-0133</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.detailRow}
          onPress={() =>
            router.push({
              pathname: "/(auth)/change-password",
            })
          }
        >
          <Text style={styles.detailLabel}>Change Password</Text>
          <Text style={styles.detailValue}>••••••••</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  username: {
    fontSize: 14,
    color: "#888",
  },
  detailsSection: {
    marginTop: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  detailLabel: {
    fontSize: 16,
    color: "#1a1a1a",
  },
  detailValue: {
    fontSize: 16,
    color: "#666",
  },
});

export default ProfileScreen;
