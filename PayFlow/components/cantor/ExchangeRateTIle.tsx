import { Image, Text, TouchableOpacity, View } from "react-native";
import Intensive from "../../assets/imgs/debit-card.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import React from "react";
import navigation from "../../router/Navigation.tsx";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../types/types.ts";

export const ExchangeRateTile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigator>>();
  const handlePress = () => {
    navigation.navigate('Graphs');
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="w-full h-auto mt-5 bg-primary border-quaternary border-2 p-2" >
        <View className="flex-row justify-center">
          <Text className="text-xl text-black font-bold  ">Check the latest rates</Text>
        </View>
        <View className="flex-row mt-2 items-center">
          <MaterialCommunityIcons name={'square-medium'} size={20} color={"#000"}></MaterialCommunityIcons>
          <Fontisto name={'dollar'} size={18} color={'#000'}/>
          <Text className="text-quaternary font-bold text-sm">USD</Text>
        </View>
        <View className="flex-row items-center">
          <MaterialCommunityIcons name={'square-medium'} size={20} color={"#000"}></MaterialCommunityIcons>
          <Fontisto name={'euro'} size={15} color={'#000'}/>
          <Text className="text-quaternary font-bold text-sm">EUR</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
