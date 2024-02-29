/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import GoBackTitle from "../common/GoBackTitle.tsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input.tsx";
import { UserData } from "../../types/types.ts";
import InfoItem from "../common/InfoItem.tsx";



const PersonalData = ( {navigation, route}: any) => {



  return(
    <View className={'bg-secondary h-full'}>
      <GoBackTitle title='personal data' />
      <View className={'items-center my-10 flex-col justify-center  '}>
        <View className={'items-center my-4'}>
          <View className={'bg-quaternary w-20 h-20 justify-center items-center rounded-full my-3'}>
            <Text className={'uppercase text-primary text-4xl font-semibold'}>{route.params.data.firstName.substring(0,1)+route.params.data.lastName.substring(0,1)}</Text>
          </View>
          <Text className={'capitalize font-medium text-quinary text-xl'}>{route.params.data.firstName + ' ' + route.params.data.lastName}</Text>
        </View>
        <InfoItem name={'login'} value={route.params.data.login} />
        <InfoItem name={'first name'} value={route.params.data.firstName} />
        <InfoItem name={'last name'} value={route.params.data.lastName} />
        <InfoItem name={'day of birth'} value={route.params.data.dateOfBirth} />
        <InfoItem name={'nationality'} value={route.params.data.firstName} />
      </View>
      {/*<View className={'justify-center flex-row gap-x-3  items-center mt-10'}>*/}
      {/*  <TouchableOpacity*/}
      {/*    className={`py-3 px-6 my-2 rounded ${hasEdit ? 'bg-gray-400' : 'bg-quaternary'} w-1/3 items-center`}*/}
      {/*  >*/}
      {/*    <Text className={'text-white font-medium'}>Edit </Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*  <TouchableOpacity*/}
      {/*    className={`py-3 px-6 my-2 rounded ${hasEdit ? 'bg-quaternary' : 'bg-gray-400'} w-1/3 items-center`}*/}
      {/*  >*/}
      {/*    <Text className={'text-white font-medium'}>Save</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</View>*/}
    </View>
  )
};

export default PersonalData
