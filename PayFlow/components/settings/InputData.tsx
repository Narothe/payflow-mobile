/* eslint-disable */

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  data: string;
  hasEdit: boolean;
  setData: Dispatch<SetStateAction<string>>
  submit: () => void
}

const InputData:React.FC<Props> = ({data, hasEdit, setData, submit}) => {

  return(
    <View className={'w-4/5 my-5'}>
      <Text className={'text-quaternary text-lg'}>E-mail</Text>
      <View className={' bg-primary p-5  items-center rounded-lg '}>
        <TextInput
          className={
            'bg-secondary rounded-full py-2 px-6 items-center  pl-4 text-2xl text-quinary '
          }
          placeholder={data}
          placeholderTextColor={!hasEdit ? '#141414' : '#f6f6f6'}
          onChangeText={setData}
          editable={hasEdit}
        />
        <View
          className={'justify-center flex-row gap-x-3  items-center mt-10'}>
          <TouchableOpacity
            onPress={submit}
            className={`py-3 px-6 my-2 rounded ${
              hasEdit ? 'bg-gray-400' : 'bg-quaternary'
            } w-1/3 items-center`}>
            <Text className={'text-white font-medium'}>
              {hasEdit ? 'Save' : 'Edit'}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default InputData
