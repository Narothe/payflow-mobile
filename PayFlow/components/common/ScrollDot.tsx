/* eslint-disable */

import { View } from "react-native";
import React from "react";

type Props = {
  filled: boolean
}

const ScrollDot:React.FC<Props> = ({ filled}) => {

  return(
    <View className={`h-3 w-3 mx-1 ${filled ? 'bg-tertiary' : 'bg-gray-300'} rounded-full`} />
  )
}
export default ScrollDot
