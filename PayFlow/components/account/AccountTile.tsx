/* eslint-disable */
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AccountInterface } from "../common/types.ts";
import Entypo from 'react-native-vector-icons/Entypo';
import { truncateAccountNumber } from "../../utils/formatAccountNumber.ts";
interface AccountTileProps {
  account: AccountInterface;
  // onPress: () => void;
}
export const AccountTile: React.FC<AccountTileProps> = ({ account}) => {
  return (
    <TouchableOpacity className="w-full h-auto">
      <View className="flex w-full p-4 bg-white border-b-2">
        <View className="flex-row">
          <View className="h-full">
            <Entypo name="wallet" size={40} color={"#1687A7"}/>
          </View>
          <View className="flex-1 flex-col">
            <View className="flex-row justify-between ml-2">
              <Text className="font-bold text-lg ">{account.currency}</Text>
              <Text className="text-xl font-bold text-black">{account.balance.toFixed(2)}</Text>
            </View>
            <Text className="text-sm ml-2">{truncateAccountNumber(account.number)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
