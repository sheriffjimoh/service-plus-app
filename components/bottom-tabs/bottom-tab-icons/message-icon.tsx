import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function MessageIcon({ size, isFocused}: any) {
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
          d="M10 8.16667V7.75M13.3333 8.16667V7.75M6.66667 8.16667V7.75M2.88667 13.0233C1.66667 12.0475 1.66667 11.3092 1.66667 8.16667C1.66667 5.02417 1.66667 3.4525 2.88667 2.47667C4.10833 1.5 6.07167 1.5 10 1.5C13.9283 1.5 15.8925 1.5 17.1125 2.47667C18.3333 3.4525 18.3333 5.02417 18.3333 8.16667C18.3333 11.3092 18.3333 12.0475 17.1125 13.0233C15.8933 14 13.9283 14 10 14C7.90833 14 6.83333 15.4483 5 16.5V13.8233C4.08833 13.6875 3.4175 13.4483 2.88667 13.0233Z"
          stroke="#545454"
          stroke-width="1.5"
          stroke-linecap="round"
         
          fill={!isFocused ? "none" : "black"}
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}
