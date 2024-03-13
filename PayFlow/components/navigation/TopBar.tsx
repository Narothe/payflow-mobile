/* eslint-disable */
import { Image, TouchableOpacity, View } from "react-native";
// @ts-ignore
import Logo from "../../assets/logo/payflow.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../types/types.ts";


const TopBar = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigator>>();


  return(
    <View className="flex justify-between flex-row p-3 bg-secondary items-center">
      <View className="flex w-2/6 h-7">
        <Image source={Logo} className={"w-full h-full"} />
      </View>
      <View>
        <TouchableOpacity
          className={'items-center'}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name={'settings-outline'} size={24} color={"#6b43be"} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default TopBar
