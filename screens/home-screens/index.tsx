import React from "react";
import { NativeBaseProvider, Box, Text, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../../components/home-header";
import SearchBar from "../../components/search-bar";
import Location from "../../components/location";
import Slides from "../../components/slide";
import Categories from "../../components/categories";
import { ScrollView } from "react-native";
import Recommendation from "../../components/recommendation";
import ExploreService from "../../components/explore-services";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Box bg="#fff" height={"full"} mt={5} px={5}>
      <HomeHeader />
      <Box mt="5">
        <SearchBar />
        <Location />
      </Box>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <Box flex={1} >
        <Slides />
        <Categories />
        <Recommendation />
        <ExploreService />
        </Box>
      </ScrollView>
    </Box>
  );
}
