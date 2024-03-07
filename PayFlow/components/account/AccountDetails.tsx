/* eslint-disable */
import React, { useState } from "react";
import { Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import TextLabel from "../common/TextLabel.tsx";
import BalanceLabel from "../common/BalanceLabel.tsx";
export const AccountDetails = () => {
const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row bg-secondary h-auto p-3 items-center">
        <AntDesign name="arrowleft" size={25} color="black" onPress={navigation.goBack}/>
        <View className="w-full items-center">
          <Text className="font-bold text-xl text-quaternary mr-7">Account Details</Text>
        </View>
      </View>

      <View className="items-center">
        <View className="w-11/12 border-b-2 border-quaternary">
          <BalanceLabel balance={"343535.33"} currency={"PLN"}/>
        </View>
        <TextLabel label={"Type"} text={"34343432323232323232"}/>
        <TextLabel label={"Number"} text={"34343432323232435433"}/>
        <TextLabel label={"Currency"} text={"34343433435453434343"}/>
      </View>
    </View>
  );
};
