import React from 'react';
import {VStack, Icon, Input, Box } from 'native-base';
import SearchIcon from './icons/search-icon';
import FilterIcon from './icons/filter-icon';

export default function SearchBar() {
    return (
         <VStack w="100%" space={5} alignSelf="center">
            <Input
  placeholder="Search..."
  width="100%"
  borderWidth={0}
  height="50"
  bg="#F5F5F5"
  justifyContent="center"
  alignItems="center"
  borderRadius="4"
  py="3"
  fontSize="14"
  InputLeftElement={
    <Box  pl="5" pb="4"   > {/* Added padding to the left icon */}
      <Icon size="6" color="gray.400" as={<SearchIcon size={24} />} />
    </Box>
  }
  InputRightElement={
    <Box pr="5" pb="5"> {/* Added padding to the right icon */}
      <Icon size="6" color="gray.400" as={<FilterIcon size={24} />} />
    </Box>
  }
/>

        </VStack>);
  }
  
 