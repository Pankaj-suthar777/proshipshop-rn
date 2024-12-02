import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "James Lawson",
      profileImage: "https://via.placeholder.com/50",
      rating: 5,
      reviewText:
        "Air Max are always very comfortable fit, clean and just perfect in every way. Just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
      date: "December 10, 2016",
      images: [
        require("@/assets/shoes/10.png"),
        require("@/assets/shoes/20.png"),
        require("@/assets/shoes/30.png"),
        require("@/assets/shoes/40.png"),
      ],
    },
  ];

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
        <View key={review.id} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Image
              source={{ uri: review.profileImage }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.reviewerName}>{review.name}</Text>
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
          <Text style={styles.reviewText}>{review.reviewText}</Text>

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
          <Text style={styles.reviewDate}>{review.date}</Text>
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
