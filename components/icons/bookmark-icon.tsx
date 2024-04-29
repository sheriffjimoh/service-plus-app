import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BookmarkIcon({ size, isFocused }: any) {

  // console.log("isFocused", isFocused);
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
          d="M3 11.098V16.091C3 19.187 3 20.736 3.734 21.412C4.084 21.735 4.526 21.938 4.997 21.992C5.984 22.105 7.137 21.085 9.442 19.046C10.462 18.145 10.971 17.694 11.56 17.576C11.85 17.516 12.15 17.516 12.44 17.576C13.03 17.694 13.539 18.145 14.558 19.046C16.863 21.085 18.016 22.105 19.003 21.991C19.473 21.938 19.916 21.735 20.266 21.412C21 20.736 21 19.188 21 16.091V11.097C21 6.809 21 4.665 19.682 3.332C18.364 2 16.242 2 12 2C7.757 2 5.636 2 4.318 3.332C3.511 4.148 3.198 5.27 3.077 7M15 6H9"
          stroke="#545454" 
          stroke-width="1.5"
          stroke-linecap="round"
          fill={isFocused ? "black" : "none"}
        />
      </Svg>
    </View>
  );
}
