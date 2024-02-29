/* eslint-disable */
import React from "react";
import { View } from "react-native";
import { AccountsList } from "../../account/AccountList.tsx";
import { AccountInterface, AccountNumberType, Currency } from "../../common/types.ts";

const accounts: AccountInterface[] = [
  {
    id: 1,
    number: '23452345234523452345234567',
    currency: Currency.USD,
    balance: 1000.45,
    type: AccountNumberType.INTENSIVE,
  },
  {
    id: 2,
    number: '0987654321',
    currency: Currency.EUR,
    balance: 500,
    type: AccountNumberType.STANDARD,
  },
  // {
  //   id: 3,
  //   number: '9876543210',
  //   currency: Currency.PLN,
  //   balance: 750,
  //   type: AccountNumberType.INTENSIVE,
  // },
];

export default function(): React.JSX.Element {
  return (
    <View className="flex-1">
        <AccountsList accounts={accounts}/>
    </View>
  );
}
