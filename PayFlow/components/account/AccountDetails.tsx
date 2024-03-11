/* eslint-disable */
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import TextLabel from "../common/TextLabel.tsx";
import BalanceLabel from "../common/BalanceLabel.tsx";
import { getAccountDetails } from "../../api/services/Account.ts";
import { StackNavigator, User } from "../../types/types.ts";
import { formatCardNumber, truncateNumber } from "../../utils/formatNumbers.ts";
import { CreditCard } from "../card/CreditCard.tsx";
import { getDataFromToken } from "../../config/authconfig.ts";
import { getCardByAccountNumber } from "../../api/services/Card.ts";
import Card from "../card/Card.tsx";
export const AccountDetails = () => {
  const [accountId, setAccountId] = useState()
  const [balance, setBalance] = useState(0)
  const [currency, setCurrency] = useState('')
  const [type, setType] = useState('')
  const [owner, setOwner] = useState('')
  const [accountNumber, setNumber] = useState('')
  const navigation = useNavigation();
  type AccountDetailsRouteProp = RouteProp<StackNavigator, 'AccountDetails'>;

  const route = useRoute<AccountDetailsRouteProp>();
  const { id } = route.params;


  useEffect((): void => {
    (async () => {
      try {
        const user: User = await getDataFromToken();
        setOwner(user.name)
        const res = await getAccountDetails(id);
        if (res) {
          console.log(id)
          setAccountId(id)
          setType(res.data.accountNumberType);
          setBalance(res.data.balance);
          setCurrency(res.data.currency);
          setNumber(res.data.number);
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    })();
  }, []);

  return (
    <View className={'flex-1'}>
      <View className="flex-row bg-secondary h-auto p-3 items-center">
        <AntDesign name="arrowleft" size={25} color="black" onPress={navigation.goBack}/>
        <View className="w-full items-center">
          <Text className="font-bold text-xl text-quaternary mr-10">Account Details</Text>
        </View>
      </View>
      <ScrollView>
        <View className="items-center">
          <View className="w-11/12 border-b-2 border-quaternary mb-2">
            <BalanceLabel balance={balance} currency={currency}/>
          </View>
          <TextLabel label={"Type"} text={type}/>
          <TextLabel label={"Number"} text={formatCardNumber(accountNumber)}/>
          <TextLabel label={"Iban Number"} text={'PL '+formatCardNumber(accountNumber)}/>
          <TextLabel label={"Owner"} text={owner}/>
          <TextLabel label={"Currency"} text={currency}/>
          <View className="w-11/12 border-b-2 border-quaternary "/>
        </View>
        <View className={'ml-6 mt-1'}>
          <Text className={'text-quinary mb-1'}>Account card</Text>
          {accountId && <Card accountId={accountId} />}
        </View>
          <View className="items-center">
        </View>
      </ScrollView>
    </View>
  );
};
