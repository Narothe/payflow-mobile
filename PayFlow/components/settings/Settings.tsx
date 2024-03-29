/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from  'react-native-vector-icons/AntDesign';
import FontAweIcon from  'react-native-vector-icons/FontAwesome';
import FontMateriall from  'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsInfo from  'react-native-vector-icons/Ionicons';
import Material from  'react-native-vector-icons/MaterialIcons';
import React, { useEffect, useState } from "react";
import SettingsItem from "./SettingsItem.tsx";
import GoBack from "../common/GoBack.tsx";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getData } from "../../storage/storage.ts";
import { getUserData } from "../../api/services/UserData.ts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Address, StackNavigator } from "../../types/types.ts";
import PersonalData from "./PersonalData.tsx";
import { AddressType } from "../../types/enums.ts";


const Settings = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigator>>()
  const isFocused = useIsFocused()

  const [data, setData]=useState()
  const [homeAddress, setHomeAddress]=useState<Address>()
  const [correspondenceAddress, setCorrespondenceAddress]=useState<Address>()
  useEffect(() => {
    isFocused &&
      getUserData()
        .then(res => {
          if (res != null){
            setData(res.data)
            setHomeAddress(res.data.residentialAddress)
            setCorrespondenceAddress(res.data.correspondenceAddress)
          }
        })
        .catch(error => {
          console.error('Wystąpił błąd:', error);
        });
  }, [isFocused] );

  return (
    <View className={'w-full bg-gray-200 h-full'}>
      <GoBack title='settings' />
      <View className={''}>
        <Text className={'ml-5 my-2 capitalize font-medium'}>About me</Text>
        <SettingsItem
          title={'personal data'}
          icon={ <IoniconsInfo name={'people-outline'} size={20} color={"#6b43be"} />}
          nav={'PersonalData'}
          data={data}
        />
        <SettingsItem
          title={'contact data'}
          icon={ <Ionicons name={'contacts'} size={20} color={"#6b43be"} />}
          nav={'ContactData'}
          data={data}
        />
        <SettingsItem
          title={'home address'}
          icon={ <FontMateriall name={'home-city-outline'} size={20} color={"#6b43be"} />}
          nav={'HomeAddress'}
          data={{address: {
                  zipCode: homeAddress?.zipCode,
                  city: homeAddress?.city,
                  street: homeAddress?.street,
                  houseNumber: homeAddress?.houseNumber,
                  apartmentNumber: homeAddress?.apartmentNumber,
                  country: homeAddress?.country
                },
                addressType: AddressType.RESIDENTIAL}
          }
        />
        <SettingsItem
          title={'correspondence address'}
          icon={ <FontMateriall name={'city-variant-outline'} size={20} color={"#6b43be"} />}
          nav={'CorrespondenceAddress'}
          data={{address: {
              zipCode: correspondenceAddress?.zipCode,
              city: correspondenceAddress?.city,
              street: correspondenceAddress?.street,
              houseNumber: correspondenceAddress?.houseNumber,
              apartmentNumber: correspondenceAddress?.apartmentNumber,
              country: correspondenceAddress?.country
            }, addressType: AddressType.CORRESPONDENCE}}
        />
        <Text className={'ml-5 my-2 capitalize font-medium'}>other</Text>
        <SettingsItem
          title={'contact'}
          icon={ <FontMateriall name={'contactless-payment-circle-outline'} size={20} color={"#6b43be"} />}
          nav={'ContactUs'}

        />
        <SettingsItem
          title={'about us'}
          icon={ <IoniconsInfo name={'information-circle-outline'} size={20} color={"#6b43be"} />}
          nav={'AboutUs'}
        />
      </View>
      <View className={'justify-center  items-center mt-10'}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className={'py-3 px-6 my-2 rounded bg-quaternary w-1/3 items-center w-2/3'}
        >
          <Text className={'text-white font-medium'}>Wyloguj </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Settings;
