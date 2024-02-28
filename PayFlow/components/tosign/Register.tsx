/* eslint-disable */
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import Logo from '../../assets/logo/payflow.png';
import React, { useState } from "react";
import Input from "../common/Input.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
// @ts-ignore
import Standard from '../../assets/imgs/banking.png'
// @ts-ignore
import Intensive from '../../assets/imgs/debit-card.png'
import {
  checkDateFormat,
  checkEmail,
  checkHomeNumber,
  checkPhoneNumber,
  checkZipCode,
  isString
} from "../../utils/validation.ts";

interface FormDataInterface {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
  city: string;
  street: string;
  homeNumber: string;
  apartmentNumber: string;
  countryAddress: string;
  zipCodeCorrespondence: string;
  cityCorrespondence: string;
  streetCorrespondence: string;
  homeNumberCorrespondence: string;
  apartmentNumberCorrespondence: string;
  countryAddressCorrespondence: string;

}

const INTENSIVE = 'INTENSIVE';
const STANDARD = 'STANDARD';
const Register = ({navigation} : any) => {
  const [accountType, setAccountType]=useState(STANDARD)
  const { control, handleSubmit} = useForm();
  const [error, setError]=useState('')


  const validate = (data: FormDataInterface) => {
    if(!isString(data.firstName)){
      setError('Given first name is wrong')
      return false
    }
    if(!isString(data.lastName)){
      setError('Given last name is wrong')
      return false
    }
    if(!checkDateFormat(data.dateOfBirth)){
      setError('Given day of birth is wrong')
      return false
    }
    if(!isString(data.nationality)) {
      setError('Given nationality is wrong')
      return false
    }
    if( !checkEmail(data.email)) {
      setError('Given e-mail is wrong')
      return false
    }
    if (!checkPhoneNumber(data.phoneNumber)){
      setError('Given phone number is wrong')
      return false
    }
    if (!checkZipCode(data.zipCode)) {
      setError("Given zip code in home address is wrong");
      return false
    }
    if (!isString(data.city)) {
      setError("Given city in home address is wrong");
      return false
    }
    if (!checkHomeNumber(data.homeNumber)) {
      setError("Given home number in home address is wrong");
      return false
    }
    if ( !isString(data.countryAddress)) {
      setError("Given country in home address is wrong");
      return false
    }
    if (!checkZipCode(data.zipCodeCorrespondence)) {
      setError("Given zip code in correspondence address is wrong");
      return false
    }
    if (!isString(data.cityCorrespondence)) {
      setError("Given city in correspondence address is wrong");
      return false
    }
    if (!checkHomeNumber(data.homeNumberCorrespondence)) {
      setError("Given home number in correspondence address is wrong");
      return false
    }
    if (!isString(data.countryAddressCorrespondence)) {
      setError("Given country in correspondence address is wrong");
      return false
    }
   return true
  }

  const onSubmit = (data: any) => {
    if (error.trim() === '')
      setError('')
    if (!validate(data))
      return
    console.log(data)
    navigation.navigate('PasswordForm', {data: data, accountType: accountType})
  }

  return(
        <View className=" mx-2">
          <View className={"my-5 w-full flex-row  items-center justify-between fixed top-0 left-0 "}>
            <Image source={Logo} className={"w-48 h-10 "} />
            <TouchableOpacity
              className={"items-center"}
              onPress={() => navigation.navigate('Login')}
            >
              <Text className={"text-black"}>Back to</Text>
              <Text className={"text-quaternary font-semibold"}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <ScrollView className={'w-full'}>
            <View className={'w-full items-center pb-20'}>
              <View className={'items-center mb-5'}>
                <Text className={'text-4xl text-black my-2 font-semibold '}>Sign up</Text>
                <Text className={' text-black my-2 text-lg'}>Fill the form to create an account</Text>
              </View>
              <View className={'gap-y-2 items-center my-2 '}>
                <Text className={'text-quaternary font-semibold mt-5 text-lg'}>Select type of an account:</Text>
                <View className={'flex-row gap-x-10'}>
                  <TouchableOpacity
                    onPress={() => setAccountType(STANDARD)}
                    style={ accountType === STANDARD && {borderColor: '#276678'}}
                    className={'border-2 border-gray-400 p-4 rounded'}
                  >
                    <Image source={Standard} className={'w-20 h-20'}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setAccountType(INTENSIVE)}
                    className={'border-2 border-gray-400 p-4 rounded'}
                    style={ accountType === INTENSIVE && {borderColor: '#276678'}}
                  >
                    <Image source={Intensive} className={'w-20 h-20'}/>
                  </TouchableOpacity>

                </View>
              </View>
              <View className={'w-full my-2 items-center'}>
                <Text className={'text-quaternary font-semibold mt-5 text-lg'}>Personal data</Text>
                <Input control={control} name={'firstName'} placeholder={'first name'} />
                <Input control={control} name={'lastName'} placeholder={'last name'} />
                <Input control={control} name={'dateOfBirth'} placeholder={'day of birth'} />
                <Text className={'w-3/4 ml-5 text-quaternary font-medium  text-xs p-0'}>Format: yyyy-MM-dd</Text>
                <Input control={control} name={'nationality'} placeholder={'nationality'} />
                <Input control={control} name={'email'} placeholder={'e-mail'} />
                <Input control={control} name={'phoneNumber'} placeholder={'phone number'} />
                <Text className={'text-quaternary font-semibold mt-5 text-lg'}>Home address</Text>
                <Input control={control} name={'zipCode'} placeholder={'zip code'}/>
                <Text className={'w-3/4 ml-5 text-quaternary font-medium  text-xs p-0'}>Format: XX-XXX</Text>
                <Input control={control} name={'city'} placeholder={'city'} />
                <Input control={control} name={'street'}  placeholder={'street'}/>
                <Input control={control} name={'homeNumber'} placeholder={'house number'} />
                <Input control={control} name={'apartmentNumber'} placeholder={'apartment number'} />
                <Input control={control} name={'countryAddress'} placeholder={'country'}/>
                <Text className={'text-quaternary font-semibold mt-5 text-lg'}>Correspondence address</Text>
                <Input control={control} name={'zipCodeCorrespondence'} placeholder={'zip code'}/>
                <Text className={'w-3/4 ml-5 text-quaternary font-medium  text-xs p-0'}>Format: XX-XXX</Text>
                <Input control={control} name={'cityCorrespondence'} placeholder={'city'} />
                <Input control={control} name={'streetCorrespondence'}  placeholder={'street'}/>
                <Input control={control} name={'homeNumberCorrespondence'} placeholder={'house number'} />
                <Input control={control} name={'apartmentNumberCorrespondence'} placeholder={'apartment number'} />
                <Input control={control} name={'countryAddressCorrespondence'} placeholder={'country'}/>
                {error.trim() !== '' && <Text className={'text-red-500'}>{error}</Text>}
                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  className={'py-3 px-6 my-2 rounded bg-quaternary'}
                >
                  <Text className={'text-white'}>Dalej </Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </View>
    )
};
export default Register;
