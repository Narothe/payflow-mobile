/* eslint-disable */
import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { getDataFromToken } from "../../../config/authconfig.ts";
import { getUserAccounts } from "../../../api/services/Account.ts";
import { AccountsList } from "../../account/AccountList.tsx";

export default function Accounts(): React.JSX.Element {
  const [accounts, setAccounts] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData(): Promise<void> {
    try {
      const user = await getDataFromToken();
      const response = await getUserAccounts(user);
      setAccounts(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
    <View className="flex-1 bg-secondary">
      <AccountsList accounts={accounts}/>
    </View>
    </ScrollView>
  );
}
