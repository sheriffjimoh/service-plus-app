import React from "react";
import { Box, Text, Stack, Button } from "native-base";
import { Image } from "react-native";
import BellIcon from "./icons/bell-icon";
import BookmarkIcon from "./icons/bookmark-icon";
import { useNavigation } from "@react-navigation/native";

export default function HomeHeader() {

    const navigation = useNavigation();
  return (
    <Box
      mt={10}
      flexDirection="row"
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Stack space={2} direction="row" alignItems="c">
        <Box justifyContent="center" alignItems={"center"} height={"10"}>
          <Image
            source={require("../assets/profile.jpeg")}
            alt="profile"
            style={{ width: 42, height: 42 }}
          />
        </Box>
        <Box>
          <Text fontSize="sm">Good Morning 👋🏿</Text>
          <Text fontSize="lg" fontWeight="400">
            Chaitanya Goyal
          </Text>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent={'center'} alignItems={'center'} space={3}>
        <BellIcon size={24} />

        <Button bg={'white'} variant="unstyled" onPress={() => navigation.navigate("Bookmarks")}> 
          <BookmarkIcon size={24} />
        </Button>
      </Stack>
    </Box>
  );
}
