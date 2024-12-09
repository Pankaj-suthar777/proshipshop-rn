import {
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import {
  useSharedValue,
  useDerivedValue,
  runOnJS,
} from "react-native-reanimated";

const data = [1, 2, 3, 4, 5];
const images = [
  require("../../assets/shoe-banner/1.jpg"),
  require("../../assets/shoe-banner/2.jpg"),
  require("../../assets/shoe-banner/3.jpg"),
  require("../../assets/shoe-banner/4.jpg"),
  require("../../assets/shoe-banner/5.jpg"),
];

const CustomPagination = ({ data, activeIndex, onPress }: any) => (
  <View style={styles.paginationContainer}>
    {data.map((_: any, index: number) => {
      const isActive = activeIndex === index; // Compare with React state
      return (
        <TouchableOpacity
          key={index}
          style={[styles.dot, isActive && styles.activeDot]}
          onPress={() => onPress(index)}
        />
      );
    })}
  </View>
);

const CarouselHome = () => {
  const width = Dimensions.get("window").width;
  const ref = useRef<any>(null);
  const progress = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update React state safely
  useDerivedValue(() => {
    const roundedIndex = Math.round(progress.value);
    if (roundedIndex !== activeIndex) {
      runOnJS(setActiveIndex)(roundedIndex);
    }
  }, [progress, activeIndex]);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      index,
      animated: true,
    });
  };

  return (
    <View style={{ height: width * 0.6 }}>
      <Carousel
        ref={ref}
        autoPlayInterval={2000}
        width={width}
        loop={true}
        height={width / 2}
        data={data}
        snapEnabled={true}
        pagingEnabled={true}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress; // Safely update the shared value
        }}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              // paddingHorizontal: 12,
            }}
          >
            <Image
              style={{
                flex: 1,
                width: "100%",
                resizeMode: "cover",
              }}
              source={images[index]}
            />
          </View>
        )}
      />
      <CustomPagination
        activeIndex={activeIndex} // Pass plain React state
        data={data}
        onPress={onPressPagination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "black",
  },
});

export default CarouselHome;
