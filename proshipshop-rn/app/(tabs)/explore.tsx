import EditScreenInfo from "@/components/EditScreenInfo";
import { Link } from "expo-router";
import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {}

const ExploreScreen: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Link href={"/(auth)/login"}>Go To Login</Link>
      <Link href={"/(auth)/register"}>Go To Register</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default ExploreScreen;
