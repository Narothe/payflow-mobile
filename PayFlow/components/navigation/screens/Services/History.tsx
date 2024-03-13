/* eslint-disable */

import { View } from "react-native";
import GoBack from "../../../common/GoBack.tsx";
import React, { useEffect, useState } from "react";
import { getUserAccounts } from "../../../../api/services/Account.ts";
import { UserAccounts } from "../../../../types/types.ts";
import SelectAccount from "../../../common/SelectAccount.tsx";
import { Currency } from "../../../common/types.ts";


const History = () => {
  const [accounts, setAccounts] = useState<UserAccounts[]>([]);
  const [showPLN, setShowPLN] = useState<boolean>(false);
  const [showUSD, setShowUSD] = useState<boolean>(false);
  const [showEUR, setShowEUR] = useState<boolean>(false);

  useEffect((): void => {
    const getAccounts = async ()  => {
      getUserAccounts()
        .then(res => {
          if(res != null) {
            setAccounts(res.data);
          }
        })
        .catch(err =>{
          console.log("Error: ",err)
        })
    }

    getAccounts();
  }, []);


  const setCurrency = (currency: string): void => {
    switch (currency) {
      case Currency.PLN:
        setShowPLN(!showPLN);
        break;
      case Currency.EUR:
        setShowEUR(!showEUR);
        break;
      case Currency.USD:
        setShowUSD(!showUSD);
        break;
      default:
        setShowUSD(true);
        setShowPLN(true);
        setShowEUR(true);
    }
  }

  const isChecked = (currency: string): boolean => {
    switch (currency){
      case Currency.PLN:
        return showPLN;
      case Currency.USD:
        return showUSD;
      case Currency.EUR:
        return showEUR;
      default:
        return true;
    }

  }

  return(
    <View>
      <GoBack title={"history"} />
      <View
        className={'w-full flex-row my-5 h-auto justify-center'}
      >
        {accounts &&
          accounts.map((a, index) => (
          <SelectAccount
            key={index}
            title={a.currency}
            checked={isChecked(a.currency)}
            setCurrency={setCurrency}
          />
        ))}
      </View>
    </View>
  )
}
export default History

