import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BookingIcon({ size, isFocused }: any) {
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
          d="M2.5 11.6666V8.33329C2.5 5.19079 2.5 3.61913 3.47667 2.64329C4.4525 1.66663 6.02417 1.66663 9.16667 1.66663H10.8333C13.9758 1.66663 15.5475 1.66663 16.5233 2.64329C17.0683 3.18746 17.3092 3.91663 17.415 4.99996M17.5 8.33329V11.6666C17.5 14.8091 17.5 16.3808 16.5233 17.3566C15.5475 18.3333 13.9758 18.3333 10.8333 18.3333H9.16667C6.02417 18.3333 4.4525 18.3333 3.47667 17.3566C2.93167 16.8125 2.69083 16.0833 2.585 15M6.66667 11.6666H10.8333M6.66667 8.33329H7.5M13.3333 8.33329H10"
          stroke="#545454"
          stroke-width="1.5"
          stroke-linecap="round"
          fill={!isFocused ? "none" : "black"}
        />
      </Svg>
    </View>
  );
}
