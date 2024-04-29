import { Button, Stack, Text } from "native-base";
import React from "react";
import ArrowBack from "./icons/arrow-back";
import MoreIcon from "./icons/more-icon";
import { useNavigation } from "@react-navigation/native";

export default function ScreenHeader({ title }: any) {
  const navigation = useNavigation();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      my="10"
    >
      <Button
        justifyContent="center"
        alignItems="center"
        bg="black"
        variant="primary"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ArrowBack size={20} />
      </Button>

      <Text fontSize={18} fontWeight={400}> 
        {title}
      </Text>

      <Button
        justifyContent="center"
        borderWidth={1}
        borderRadius={8}
        alignItems="center"
        bg="white"
        variant="primary"
        onPress={() => {
          console.info("View More");
        }}
      >
        <MoreIcon size={24} />
      </Button>
    </Stack>
  );
}
