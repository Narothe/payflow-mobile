/* eslint-disable */

import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  title: string
  data: string;
  hasEdit: boolean;
  setData: Dispatch<SetStateAction<string>>
}

const InputData:React.FC<Props> = ({title,data, hasEdit, setData}) => {

  return(
    <View className={'w-full my-2'}>
      <View className={''}>
        <Text className={'text-quaternary text-md ml-4 capitalize'}>{title}</Text>
        <View className={'  px-5   items-center rounded-lg '}>
          <TextInput
            className={
              `border-b-[1px] py-1 px-4 items-center w-full  pl-2 text-lg text-quinary focus:border-quaternary `
            }
            placeholder={!hasEdit ? data: ''}
            // placeholderTextColor={!hasEdit ? '#141414' : '#f6f6f6'}
            onChangeText={setData}
            editable={hasEdit}
          />
        </View>
      </View>
    </View>
  )
}
export default InputData
