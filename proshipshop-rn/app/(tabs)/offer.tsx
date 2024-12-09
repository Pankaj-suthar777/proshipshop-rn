import { useRouter } from "expo-router";
import { FC } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {}

const OfferScreen: FC<Props> = (props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/(auth)/login" })}
      >
        <Text>login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/(auth)/register" })}
      >
        <Text>register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default OfferScreen;
