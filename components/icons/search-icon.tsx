import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BookmarkIcon({ size }: any) {
  return (
    <View>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeLinejoin="round"
        strokeMiterlimit={2}
      >
        <Path
          d="M7.875 14.625C11.6029 14.625 14.625 11.6029 14.625 7.875C14.625 4.14708 11.6029 1.125 7.875 1.125C4.14708 1.125 1.125 4.14708 1.125 7.875C1.125 11.6029 4.14708 14.625 7.875 14.625Z"
          stroke="#545454"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <Path
          d="M12.9375 12.9375L16.875 16.875"
          stroke="#545454"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </Svg>
    </View>
  );
}
