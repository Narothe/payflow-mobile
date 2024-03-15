/* eslint-disable */

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import GoBack from "../../../common/GoBack.tsx";
import React, { useEffect, useState } from "react";
import { getUserAccounts } from "../../../../api/services/Account.ts";
import { TransferByPhone, UserAccount } from "../../../../types/types.ts";
import { SelectList } from "react-native-dropdown-select-list";
import { checkAmount, checkPhoneNumber } from "../../../../utils/validation.ts";
import { sendTransferByPhone } from "../../../../api/services/Transfer.ts";
import SelectAccountList from "../../../common/SelectAccountList.tsx";

const PhoneTransfer = () => {
  const [selected, setSelected]=useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [msg, setMsg] = useState<string>('')
  const [accounts, setAccounts] = useState<UserAccount[]>([]);

  useEffect((): void => {
    const getAccounts = async () => {
      getUserAccounts()
        .then(res => {
          if (res != null) {
            setAccounts(res.data);
          }
        })
        .catch(err => {
          console.log('Error: ', err);
        });
    };
    getAccounts();
  }, []);

  const validateData = () => {
    if (!checkPhoneNumber(phoneNumber)){
      setMsg('Phone number is invalid!')
      return false;
    }
    if (!checkAmount(amount)){
      setMsg('Amount is invalid!')
      return false;
    }
    if (selected === ''){
      setMsg('Select an account!')
      return false;
    }
    return true;
  }


  const sendTransfer = () => {
    if (!validateData())
      return;
    const data: TransferByPhone = {
      amount: amount,
      description: description,
      phoneNumber: phoneNumber,
      senderId: accounts.filter(a => a.currency === selected.substring(0, 3))[0].id
    }
    console.log(data)
    sendTransferByPhone(data)
      .then(res => setMsg('Transfer sent'))
      .catch(er => console.log(er))
  }




  return(
    <View>
      <GoBack title={"Phone Transfer"} />
      <View className={'mx-3 bg-primary mt-5 p-5 rounded-xl'}>
        <SelectAccountList setSelected={setSelected} accounts={accounts} />
        <View className={'items-center'}>
          <Text className={'text-quaternary font-semibold capitalize'}>Enter recipient's phone number:</Text>
          <TextInput
            onChangeText={setPhoneNumber}
            placeholder={'Phone number'}
            className={'w-11/12 h-10  bg-gray-200 rounded-xl px-3 my-2 capitalize text-quinary'}
          />
        </View>
        <View className={'items-center'}>
          <Text className={'text-quaternary font-semibold '}>Amount:</Text>
          <TextInput
            onChangeText={setAmount}
            placeholder={'Amount'}
            className={'w-11/12 h-10  bg-gray-200 rounded-xl px-3 my-2 capitalize text-quinary'}
          />
        </View>
        <View className={'items-center'}>
          <Text className={'text-quaternary font-semibold '}>Description (optional):</Text>
          <TextInput
            onChangeText={setDescription}
            placeholder={'Description'}
            className={'w-11/12 h-10  bg-gray-200 rounded-xl px-3 my-2 capitalize text-quinary'}
          />
        </View>
        <View className={'items-center my-5'}>
          <TouchableOpacity
            className={'bg-quaternary py-2 px-6 rounded-sm items-center'}
            onPress={() => sendTransfer()}
          >
            <Text className={'text-primary font-semibold capitalize'}>send</Text>
          </TouchableOpacity>
        </View>
        <View className={'items-center'}>
          <Text className={'capitalize text-red-500 font-semibold '}>{msg}</Text>
        </View>
      </View>
    </View>
  )
}
export default PhoneTransfer
