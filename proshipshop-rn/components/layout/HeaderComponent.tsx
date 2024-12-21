import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

const HeaderComponent = ({
  text,
  showSearch = true,
}: {
  text: string;
  showSearch?: boolean;
}) => {
  const router = useRouter();
  return (
    <View
      style={{
        height: 60,
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
            {text}
          </Text>
        </View>
        {showSearch && (
          <TouchableOpacity
            onPress={() => router.push({ pathname: "/(products)/search" })}
            style={{ marginHorizontal: 8 }}
          >
            <Feather name="search" color={Colors.light.icon} size={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
