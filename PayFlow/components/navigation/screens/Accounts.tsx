/* eslint-disable */
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { AccountsList } from "../../account/AccountList.tsx";
import { AccountInterface, AccountNumberType, Currency } from "../../common/types.ts";
import { getDataFromToken } from "../../../config/authconfig.ts";
import { getUserAccounts } from "../../../api/services/Account.ts";

export default function Accounts(): React.JSX.Element {
  const [accounts, setAccounts] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getDataFromToken();
        const response = await getUserAccounts(user);
        setAccounts(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <View className="flex-1 bg-secondary">
      <AccountsList accounts={accounts}/>
    </View>
  );
}
