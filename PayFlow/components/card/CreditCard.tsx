/* eslint-disable */
import { Image, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import LogoImg from '../../assets/logo/payflow.png';
import chip from '../../assets/imgs/chip.png';
import React from "react";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { formatCardNumber, formatExpirationDate } from "../../utils/formatNumbers.ts";
interface cardProps {
  cardNumber: string;
  owner: string;
  currency: string;
  validDate: string;
  cvv: string;
  balance: number;
}
export const CreditCard: React.FC<cardProps> = ({ cardNumber, owner, currency, validDate, cvv, balance}) => {
  return (
    <View className="w-11/12 h-auto ">
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#899091', '#49c4f5']}
        className="rounded-xl h-40 p-2 "
      >
        <View className={'flex-row justify-between p-1'}>
          <Text className={'text-xl'}>{currency}</Text>
          <Text className={'text-xl'}>{balance.toFixed(2)}</Text>
        </View>
        <Image source={chip} className={'w-11 h-10'}/>
        <Text className={'mt-2 text-xl font-bold'}>{formatCardNumber(cardNumber)}</Text>
        <View className={'flex-row justify-between'}>
          <Text>{owner}</Text>
          <Text>{formatExpirationDate(validDate)}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
