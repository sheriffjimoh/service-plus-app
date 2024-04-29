import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./route";

import { StateProvider } from "./context/StateContext";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StateProvider>
          <MainStack />
        </StateProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
