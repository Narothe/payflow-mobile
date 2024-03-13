/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../../../types/types.ts";

type Props = {
  title: string,
  logo: Element,
  nav: string,
  hasBg?: boolean
}

const ServiceItem:React.FC<Props> = ({ title, nav, logo, hasBg= true}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigator>>()

  return(
    <TouchableOpacity
      className={'h-auto w-24 m-3 items-center'}
      onPress={() => navigation.navigate(nav)}
    >
      <View className={`rounded-full mb-1 ${hasBg && 'bg-quaternary p-2'}`}>{logo}</View>
      <Text className={'font-semibold text-quinary text-sm text-center capitalize'}>{title}</Text>
    </TouchableOpacity>
  )
}
export default ServiceItem
