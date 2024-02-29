/* eslint-disable */
import { Image, TouchableOpacity, View } from "react-native";
// @ts-ignore
import Logo from "../../assets/logo/payflow.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const TopBar = () => {
  const navigation = useNavigation();
  return(
    <View className="flex justify-between flex-row p-3 bg-secondary">
      <View className="flex w-2/6 h-7">
        <Image source={Logo} className={"w-full h-full"} />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Ionicons name={'settings'} size={30} color={"#000"} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default TopBar;
