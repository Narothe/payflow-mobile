/* eslint-disable */
import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigator } from "../../types/types.ts";


type Props = {
  title: string
  logo: Element
  nav: string
}

const ServiceSelect:React.FC<Props> = ({ title, logo, nav}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigator>>()

  return(
    <TouchableOpacity
      className={'h-14 w-24 mx-1 my-2 items-center'}
      onPress={() => navigation.navigate(nav)}
    >
      <View>{logo}</View>
      <Text className={'font-semibold text-quaternary text-sm text-center capitalize'}>{title}</Text>
    </TouchableOpacity>
  )
}
export default ServiceSelect
