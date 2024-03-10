/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import TextLabel from "../common/TextLabel.tsx";
import BalanceLabel from "../common/BalanceLabel.tsx";
import { getAccountDetails } from "../../api/services/Account.ts";
import { StackNavigator } from "../../types/types.ts";
import { formatAccountNumber } from "../../utils/formatAccountNumber.ts";
export const AccountDetails = () => {
  const [balance, setBalance] = useState(0)
  const [currency, setCurrency] = useState('')
  const [type, setType] = useState('')
  const [accountNumber, setNumber] = useState('')
  const navigation = useNavigation();
  type AccountDetailsRouteProp = RouteProp<StackNavigator, 'AccountDetails'>;

  const route = useRoute<AccountDetailsRouteProp>();
  const { id } = route.params;

  useEffect((): void => {
    getAccountDetails(id).then(res => {
      if(res) {
        setType(res.data.accountNumberType);
        setBalance(res.data.balance);
        setCurrency(res.data.currency);
        setNumber(res.data.number);
      }
    })
  }, []);

  return (
    <View>
      <View className="flex-row bg-secondary h-auto p-3 items-center">
        <AntDesign name="arrowleft" size={25} color="black" onPress={navigation.goBack}/>
        <View className="w-full items-center">
          <Text className="font-bold text-xl text-quaternary mr-10">Account Details</Text>
        </View>
      </View>
      <View className="items-center">
        <View className="w-11/12 border-b-2 border-quaternary">
          <BalanceLabel balance={balance} currency={currency}/>
        </View>
        <TextLabel label={"Type"} text={type}/>
        <TextLabel label={"Number"} text={formatAccountNumber(accountNumber)}/>
        <TextLabel label={"Currency"} text={currency}/>
      </View>
    </View>
  );
};
