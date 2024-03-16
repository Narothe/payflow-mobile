/* eslint-disable */

import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Loan, UserAccount } from "../../types/types.ts";
import { getAccountDetails } from "../../api/services/Account.ts";
import { formatAccountNumber } from "../../utils/formatNumbers.ts";

type Props = {
  data: Loan
}

export const CreditItem:React.FC<Props> = ({ data }) => {
  const [ac, setAc] = useState<UserAccount>();

  useEffect(() => {
    data.idAccountNumber &&
      getAccountDetails(data.idAccountNumber)
        .then(res => {
          if (res != null){
            setAc(res.data)
          }
        })
        .catch(er => console.log(er))
    calcRestTime()
  }, []);

  const calcRestTime = () => {
    if (data.startDate == null || data.endDate == null)
      return 0
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);

    const rest = endDate.getTime() - startDate.getTime();
    const diffInDays = rest / (1000 * 3600 * 24);
    const currentDate = new Date();
    const diffToCurrentDate = currentDate.getTime() - startDate.getTime();
    const diffToCurrentInDays = diffToCurrentDate / (1000 * 3600 * 24);

    return (diffToCurrentInDays / diffInDays) * 100;
  }

  return(
    <View className={'bg-primary px-5 py-3 rounded my-3'}>
      <View className={'flex-row flex-wrap'}>
        <Text className={'mr-2 text-quaternary font-medium'}>{ac?.currency}</Text>
        <Text className={'text-quinary font-medium'}>{formatAccountNumber(ac?.number)}</Text>
      </View>
      <View className={'flex-row justify-between my-2 flex-wrap'}>
        <View className={'flex-row items-center flex-wrap mr-2'}>
          <Text className={'text-quinary mr-2 font-medium text-base'}>Loaned:</Text>
          <Text className={'text-quaternary font-semibold text-lg'}>{data.amount}</Text>
        </View>
        <View className={'flex-row items-center'}>
          <Text className={'text-quinary mr-2 font-medium  capitalize'}>interest rate:</Text>
          <Text className={'text-quaternary font-semibold text-base'}>{data.interestRate}%</Text>
        </View>
      </View>
      <View className={''}>
        <View className={'flex-row justify-between'}>
          <View className={' items-center'}>
            <Text className={'text-quinary mr-2 font-medium  capitalize'}>start date:</Text>
            <Text className={'text-quaternary font-semibold text-base'}>{data.startDate}</Text>
          </View>
          <View className={' items-center'}>
            <Text className={'text-quinary mr-2 font-medium  capitalize'}>end date:</Text>
            <Text className={'text-quaternary font-semibold text-base'}>{data.endDate}</Text>
          </View>
        </View>
        <View className={'bg-tertiary h-[2px] w-full rounded mt-3'}>
          <View className={`bg-quaternary h-[2px] rounded`} style={{width: `${calcRestTime()}%`}}></View>
        </View>
      </View>
    </View>
  )
}
