/* eslint-disable */
import { Image, Text } from "react-native";
import { View } from "react-native";
import ServiceSelect from "../../../common/ServiceSelect.tsx";
import blik from '../../../../assets/icons/blik.png'
import Ionicons from "react-native-vector-icons/FontAwesome5";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const QuickSwitch = () => {


  return(
    <View className={'bg-primary w-11/12 mx-5 h-auto rounded pb-10'}>
      <Text className={'text-lg font-medium text-quinary m-3 '}>Quick start</Text>
      <View className={' flex-row items-center flex-wrap '}>
        <ServiceSelect title={"profile"} logo={<Ionicons name={'user-circle'} size={30} color={"#000"} />} nav={"Settings"}/>
        <ServiceSelect title={"blik"} logo={<Image source={blik}  className={'w-16 h-8'} />} nav={"Blik"}/>
        <ServiceSelect title={"transfer"} logo={<Material name={'cellphone-check'} size={30} color={"#000"} />} nav={"PhoneTransfer"}/>
        <ServiceSelect title={"lastest"} logo={<Material name={'history'} size={30} color={"#000"} />} nav={"History"}/>
        <ServiceSelect title={"exchange"} logo={<Material name={'currency-eur'} size={30} color={"#000"} />} nav={"Settings"}/>
        <ServiceSelect title={"add account"} logo={<Material name={'plus'} size={30} color={"#000"} />} nav={"Settings"}/>
      </View>
    </View>
  )
}

export default QuickSwitch
