import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Colors from "@/constants/Colors";
import TextInputComponent from "@/components/ui/TextInput";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import client from "@/api/client";
import { Keys, saveToAsyncStorage } from "@/utils/asyncStorage";
import { useAuthStore } from "@/store/authStore";
import { loginSchema } from "@/zod-schemas/user.schemas";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "@/graphql/mutations/user.mutations";
import { Notifier } from "react-native-notifier";
import { errorToast, errorWrapper } from "@/utils/helpers";

const LoginScreen = () => {
  const router = useRouter();
  const { setUserInfo } = useAuthStore();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: () => {
      Notifier.showNotification({
        title: "Login successfull",
        duration: 3000,
        showAnimationDuration: 800,
        hideOnPress: false,
        translucentStatusBar: true,
      });
    },
  });

  useEffect(() => {
    if (error) errorToast(error);
  }, [error]);

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    // await saveToAsyncStorage(Keys.AUTH_TOKEN, data.token);
    // setUserInfo(data.userInfo);
    // router.replace("/(tabs)/");
    const userInput = {
      email: values.email,
      password: values.password,
    };

    await errorWrapper(async () => {
      await loginUser({
        variables: { ...userInput },
      });
    });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="white" />
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("@/assets/images/245C.jpg")}
        />
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.title}>Welcome to ProShipShop</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name={"email"}
          render={({ field: { value, onChange } }) => (
            <TextInputComponent
              Icon={<Ionicons name="mail" color={"gray"} size={24} />}
              placeholder="Your Email"
              autoCapitalize={"none"}
              onChangeText={onChange}
              value={value}
              errorMsg={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name={"password"}
          render={({ field: { value, onChange } }) => (
            <TextInputComponent
              Icon={<Ionicons name="lock-closed" color={"gray"} size={24} />}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize={"none"}
              onChangeText={onChange}
              value={value}
              errorMsg={errors.password?.message}
            />
          )}
        />

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => handleSubmit(onSubmit)()}
          disabled={loading}
        >
          <Text style={styles.signInButtonText}>
            {loading ? "Loading..." : "Sign in"}
          </Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.googleButton}>
          <AntDesign name="google" size={24} color="#B2BEB5" />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity>
        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>
            Don't have an account?{" "}
            <Link href={"/(auth)/register"} style={styles.signUpLink}>
              Sign up using email
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
    backgroundColor: "white",
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
    fontWeight: "700",
    letterSpacing: 0.9,
  },
  subtitle: {
    fontSize: 16,
    color: "#B2BEB5",
  },
  formContainer: {
    marginTop: 24,
    width: "100%",
    gap: 14,
  },
  signInButton: {
    backgroundColor: Colors.light.tint,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  signInButtonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 0.8,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#B2BEB5",
  },
  orText: {
    marginHorizontal: 16,
    color: "gray",
    fontWeight: "700",
    fontSize: 16,
  },
  googleButton: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    flexDirection: "row",
    gap: 12,
  },
  googleButtonText: {
    color: "#B2BEB5",
    fontWeight: "600",
    letterSpacing: 0.8,
  },
  signUpTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: 8,
  },
  signUpText: {
    letterSpacing: 0.8,
  },
  signUpLink: {
    fontWeight: "700",
    color: Colors.light.tint,
    letterSpacing: 1,
  },
});

export default LoginScreen;
