import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function MessageIcon({ size }: any) {
  return (
    <View>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={2}
      >
        <Path
          d="M8.00001 8.33329C9.84095 8.33329 11.3333 6.84091 11.3333 4.99996C11.3333 3.15901 9.84095 1.66663 8.00001 1.66663C6.15906 1.66663 4.66667 3.15901 4.66667 4.99996C4.66667 6.84091 6.15906 8.33329 8.00001 8.33329Z"
          stroke="#545454"
          stroke-width="1.5"
          fill="none"
        />
        <Path
          d="M14.665 14.9999C14.6667 14.8633 14.6667 14.7241 14.6667 14.5833C14.6667 12.5124 11.6817 10.8333 8 10.8333C4.31834 10.8333 1.33334 12.5124 1.33334 14.5833C1.33334 16.6541 1.33334 18.3333 8 18.3333C9.85917 18.3333 11.2 18.2024 12.1667 17.9691"
          stroke="#545454"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
        />
      </Svg>
    </View>
  );
}
