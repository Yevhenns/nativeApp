import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function SVGadd(props) {
  return (
    <Svg width="37" height="37" viewBox="0 0 37 37" {...props}>
      <Circle cx="18.4999" cy="18.5" r="12" fill="white" stroke="#FF6C00" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        transform="rotate(-45 18.4999 18.5)"
        d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
        fill="#FF6C00"
      />
    </Svg>
  );
}
