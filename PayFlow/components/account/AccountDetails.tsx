/* eslint-disable */
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import TextLabel from "../common/TextLabel.tsx";
import BalanceLabel from "../common/BalanceLabel.tsx";
import { getAccountDetails } from "../../api/services/Account.ts";
import { StackNavigator, User } from "../../types/types.ts";
import { formatNumbers, truncateNumber } from "../../utils/formatNumbers.ts";
import { SmallCard } from "../card/SmallCard.tsx";
import { getDataFromToken } from "../../config/authconfig.ts";
import { getCardByAccountNumber } from "../../api/services/Card.ts";
export const AccountDetails = () => {
  const [balance, setBalance] = useState(0)
  const [currency, setCurrency] = useState('')
  const [type, setType] = useState('')
  const [owner, setOwner] = useState('')
  const [accountNumber, setNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const navigation = useNavigation();
  type AccountDetailsRouteProp = RouteProp<StackNavigator, 'AccountDetails'>;

  const route = useRoute<AccountDetailsRouteProp>();
  const { id } = route.params;


  useEffect(() => {
    (async () => {
      try {
        const user: User = await getDataFromToken();
        setOwner(user.name)
        const res = await getAccountDetails(id);
        if (res) {
          setType(res.data.accountNumberType);
          setBalance(res.data.balance);
          setCurrency(res.data.currency);
          setNumber(res.data.number);
          const card = await getCardByAccountNumber(res.data.id)
          if(card)
            setCardNumber(card.data.cardNumber)
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    })();
  }, []);

  return (
    <ScrollView>
      <View className="flex-row bg-secondary h-auto p-3 items-center">
        <AntDesign name="arrowleft" size={25} color="black" onPress={navigation.goBack}/>
        <View className="w-full items-center">
          <Text className="font-bold text-xl text-quaternary mr-10">Account Details</Text>
        </View>
      </View>
      <View className="items-center">
        <View className="w-11/12 border-b-2 border-quaternary mb-2">
          <BalanceLabel balance={balance} currency={currency}/>
        </View>
      </View>
      <View className={'ml-6'}>
        <Text className={'text-quinary mb-2'}>Account cards</Text>
        <SmallCard cardNumber={truncateNumber(cardNumber)} />
      </View>
      <View className="items-center">
        <View className="w-11/12 border-b-2 border-quaternary mt-3"/>
        <TextLabel label={"Type"} text={type}/>
        <TextLabel label={"Number"} text={formatNumbers(accountNumber)}/>
        <TextLabel label={"Iban Number"} text={'PL '+formatNumbers(accountNumber)}/>
        <TextLabel label={"Account Owner"} text={owner}/>
        <TextLabel label={"Currency"} text={currency}/>
      </View>
    </ScrollView>
  );
};
