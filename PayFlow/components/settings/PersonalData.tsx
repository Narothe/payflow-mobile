/* eslint-disable */
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import GoBack from "../common/GoBack.tsx";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input.tsx";
import { UserData } from "../../types/types.ts";
import InfoItem from "../common/InfoItem.tsx";

const PersonalData = ( {navigation, route}: any) => {

  return(
    <View className={'bg-secondary h-full'}>
      <GoBack title='personal data' />
      <ScrollView className={'h-full'}>
        <View className={'items-center  flex-col justify-center  '}>
          <View className={'items-center my-4'}>
            <View className={'bg-quaternary w-20 h-20 justify-center items-center rounded-full my-3'}>
              <Text className={'uppercase text-primary text-4xl font-semibold'}>{route.params.firstName.substring(0,1)+route.params.lastName.substring(0,1)}</Text>
            </View>
            <Text className={'capitalize font-medium text-quinary text-xl'}>{route.params.firstName + ' ' + route.params.lastName}</Text>
          </View>
          <InfoItem name={'login'} value={route.params.login} />
          <InfoItem name={'first name'} value={route.params.firstName} />
          <InfoItem name={'last name'} value={route.params.lastName} />
          <InfoItem name={'day of birth'} value={route.params.dateOfBirth} />
          <InfoItem name={'nationality'} value={route.params.firstName} />
        </View>
      </ScrollView>
    </View>
  )
};

export default PersonalData
