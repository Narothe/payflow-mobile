/* eslint-disable */

import { View } from "react-native";
import GoBack from "../../../common/GoBack.tsx";
import React, { useEffect, useState } from "react";
import { getUserAccounts } from "../../../../api/services/Account.ts";
import { User, UserAccount, UserTransfer } from "../../../../types/types.ts";
import SelectAccount from "../../../common/SelectAccount.tsx";
import { Currency } from "../../../common/types.ts";
import TransactionItem from "../../../common/TransactionItem.tsx";
import { getUserTransfers } from "../../../../api/services/Transfer.ts";
import { getDataFromToken } from "../../../../config/authconfig.ts";


const History = () => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [showPLN, setShowPLN] = useState<boolean>(false);
  const [showUSD, setShowUSD] = useState<boolean>(false);
  const [showEUR, setShowEUR] = useState<boolean>(false);
  const [transfers, setTransfers] = useState<UserTransfer[]>([]);
  const [userId, setUserId] = useState<number>(0);

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
    const getTransfers = async ()  => {
      getUserTransfers()
        .then(res => {
          if(res != null) {
            console.log(res.data)
            setTransfers(res.data);
          }
        })
        .catch(err =>{
          console.log("Error: ",err)
        })
    }
    getAccounts();
    getTransfers();
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

  const isUserAccount = (account: number): boolean => {
    return !!account && !!accounts.find(a => a.id === account);
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
      <View>
        {transfers &&
          transfers.map((a, index) => (
              <TransactionItem
                key={index}
                id={a.id}
                date={a.date}
                amount={a.amount}
                currency={a.currency}
                description={a.description}
                senderAccountId={a.senderAccountId}
                senderFullName={a.senderFullName}
                receiverAccountId={a.receiverAccountId}
                receiverFullName={a.receiverFullName}
                isUserSender={isUserAccount(a.senderAccountId)}
              />
            )
          )}
      </View>
    </View>
  )
}
export default History

