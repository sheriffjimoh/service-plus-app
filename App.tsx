import React from 'react';
import { NativeBaseProvider, Box, Text } from "native-base";
import BottomTabs from './components/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
         <BottomTabs />
      </NavigationContainer>
  </NativeBaseProvider>
  );
}


