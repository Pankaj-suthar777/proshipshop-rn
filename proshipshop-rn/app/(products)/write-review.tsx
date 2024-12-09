import HeaderComponent from "@/components/layout/HeaderComponent";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StarRating from "react-native-star-rating-widget";

const WriteReviewScreen: React.FC = () => {
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="Write Review" showSearch={false} />
      <Text
        style={{
          marginHorizontal: 16,
          fontSize: 18,
          fontWeight: "500",
          color: Colors.light.text,
          marginVertical: 8,
        }}
      >
        Please write Overall level of satisfaction with your shipping / Delivery
        Service
      </Text>
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 8,
          flexDirection: "row",
          gap: 4,
          width: "100%",
        }}
      >
        <StarRating rating={rating} onChange={setRating} />
      </View>
      <View style={{ marginHorizontal: 16, marginVertical: 24, gap: 16 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: Colors.light.text,
          }}
        >
          Write Your Review
        </Text>
        <TextInput
          placeholder="Add Review"
          style={{
            borderWidth: 1,
            borderColor: "#D3D3D3",
            padding: 20,
            borderRadius: 10,
            height: 200,
            textAlignVertical: "top",
          }}
          multiline={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Write Review</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
    color: "#333",
  },
  list: {
    paddingHorizontal: 16,
  },
  reviewWrapper: {
    marginBottom: 20,
  },
  reviewContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 6,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  rating: {
    flexDirection: "row",
    marginVertical: 4,
  },

  reviewText: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 4,
  },
  button: {
    backgroundColor: Colors.light.tint,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 0.8,
  },
});

export default WriteReviewScreen;
