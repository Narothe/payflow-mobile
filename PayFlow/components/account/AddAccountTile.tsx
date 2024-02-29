/* eslint-disable */
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AccountInterface } from "../common/types.ts";
import AntDesign from "react-native-vector-icons/AntDesign";

export const NewAccount = () => {
  return (
  <TouchableOpacity className="w-11/12 h-auto">
    <View className="flex w-full p-4 bg-primary mt-2 rounded-2xl">
      <View className="flex-row items-center">
        <View className="flex items-center">
          <AntDesign name="pluscircleo" size={35} color={"#6b43be"}/>
        </View>
        <View className="flex-1 flex-col">
          <Text className="text-xl font-bold ml-3 text-quinary">Need a new account?</Text>
          <Text className="text-xs ml-3 text-quinary">Click and open now!</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  )
}
