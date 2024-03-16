/* eslint-disable */

import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StackNavigator, UserTransfer } from "../../types/types.ts";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Transaction from "./Transaction.tsx";



const TransactionItem:React.FC<UserTransfer> = (props: UserTransfer) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigator>>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return(
    <TouchableOpacity
      className={'flex-row  h-10 border-[1px] border-quaternary rounded-full items-center  my-1 bg-primary'}
      // onPress={() => navigation.navigate('Transaction',  {id: props.id})}
      onPress={() => setIsModalOpen(true)}
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
            <Text className={'m-0 p-0 text-base text-quinary text-center capitalize '}>{props.isUserSender ? props.receiverFullName : props.senderFullName}</Text>
          </View>
          <View>
            <Text className={' text-[12px] text-quinary text-center'}>Date:</Text>
            <Text className={' text-base text-quinary'}>{props.date}</Text>
          </View>
        </View>
      <Transaction transferId={props.id} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </TouchableOpacity>
  )
}
export default TransactionItem
