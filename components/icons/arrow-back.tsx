import React from "react";
import { Svg, Path } from "react-native-svg";

export default function ArrowBack({ size }: any) {
  return (
    <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    strokeMiterlimit={2}
  >
      <Path
        d="M1 7L7 13M1 7L7 1M1 7L11.5 7M17 7L14.5 7"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
