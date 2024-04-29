import 'react-native-gesture-handler' 
import React from 'react';
import { NativeBaseProvider, Box, Text } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './route';
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
         <MainStack />
      </NavigationContainer>
  </NativeBaseProvider>
  );
}


