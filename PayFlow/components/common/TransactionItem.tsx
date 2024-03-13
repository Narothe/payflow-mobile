/* eslint-disable */

import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { User, UserTransfer} from "../../types/types.ts";



const TransactionItem:React.FC<UserTransfer> = (props: UserTransfer) => {
  console.log(props.isUserSender)
  return(
    <TouchableOpacity
      className={'flex-row  h-10 border-[1px] border-quaternary rounded-full items-center mx-2 my-1 bg-primary'}
    >
        <View className={'bg-quaternary h-10 w-10 rounded-full justify-center items-center'}>
          <Text className={' text-3xl text-quinary'}>{props.isUserSender ? '-' : '+'}</Text>
        </View>
        <View className={'justify-between flex-row w-10/12 px-2 items-center'}>
          <View>
            <Text className={' text-[12px] text-quinary text-center'}>Amount:</Text>
            <Text className={' text-base text-quinary'}>{props.amount+ " " + props.currency}</Text>
          </View>
          <View className={'flex-1'}>
            <Text className={' m-0 p-0 text-[12px] text-quinary text-center'}>{props.isUserSender ? 'To:' : 'From:'}</Text>
            <Text className={'m-0 p-0 text-base text-quinary text-center capitalize'}>{props.isUserSender ? props.receiverFullName : props.senderFullName}</Text>
          </View>
          <View>
            <Text className={' text-[12px] text-quinary text-center'}>Date:</Text>
            <Text className={' text-base text-quinary'}>{props.date}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}
export default TransactionItem
