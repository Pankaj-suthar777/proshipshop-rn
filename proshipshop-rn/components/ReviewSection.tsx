import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ProductReview } from "@/data/data";

const ReviewSection = ({ reviews }: { reviews: ProductReview[] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Review Product</Text>
        <Text style={styles.seeMore}>See More</Text>
      </View>

      <View style={styles.ratingSummary}>
        <AntDesign name="star" size={20} color="#FFC107" />
        <AntDesign name="star" size={20} color="#FFC107" />
        <AntDesign name="star" size={20} color="#FFC107" />
        <AntDesign name="star" size={20} color="#FFC107" />
        <Ionicons name="star-half" size={20} color="#FFC107" />
        <Text style={styles.averageRating}>4.5</Text>
        <Text style={styles.totalReviews}>(5 Reviews)</Text>
      </View>

      {reviews.map((review) => (
        <View key={review.user} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.reviewerName}>{review.user}</Text>
              <View style={styles.ratingStars}>
                {[...Array(5)].map((_, index) => (
                  <AntDesign
                    key={index}
                    name={index < review.rating ? "star" : "staro"}
                    size={16}
                    color="#FFC107"
                  />
                ))}
              </View>
            </View>
          </View>
          <Text style={styles.reviewText}>{review.comment}</Text>

          <FlatList
            horizontal
            contentContainerStyle={{ gap: 24 }}
            style={{ marginTop: 12 }}
            data={review.images}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image style={styles.reviewImage} source={item} />
            )}
          />
          <Text style={styles.reviewDate}>{"December 10, 2016"}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeMore: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008CFF",
  },
  ratingSummary: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  averageRating: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#555",
  },
  totalReviews: {
    fontSize: 14,
    color: "#555",
    marginLeft: 4,
  },
  reviewCard: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 16,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  ratingStars: {
    flexDirection: "row",
    marginTop: 4,
  },
  reviewText: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    lineHeight: 20,
  },
  reviewDate: {
    fontSize: 12,
    color: "#888",
  },
  reviewImage: { height: 60, width: 60, marginBottom: 12 },
});

export default ReviewSection;
