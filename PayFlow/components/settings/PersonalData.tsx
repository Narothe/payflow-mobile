/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import GoBackTitle from "../common/GoBackTitle.tsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input.tsx";


const PersonalData = () => {
  const { control, handleSubmit} = useForm();
  const [hasEdit, setHasEdit]=useState(false)


  return(
    <View>
      <GoBackTitle title='personal data' />
      <View className={'items-center my-10 flex-col justify-center '}>
        <Input control={control} name={'firstName'} placeholder={'firstName'} />
        <Input control={control} name={'firstName'} placeholder={'firstName'} />
        <Input control={control} name={'firstName'} placeholder={'firstName'} />
        <Input control={control} name={'firstName'} placeholder={'firstName'} />
        <Input control={control} name={'firstName'} placeholder={'firstName'} />
      </View>
      <View className={'justify-center flex-row gap-x-3  items-center mt-10'}>
        <TouchableOpacity
          className={`py-3 px-6 my-2 rounded ${hasEdit ? 'bg-gray-400' : 'bg-quaternary'} w-1/3 items-center`}
        >
          <Text className={'text-white font-medium'}>Edit </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`py-3 px-6 my-2 rounded ${hasEdit ? 'bg-quaternary' : 'bg-gray-400'} w-1/3 items-center`}
        >
          <Text className={'text-white font-medium'}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default PersonalData
