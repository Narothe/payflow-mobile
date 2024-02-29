/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from  'react-native-vector-icons/AntDesign';
import React, { useEffect, useState } from "react";
import SettingsItem from "./SettingsItem.tsx";
import GoBackTitle from "../common/GoBackTitle.tsx";
import { getUserData } from "../../api/services/UserData.ts";
import { useNavigation } from "@react-navigation/native";


const Settings = () => {
  const navigation = useNavigation()
  const [data, setData]=useState({})
  useEffect(() => {
    const res = getUserData();
    res.then(r => {
      // console.log(r.data)
      // setData(r.data)
    })
  }, []);

  return (
    <View className={'w-full bg-gray-200 h-full'}>
      <GoBackTitle title='settings' />
      <View>
        <Text className={'ml-5 my-2 capitalize'}>Your data</Text>
        <SettingsItem
          title={'personal data'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#276678"} />}
          navName={'PersonalData'}
        />
        <SettingsItem
          title={'contact data'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#276678"} />}
          navName={'PersonalData'}
        />
        <SettingsItem
          title={'home address'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#276678"} />}
          navName={'PersonalData'}
        />
        <SettingsItem
          title={'correspondence address'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#276678"} />}
          navName={'PersonalData'}
        />
        <Text className={'ml-5 my-2 capitalize'}>other</Text>
        <SettingsItem
          title={'contact'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#276678"} />}
          navName={'PersonalData'}
        />
        <SettingsItem
          title={'about'}
          icon={ <Ionicons name={'pluscircle'} size={20} color={"#276678"} />}
          navName={'PersonalData'}
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
