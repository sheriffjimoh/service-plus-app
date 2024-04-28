import React from 'react';
import { NativeBaseProvider, Box, Text, Button } from "native-base";
import { useNavigation } from '@react-navigation/native';

export default function BookmarkScreen() {
  const navigation = useNavigation();

  return (
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Bookmark Screen</Text>
        {/* <Button onPress={() => navigation.navigate('SecondScreen')}>Go to Second Screen</Button> */}
      </Box>
  );
}