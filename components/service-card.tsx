import React from "react";
import { Image, Pressable } from "react-native";
import { Box, Text, Stack } from "native-base";
import StarIcon from "./icons/star-icon";
import BookmarkIcon from "./icons/bookmark-icon";

import { useStateContext } from '../context/StateContext';
type CustomCardProps = {
  imageSource: string;
  cleanerName: string;
  service: string;
  price: number;
  rating: number;
  reviews: number;
};
const CustomCard = ({
  imageSource,
  cleanerName,
  service,
  price,
  rating,
  reviews,
}: CustomCardProps) => {

  const { serviceData, updateServiceData } = useStateContext();

  const data = {
    id:  Math.random().toString(36).substr(2, 9),
    imageSource,
    cleanerName,
    service,
    price,
    rating,
    reviews,
  }

  const isBookmarked = serviceData?.find((item: { cleanerName: string, service: string }) => item.cleanerName === data.cleanerName && item.service === data.service);
  const handleBookmarkClick = () => {
    updateServiceData(data);
  };

  return (
    <Box  shadow={0} borderRadius={16} backgroundColor="white" mx="1" padding={4}>
      <Stack direction="row" overflow="hidden">
        <Image
          source={{ uri: imageSource}}
          style={{ height: 120, width: 100, borderRadius: 8 }}
        />
        <Stack paddingLeft={4} space={2} >
          <Text color="gray.600" fontSize="12px">
            {cleanerName}
          </Text>
          <Text fontWeight={500} fontSize="16px">
            {service}
          </Text>
          <Text fontWeight={500} fontSize="16px">
            ₦{price}
          </Text>

          <Box flexDirection="row" alignItems="center">
            <Box justifyContent="center" mt={2} alignItems="center">
              <StarIcon size={20} />
            </Box>
            <Text fontSize={10} fontWeight={400}>
              {rating}
            </Text>
            <Text fontSize={10} fontWeight={400}>
              {" "}
              | {reviews} Reviews
            </Text>
          </Box>
        </Stack>
        <Box flexDirection="row" justifyContent="flex-end" width={16}>
            <Pressable onPress={()=> handleBookmarkClick()}><BookmarkIcon size={24} isFocused={isBookmarked ? true : false} /></Pressable>
            
        </Box>
      </Stack>
    </Box>
  );
};

export default CustomCard;
