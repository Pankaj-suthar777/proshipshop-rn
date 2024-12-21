import HeaderComponent from "@/components/layout/HeaderComponent";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
}

// Mock review data
const reviews: Review[] = [
  {
    id: "1",
    name: "James Lawson",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
    review:
      "Air max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and scrunched the sneakers up a little bit. The 90s are and will always be one of my favorites.",
    date: "December 10, 2016",
  },
  {
    id: "2",
    name: "Laura Octavian",
    avatar: "https://via.placeholder.com/150",
    rating: 4,
    review:
      "This is really an amazing product, I like the design of the product, I hope I can buy it again!",
    date: "December 10, 2016",
  },
  {
    id: "3",
    name: "Jhonson Bridge",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
    review:
      "Air max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and scrunched the sneakers up a little bit.",
    date: "December 10, 2016",
  },
  {
    id: "4",
    name: "Jhonson Bridge",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
    review:
      "Air max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and scrunched the sneakers up a little bit.",
    date: "December 10, 2016",
  },
  {
    id: "5s",
    name: "Jhonson Bridge",
    avatar: "https://via.placeholder.com/150",
    rating: 5,
    review:
      "Air max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and scrunched the sneakers up a little bit.",
    date: "December 10, 2016",
  },
];

const renderStars = (rating: number): JSX.Element[] => {
  return Array.from({ length: 5 }, (_, index) => (
    <Text key={index} style={styles.star}>
      {index < rating ? "★" : "☆"}
    </Text>
  ));
};

const ReviewItem: React.FC<{ item: Review }> = ({ item }) => {
  return (
    <View style={styles.reviewWrapper}>
      <View style={styles.reviewContainer}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rating}>{renderStars(item.rating)}</View>
        </View>
      </View>
      <Text style={styles.reviewText}>{item.review}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );
};

const MoreReviewsScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text="5 Reviews" showSearch={false} />
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReviewItem item={item} />}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: "/(products)/write-review" })}
      >
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
    paddingTop: 20,
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
  star: {
    color: "#FFD700",
    fontSize: 16,
    marginRight: 2,
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
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 0.8,
  },
});

export default MoreReviewsScreen;
