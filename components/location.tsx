import { Box, Text, Button } from "native-base";
import React from "react";
import LocationIcon from "./icons/location-icon";
import LocationPickerIcon from "./icons/location-picker-icon";
import { Pressable } from "react-native";

export default function Location() {
  return (
    <Box flexDirection="row" justifyContent="space-between" mt="4">
      <Box flexDirection="row" justifyContent="center" alignItems="center" bg="#F5F5F5" p="3" borderRadius={"lg"}>
         <LocationIcon size={24} />
          <Text fontSize="14" fontWeight="400">
            267 New AVenue Park Indore In...
          </Text>
      </Box>
        <Button onPress={() => console.log("Pressed")} bg="#F5F5F5">
         <LocationPickerIcon size={24} />
        </Button>
    </Box>
  );
}
