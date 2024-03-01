/* eslint-disable */

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  title: string
  data: string;
  hasEdit: boolean;
  setData: Dispatch<SetStateAction<string>>;
  submit?: () => void;
  isNotValid: boolean
}

const InputContact:React.FC<Props> = ({title,data, hasEdit, setData, submit, isNotValid}) => {

  return(
    <View className={'w-5/6 my-2'}>
      <Text className={'text-quaternary text-lg capitalize'}>{title}</Text>
      <View className={' bg-primary px-5 py-4  items-center rounded-lg '}>
        <TextInput
          className={
            'bg-secondary rounded-full py-2 px-6 items-center w-full text-center  pl-4 text-2xl text-quinary '
          }
          placeholder={!hasEdit ? data : ''}
          placeholderTextColor={!hasEdit ? '#141414' : '#f6f6f6'}
          onChangeText={setData}
          editable={hasEdit}
        />
        {isNotValid && <Text className={'text-red-500'}>Invalid value</Text>}
        {submit !== undefined && <View
          className={"justify-center flex-row gap-x-3  items-center mt-5"}>
          <TouchableOpacity
            onPress={submit}
            className={`py-3 px-6 my-2 rounded ${
              !hasEdit ? "bg-gray-400" : "bg-quaternary"
            } w-1/3 items-center`}>
            <Text className={"text-white font-medium"}>
              {hasEdit ? "Save" : "Edit"}{" "}
            </Text>
          </TouchableOpacity>
        </View>}
      </View>
    </View>
  )
}
export default InputContact
