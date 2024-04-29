import React from "react";
import { Box, Text } from "native-base";
import SectionHeader from "./section-header";
import { Pressable } from "react-native";
import { categoriesData } from "../utils";

export default function Categories() {
  const Category = ({ title, icon }: any) => {
    return (
      <Pressable style={{ margin: 5, marginTop: 10 }}>
        <Box
          bg="#000000"
          borderRadius="full"
          width={12}
          height={12}
          justifyContent="center"
          alignItems="center"
          marginBottom={3}
        >
          {icon}
        </Box>
        <Text textAlign="center">{title}</Text>
      </Pressable>
    );
  };

  return (
    <Box mt="5">
      <SectionHeader title="Categories" />
      <Box
        mt="3"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {categoriesData.map((item, index) => (
          <Category key={index} title={item.title} icon={item.icon} />
        ))}
      </Box>
    </Box>
  );
}
