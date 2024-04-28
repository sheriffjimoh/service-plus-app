import React from 'react';
import { NativeBaseProvider, Box, Text, Button } from "native-base";
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../components/home-header';
import SearchBar from '../../components/search-bar';
import Location from '../../components/location';
export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Box bg="#fff" height={'full'} mt={5} px={5} >
      <HomeHeader />
      <Box mt="5">
        <SearchBar />
        <Location />
      </Box>
     
 </Box>
  );
}