import { Box, Text } from "native-base";
import * as React from "react";
import { Dimensions, View, Image, StyleSheet} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import SectionHeader from "./section-header";
import { ImageBackground } from "react-native";


function Index() {
  const width = Dimensions.get("window").width;
  const carouselRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const renderDots = () => {
    return new Array(2).fill(null).map((_, index) => (
      <View key={index} style={[styles.dot, index === currentIndex && styles.activeDot]} />
    ));
  };

  const Item = ({ index }: any) => (
    <ImageBackground
      source={require("../assets/offer-bg.png")}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center", borderRadius: 30, overflow: 'hidden' }}
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: 20,
          justifyContent: "center",
        }}
      >
        <Text color="#fff" fontWeight={700} fontSize={36} >
          30 %
        </Text>
        <Text color="#fff" fontWeight={500} fontSize={18} my="2">
          Today Special
        </Text>
        <Text color="#fff" numberOfLines={2} fontWeight={400} fontSize={11}>
          {" "}
          Get discount for every {"\n"}order, only valid for today
        </Text>
      </View>
      <Box>
          <Image source={require("../assets/offer-image.png")} alt="offer" style={{ width: 120, height: 150, position: "absolute", bottom: -25, right: 0 }} />
      </Box>
    </ImageBackground>
  );

  return (
    <Box mt="5">
      <SectionHeader title="Special Offers" />
      <Box mt="4">
        <Carousel
          loop
          width={330}
          height={width / 2}
          autoPlay={false}
          data={[...new Array(2).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setCurrentIndex(index)}
          renderItem={({ index }) => <Item index={index} />}
        />
        <View style={styles.dotContainer}>{renderDots()}</View>
      </Box>
    </Box>
  );
}


const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    left: '45%',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 15,
  },
});

export default Index;
