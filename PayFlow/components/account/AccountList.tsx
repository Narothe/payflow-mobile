/* eslint-disable */
import React, { useState } from "react";
import { View } from "react-native";
import { AccountTile } from "./AccountTile.tsx";
import { NewAccount } from "./AddAccountTile.tsx";
import { AccountInterface, AccountNumberType } from "../common/types.ts";
import { OpenAccountModal } from "./OpenAccountModal.tsx";
import { StandardAccount } from "./StandardAccountTile.tsx";
import { IntensiveAccount } from "./IntensiveAccountTile.tsx";
import { useNavigation } from "@react-navigation/native";

export const AccountsList: React.FC<{accounts: AccountInterface[]}> = ({ accounts}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
      <View className="flex items-center">
      {accounts.map((account, index) => (
        <AccountTile
          key={index}
          account={account}
        />
      ))}
      {accounts.length < 3 && (
        <NewAccount onPress={() => setIsModalOpen(true)} />
        )}
        <OpenAccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <StandardAccount/>
        <IntensiveAccount/>
      </View>
  );
};
