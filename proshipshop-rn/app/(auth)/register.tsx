import React, { useEffect } from "react";
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
import TextInputComponent from "@/components/ui/TextInput";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Keys, saveToAsyncStorage } from "@/utils/asyncStorage";
import { useAuthStore } from "@/store/authStore";
import { Notifier, Easing } from "react-native-notifier";
import { registerSchema } from "@/zod-schemas/user.schemas";
import { useMutation } from "@apollo/client";
import { REGISTER_USER_MUTATION } from "@/graphql/mutations/user.mutations";
import { errorToast, errorWrapper } from "@/utils/helpers";

const RegisterScreen = () => {
  const router = useRouter();
  const { setUserInfo, setIsLoggedIn } = useAuthStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [registerUser, { loading, error }] = useMutation(
    REGISTER_USER_MUTATION,
    {
      onCompleted: () => {
        Notifier.showNotification({
          title: "Account created.",
          description: "You can now log in to your account.",
          duration: 0,
          showAnimationDuration: 800,
          showEasing: Easing.bounce,
          hideOnPress: false,
          translucentStatusBar: true,
        });
      },
    }
  );

  useEffect(() => {
    if (error) errorToast(error);
  }, [error]);

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const userInput = {
      username: values.name,
      email: values.email,
      password: values.password,
    };

    await errorWrapper(async () => {
      await registerUser({
        variables: { userInput },
      });
    });
    // await saveToAsyncStorage(Keys.AUTH_TOKEN, data.token);
    // setUserInfo(data.userInfo);
    setIsLoggedIn(true);
    // router.replace("/(tabs)/");
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
          <Text style={styles.title}>Let's Get Started</Text>
          <Text style={styles.subtitle}>Create a new account</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name={"name"}
          render={({ field: { value, onChange } }) => {
            return (
              <TextInputComponent
                Icon={<AntDesign name="user" color={"gray"} size={24} />}
                placeholder="Full Name"
                autoCapitalize={"none"}
                onChangeText={onChange}
                value={value}
                errorMsg={errors.name?.message}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={"email"}
          render={({ field: { value, onChange } }) => {
            return (
              <TextInputComponent
                Icon={<Ionicons name="mail" color={"gray"} size={24} />}
                placeholder="Your Email"
                autoCapitalize={"none"}
                onChangeText={onChange}
                value={value}
                errorMsg={errors.email?.message}
              />
            );
          }}
        />
        <Controller
          control={control}
          name={"password"}
          render={({ field: { value, onChange } }) => (
            <TextInputComponent
              Icon={<Ionicons name="lock-closed" color={"gray"} size={24} />}
              placeholder="Password"
              autoCapitalize={"none"}
              onChangeText={onChange}
              value={value}
              errorMsg={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name={"confirmPassword"}
          render={({ field: { value, onChange } }) => (
            <TextInputComponent
              Icon={<Ionicons name="lock-closed" color={"gray"} size={24} />}
              placeholder="Password Again"
              autoCapitalize={"none"}
              onChangeText={onChange}
              value={value}
              errorMsg={errors.confirmPassword?.message}
            />
          )}
        />
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => handleSubmit(onSubmit)()}
          disabled={loading}
        >
          <Text style={styles.signUpButtonText}>
            {loading ? "Loading..." : "Sign up"}
          </Text>
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
    backgroundColor: "white",
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
