/* eslint-disable */
import React from "react";
import { ScrollView, View } from "react-native";
import { AccountTile } from "./AccountTile.tsx";
import { NewAccount } from "./AddAccountTile.tsx";
import { AccountInterface, AccountNumberType } from "../common/types.ts";
import { AccountType } from "./AccountTypeTile.tsx";
import { StandardAccount } from "./StandardAccountTile.tsx";
import { IntensiveAccount } from "./IntensiveAccountTile.tsx";

export const AccountsList: React.FC<{accounts: AccountInterface[]}> = ({ accounts }) => {
  return (
    <ScrollView>
      <View className="flex items-center">
      {accounts.map((account, index) => (
        <AccountTile
          key={index}
          account={account}
          // onPress={() => handleAccountPress(account.id)}
        />
      ))}
      {accounts.length < 3 && (
        <NewAccount/>
        )}

        <StandardAccount/>
        <IntensiveAccount/>
      </View>
    </ScrollView>
  );
};
