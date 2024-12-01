import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TextInputComponent from "@/components/TextInput";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="white" />
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("@/assets/images/245C.jpg")}
        />
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.title}>Let's Get Started</Text>
          <Text style={styles.subtitle}>Create a new account</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInputComponent
          Icon={<AntDesign name="user" color={"gray"} size={24} />}
          placeholder="Full Name"
        />
        <TextInputComponent
          Icon={<Ionicons name="mail" color={"gray"} size={24} />}
          placeholder="Your Email"
        />
        <TextInputComponent
          Icon={<Ionicons name="lock-closed" color={"gray"} size={24} />}
          placeholder="Password"
        />
        <TextInputComponent
          Icon={<Ionicons name="lock-closed" color={"gray"} size={24} />}
          placeholder="Password Again"
        />
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.signInTextContainer}>
          <Text style={styles.signInText}>
            Have an account?{" "}
            <Link href={"/(auth)/login"} style={styles.signInLink}>
              Sign in
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 12,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 18,
  },
  welcomeTextContainer: {
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 0.9,
    fontFamily: Platform.select({
      android: "Poppins_400Regular",
      ios: "Poppins_400Regular",
    }),
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  formContainer: {
    marginTop: 24,
    width: "100%",
    gap: 14,
  },
  signUpButton: {
    backgroundColor: Colors.light.tint,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  signUpButtonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 0.8,
  },
  signInTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  signInText: {
    letterSpacing: 0.8,
  },
  signInLink: {
    fontWeight: "700",
    color: Colors.light.tint,
    letterSpacing: 1,
  },
});

export default RegisterScreen;
