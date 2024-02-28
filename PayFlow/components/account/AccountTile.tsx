/* eslint-disable */
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AccountInterface } from "../common/types.ts";
interface AccountTileProps {
  account: AccountInterface;
  // onPress: () => void;
}
export const AccountTile: React.FC<AccountTileProps> = ({ account}) => {
  return (
    <TouchableOpacity className="w-full h-20 bg-secondary">
      <Text>{account.number}</Text>
      <Text>{account.balance}</Text>
    </TouchableOpacity>
  );
}
