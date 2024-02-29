/* eslint-disable */
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AccountInterface } from "../common/types.ts";
import AntDesign from "react-native-vector-icons/AntDesign";

export const NewAccount = () => {
  return (
  <TouchableOpacity className="w-full h-auto">
    <View className="flex w-full p-4 bg-primary mt-1">
      <View className="flex-row">
        <View className="h-full">
          <AntDesign name="pluscircleo" size={40} color={"#6b43be"}/>
        </View>
        <View className="flex-1 flex-col">
          <Text className="text-xl font-bold ml-3 text-black">Need a new account?</Text>
          <Text className="text-xs ml-3">Click and open now!</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  )
}
