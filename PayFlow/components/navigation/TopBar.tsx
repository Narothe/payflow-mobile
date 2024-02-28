/* eslint-disable */
import { Image, View } from "react-native";
import Logo from "../../assets/logo/payflow.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

export const TopBar = () => (
  <View className="flex justify-between flex-row p-3 bg-secondary">
    <View className="flex w-2/6 h-7">
      <Image source={Logo} className={"w-full h-full"} />
    </View>
    <View>
      <Ionicons name={'settings'} size={30} color={"#000"} />
    </View>
  </View>
);
