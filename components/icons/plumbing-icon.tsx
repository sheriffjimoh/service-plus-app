import React from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

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
        <G clip-path="url(#clip0_1_189)">
          <Path
            d="M23.3291 1.49067H23.0061V0.372656C23.0061 0.166828 22.8393 0 22.6335 0H19.7515C19.5456 0 19.3789 0.166875 19.3789 0.372656V1.49067H18.9565C18.7506 1.49067 18.5839 1.65755 18.5839 1.86333V3.05588C18.5839 3.2617 18.7507 3.42853 18.9565 3.42853H19.3789V4.54655C19.3789 4.75238 19.5457 4.9192 19.7515 4.9192C19.9574 4.9192 20.1242 4.75233 20.1242 4.54655V3.42858H22.2608V8.81986C22.2608 11.0803 20.4218 12.9192 18.1615 12.9192H15.354V10.6832H18.2608C19.2883 10.6832 20.1242 9.84731 20.1242 8.81981V6.53409C20.1242 6.32827 19.9574 6.16144 19.7516 6.16144C19.5457 6.16144 19.3789 6.32831 19.3789 6.53409V8.81981C19.3789 9.43631 18.8773 9.93783 18.2609 9.93783H15.3541V9.41611C15.3541 9.21028 15.1872 9.04345 14.9814 9.04345H13.7889C13.583 9.04345 13.4162 9.21033 13.4162 9.41611V9.93783H12.5713V7.3043H12.9712C13.1339 7.87711 13.6614 8.29809 14.2856 8.29809C15.039 8.29809 15.6521 7.68511 15.6521 6.93164C15.6521 6.17817 15.039 5.56519 14.2856 5.56519C13.6614 5.56519 13.1339 5.98617 12.9712 6.55899H11.4261C11.2634 5.98617 10.7359 5.56519 10.1117 5.56519C9.35829 5.56519 8.74526 6.17817 8.74526 6.93164C8.74526 7.68511 9.35829 8.29809 10.1117 8.29809C10.7359 8.29809 11.2634 7.87711 11.4261 7.3043H11.826V9.93783H10.9812V9.41611C10.9812 9.21028 10.8144 9.04345 10.6086 9.04345H9.41604C9.21017 9.04345 9.04338 9.21033 9.04338 9.41611V9.93783H5.93777C3.26637 9.93783 1.09306 12.1111 1.09306 14.7825V16.472C1.09306 16.6778 1.25988 16.8446 1.46571 16.8446C1.67159 16.8446 1.83837 16.6778 1.83837 16.472V14.7825C1.83837 12.5221 3.67737 10.6832 5.93773 10.6832H9.04334V12.9192H5.83835C4.81085 12.9192 3.97498 13.7551 3.97498 14.7826V20.472H1.83846V18.4596C1.83846 18.2538 1.67163 18.087 1.46581 18.087C1.25993 18.087 1.09315 18.2538 1.09315 18.4596V20.472H0.670805C0.46493 20.472 0.298149 20.6389 0.298149 20.8447V22.0373C0.298149 22.2431 0.464977 22.4099 0.670805 22.4099H1.09315V23.5279C1.09315 23.7338 1.25998 23.9006 1.46581 23.9006H4.34777C4.55365 23.9006 4.72043 23.7337 4.72043 23.5279V22.4099H5.0434C5.24927 22.4099 5.41606 22.243 5.41606 22.0373V20.8447C5.41606 20.6389 5.24923 20.472 5.0434 20.472H4.72043V14.7826C4.72043 14.1661 5.22199 13.6646 5.83845 13.6646H9.04343V14.1863C9.04343 14.3921 9.21026 14.559 9.41609 14.559H10.6086C10.8145 14.559 10.9813 14.3921 10.9813 14.1863V13.6646H13.4161V14.1863C13.4161 14.3921 13.5829 14.559 13.7887 14.559H14.9813C15.1871 14.559 15.3539 14.3921 15.3539 14.1863V13.6646H18.1614C20.8328 13.6646 23.0061 11.4913 23.0061 8.81986V3.42858H23.3291C23.5349 3.42858 23.7017 3.2617 23.7017 3.05592V1.86338C23.7018 1.65755 23.535 1.49067 23.3291 1.49067ZM14.2856 6.31055C14.6282 6.31055 14.9068 6.58917 14.9068 6.93169C14.9068 7.2742 14.6282 7.55278 14.2856 7.55278C13.9431 7.55278 13.6646 7.27416 13.6646 6.93169C13.6646 6.58922 13.9431 6.31055 14.2856 6.31055ZM10.1117 7.55278C9.7692 7.55278 9.49057 7.27416 9.49057 6.93169C9.49057 6.58922 9.7692 6.31055 10.1117 6.31055C10.4542 6.31055 10.7328 6.58917 10.7328 6.93169C10.7328 7.2742 10.4542 7.55278 10.1117 7.55278ZM3.97507 23.1553H1.83846V22.4099H3.97512L3.97507 23.1553ZM4.67074 21.6646H1.04341V21.2174H4.67074V21.6646ZM10.236 13.8137H9.78879V9.78886H10.236V13.8137ZM13.4161 12.9193H10.9813V10.6832H13.4161V12.9193ZM14.6086 13.8137H14.1614V9.78886H14.6086V13.8137ZM20.1242 0.745359H22.2608V1.49072H20.1242V0.745359ZM22.9564 2.68322H19.3291V2.23603H22.9564V2.68322Z"
            fill="white"
          />
          <Path
            d="M14.1392 17.4761C14.035 17.2986 13.8067 17.2391 13.6292 17.3432C13.4517 17.4474 13.3922 17.6757 13.4963 17.8532C14.5507 19.6504 14.7081 20.4367 14.7081 20.7453C14.7081 22.129 13.5824 23.2546 12.1988 23.2546C10.8151 23.2546 9.68947 22.129 9.68947 20.7453C9.68947 19.6736 11.2925 17.1351 12.1979 15.8268C12.3303 16.0185 12.4976 16.2651 12.6822 16.5466C12.7951 16.7187 13.0262 16.7667 13.1982 16.6538C13.3704 16.541 13.4184 16.3099 13.3055 16.1378C12.8552 15.4512 12.5147 14.981 12.5004 14.9613C12.3541 14.7595 12.0434 14.7595 11.897 14.9613C11.5948 15.378 8.94411 19.0808 8.94411 20.7453C8.94411 22.54 10.4041 24 12.1988 24C13.9934 24 15.4535 22.54 15.4535 20.7453C15.4535 20.0529 15.0236 18.9835 14.1392 17.4761Z"
            fill="white"
          />
          <Path
            d="M13.1105 18.0796C13.0063 17.902 12.7781 17.8426 12.6005 17.9467C12.423 18.0508 12.3635 18.2792 12.4676 18.4567C13.4784 20.1797 13.5145 20.7274 13.5154 20.7453C13.5154 21.4713 12.9247 22.062 12.1987 22.062C11.9928 22.062 11.826 22.2289 11.826 22.4347C11.826 22.6405 11.9928 22.8073 12.1987 22.8073C13.3357 22.8073 14.2608 21.8823 14.2608 20.7452C14.2608 20.5799 14.1779 19.8989 13.1105 18.0796Z"
            fill="white"
          />
        </G>
        

      </Svg>
    </View>
  );
}
