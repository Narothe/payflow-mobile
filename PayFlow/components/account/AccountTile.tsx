/* eslint-disable */
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AccountInterface } from "../common/types.ts";
import Entypo from 'react-native-vector-icons/Entypo';
import { truncateNumber } from "../../utils/formatNumbers.ts";
import navigation from "../../router/Navigation.tsx";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../types/types.ts";
interface AccountTileProps {
  account: AccountInterface;
}
export const AccountTile: React.FC<AccountTileProps> = ({ account}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigator>>();
  const handlePress = () => {
    navigation.navigate('AccountDetails', {id: account.id});
  };

  return (
    <TouchableOpacity className="w-11/12 h-auto" onPress={handlePress}>
      <View className="flex p-4 bg-primary mt-2 rounded-2xl">
        <View className="flex-row">
          <View className="h-full">
            <Entypo name="wallet" size={40} color={"#000"}/>
          </View>
          <View className="flex-1 flex-col">
            <View className="flex-row justify-between ml-2">
              <Text className="font-bold text-lg text-quaternary">{account.currency}</Text>
              <Text className="text-xl font-bold text-black">{account.balance.toFixed(2)}</Text>
            </View>
            <Text className="text-sm ml-2 text-quinary">{truncateNumber(account.number)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
