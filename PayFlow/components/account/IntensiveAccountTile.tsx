/* eslint-disable */
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import Intensive from '../../assets/imgs/debit-card.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const IntensiveAccount = () => {
  return (
    <View className="w-5/6 h-auto mt-5 bg-primary border-quaternary border-2 p-3">
      <View className="flex flex-row justify-between">
        <Text className="text-xl text-black font-bold mt-2 ">Intensive Account</Text>
        <Image className="w-10 h-10" source={Intensive}></Image>
      </View>
      <View className="flex-row mt-2 ">
        <MaterialCommunityIcons name={'square-medium'} size={20} color={"#000"}></MaterialCommunityIcons>
        <Text className="text-quinary">High-interest savings account.</Text>
      </View>
      <View className="flex-row">
        <MaterialCommunityIcons name={'square-medium'} size={20} color={"#000"}></MaterialCommunityIcons>
        <Text className="text-quinary">Wealth management services.</Text>
      </View>
      <View className="flex-row">
        <MaterialCommunityIcons name={'square-medium'} size={20} color={"#000"}></MaterialCommunityIcons>
        <Text className="text-quinary">VIP treatment and exclusive events.</Text>
      </View>
    </View>
  )
}
