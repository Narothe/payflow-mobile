/* eslint-disable */
import { Image, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import LogoImg from '../../assets/logo/payflow.png';
import React from "react";
interface cardProps {
  cardNumber: string;
}
export const SmallCard: React.FC<cardProps> = ({ cardNumber }) => {
  return (
    <View className="w-5/12 h-auto ">
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#899091', '#49c4f5']}
        className="rounded-xl h-20 p-2 justify-between"
      >
        <Image source={LogoImg} className="w-3/5 h-6"/>
        <View className="items-center">
          <Text className="text-white">{cardNumber}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
