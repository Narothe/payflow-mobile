import React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"


interface BalanceLabelProps {
  balance: number,
  currency: string;
}

const BalanceLabel: React.FC<BalanceLabelProps> = ({  balance,currency }) => {
  return (
    <View className="w-5/6 p-3">
      <Text className="text-sm text-gray-800">Available funds</Text>
      <Text className="text-3xl text-quaternary">
        {balance.toFixed(2) + ' ' + currency}
      </Text>
      <View className="flex-row">
        <Text className="text-quinary text-base">
          Balance: {balance.toFixed(2) + ' ' + currency}
        </Text>
      </View>
    </View>
  );
};
export default BalanceLabel;
