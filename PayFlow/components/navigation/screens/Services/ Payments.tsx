/* eslint-disable */
import React from "react";
import { View, Text, Image} from "react-native";
import ServiceItem from "./ServiceItem.tsx";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import blik from "../../../../assets/icons/BLIK_logo.png"
import Blik from "../../../common/Blik.tsx";
import History from "./History.tsx";
import Settings from "../../../settings/Settings.tsx";
import UpgradeAccount from "./UpgradeAccount.tsx";
export default function(): React.JSX.Element {
  return (
    <View className="flex-1 ">
      <Text className={'text-tertiary ml-3 my-2 font-medium'}>Transfers</Text>
      <View className={' justify-around flex-row flex-wrap h-auto w-full bg-primary border-[2px] border-gray-200 py-2'}>
        <ServiceItem title={"normal"} logo={<Material name={'transfer'} size={30} color={"#fff"} />} nav={Settings} />
        <ServiceItem title={"by phone"} logo={<Material name={'cellphone-check'} size={30} color={"#fff"} />} nav={Settings} />
        <ServiceItem title={"history"} logo={<Material name={'history'} size={30} color={"#fff"} />} nav={History} />
      </View>
      <Text className={'text-tertiary ml-3 my-2 font-medium'}>Others</Text>
      <View className={' justify-around flex-row flex-wrap w-full bg-primary border-[2px] border-gray-200 py-2'}>
        <ServiceItem title={"blik"} logo={<Image source={blik}  className={'w-12 h-12'} />} nav={Blik} hasBg={false} />
        <ServiceItem title={"credits"} logo={<Material name={'credit-card-edit-outline'} size={30} color={"#fff"} />} nav={Settings} />
        <ServiceItem title={"cantor"} logo={<MaterialIcons name={'currency-exchange'} size={30} color={"#fff"} />} nav={Settings} />
        <ServiceItem title={"graphs"} logo={<Entypo name={'bar-graph'} size={30} color={"#fff"} />} nav={Settings} />
        <ServiceItem title={"cards"} logo={<FontAwesome name={'credit-card'} size={30} color={"#fff"} />} nav={Settings} />
        <ServiceItem title={"account"} logo={<MaterialIcons name={'upgrade'} size={30} color={"#fff"} />} nav={UpgradeAccount} />
      </View>
    </View>
  );
}
