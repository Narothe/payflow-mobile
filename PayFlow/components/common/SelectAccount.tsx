/* eslint-disable */

import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  checked: boolean
  setCurrency?: (currency: string) => void
}

const SelectAccount:React.FC<Props> = ({title, checked, setCurrency}) => {

  return(
    <TouchableOpacity
      className={`w-1/5 border-[1px] border-quaternary py-1 px-2 rounded-3xl mx-2 ${checked && ' bg-quaternary'} `}
      onPress={() => setCurrency && setCurrency(title) }
    >
      <Text className={`text-center font-medium ${checked && 'text-primary'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
export default SelectAccount
