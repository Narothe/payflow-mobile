/* eslint-disable */
import React from "react";
import { ScrollView } from "react-native";
import { AccountTile } from "./AccountTile.tsx";
import { AccountInterface } from "../common/types.ts";

export const AccountsList: React.FC<{accounts: AccountInterface[]}> = ({ accounts }) => {
  return (
    <ScrollView >
      {accounts.map((account, index) => (
        <AccountTile
          key={index}
          account={account}
          // onPress={() => handleAccountPress(account.id)}
        />
      ))}
    </ScrollView>
  );
};