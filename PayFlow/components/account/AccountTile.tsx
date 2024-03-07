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
    <TouchableOpacity className="w-11/12 h-auto">
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
            <Text className="text-sm ml-2 text-quinary">{truncateAccountNumber(account.number)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
