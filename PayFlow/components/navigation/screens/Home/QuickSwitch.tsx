/* eslint-disable */
import { Image, Text } from "react-native";
import { View } from "react-native";
import ServiceSelect from "../../../common/ServiceSelect.tsx";
import blik from '../../../../assets/icons/blik.png'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../../../types/types.ts";
import Ionicons from "react-native-vector-icons/FontAwesome5";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const QuickSwitch = () => {


  return(
    <View className={'bg-primary w-11/12 mx-5 h-auto rounded pb-10'}>
      <Text className={'text-lg font-medium text-quinary m-3 '}>Quick start</Text>
      <View className={' flex-row items-center flex-wrap '}>
        <ServiceSelect title={"profile"} logo={<Ionicons name={'user-circle'} size={40} color={"#000"} />} nav={"Settings"}/>
        <ServiceSelect title={"blik"} logo={<Image source={blik}  className={'w-20 h-10'} />} nav={"Settings"}/>
        <ServiceSelect title={"transfer"} logo={<Material name={'cellphone-check'} size={40} color={"#000"} />} nav={"Settings"}/>
        <ServiceSelect title={"lastest"} logo={<Material name={'history'} size={40} color={"#000"} />} nav={"Settings"}/>
        <ServiceSelect title={"currency exchange"} logo={<Material name={'currency-eur'} size={40} color={"#000"} />} nav={"Settings"}/>
        <ServiceSelect title={"add account"} logo={<Material name={'plus'} size={40} color={"#000"} />} nav={"Settings"}/>
      </View>
    </View>
  )
}

export default QuickSwitch
