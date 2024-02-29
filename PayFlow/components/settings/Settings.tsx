/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from  'react-native-vector-icons/AntDesign';
import React, { useEffect, useState } from "react";
import SettingsItem from "./SettingsItem.tsx";
import GoBackTitle from "../common/GoBackTitle.tsx";
import { useNavigation } from "@react-navigation/native";
import { getData } from "../../utils/storage.ts";
import { getUserData } from "../../api/services/UserData.ts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../types/types.ts";
import PersonalData from "./PersonalData.tsx";


const Settings = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigator>>()

  const [data, setData]=useState()
  useEffect(() => {

    getUserData()
      .then(res => {
        if (res != null){
          setData(res.data)
        }
      })
      .catch(error => {
        console.error('Wystąpił błąd:', error);
      });
  }, [] );

  return (
    <View className={'w-full bg-gray-200 h-full'}>
      <GoBackTitle title='settings' />
      <View className={''}>
        <Text className={'ml-5 my-2 capitalize font-medium'}>About you</Text>
        <SettingsItem
          title={'personal data'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#6b43be"} />}
          nav={'PersonalData'}
          data={data}
        />
        <SettingsItem
          title={'contact data'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#6b43be"} />}
          nav={'PersonalData'}
          data={data}
        />
        <SettingsItem
          title={'home address'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#6b43be"} />}
          nav={'PersonalData'}
          data={data}
        />
        <SettingsItem
          title={'correspondence address'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#6b43be"} />}
          nav={'PersonalData'}
          data={data}
        />
        <Text className={'ml-5 my-2 capitalize font-medium'}>other</Text>
        <SettingsItem
          title={'contact'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#6b43be"} />}
          nav={'PersonalData'}

        />
        <SettingsItem
          title={'about us'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#6b43be"} />}
          nav={'PersonalData'}
        />
      </View>
      <View className={'justify-center  items-center mt-10'}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className={'py-3 px-6 my-2 rounded bg-quaternary w-1/3 items-center'}
        >
          <Text className={'text-white font-medium'}>Wyloguj </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Settings;
