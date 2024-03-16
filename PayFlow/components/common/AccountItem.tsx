/* eslint-disable */

import { Text, TouchableOpacity, View } from "react-native";
import { AccountInterface } from "./types.ts";
import React from "react";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { formatMoney, truncateNumber } from "../../utils/formatNumbers.ts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../types/types.ts";

interface AccountTileProps {
  account: AccountInterface;
}
const AccountItem: React.FC<AccountTileProps> = ({ account}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigator>>();
  const handlePress = () => {
    navigation.navigate('AccountDetails', {id: account.id});
  };

  return(
    <TouchableOpacity
      className={'bg-primary rounded-lg py-3 px-3 mx-3 w-[350px]'}
      onPress={handlePress}
    >
      <View className={'flex-row justify-between items-center'}>
        <View className={'flex-row'}>
          <Text className={' text-quaternary font-medium mr-1 text-base'}>{account.currency}</Text>
          <Text className={' text-quinary font-medium text-base'}>{truncateNumber(account.number)}</Text>
        </View>
        <Ionicons name={'piggy-bank-outline'} size={30} color={"#141414"} />
      </View>
      <View className={'flex-row justify-between'}>
        <View>
          <Text className={' text-quinary font-medium text-base capitalize'}>Type:</Text>
          <Text className={' text-quaternary font-medium mr-1 text-base'}>{account.accountNumberType}</Text>
        </View>
        <View className={'flex-1 items-end'}>
          <Text className={'text-quaternary font-medium text-base capitalize'}>balance:</Text>
          <Text className={'text-quinary font-medium text-base'}>{formatMoney(account.balance)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default AccountItem
