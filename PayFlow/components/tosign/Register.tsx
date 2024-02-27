/* eslint-disable */
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import Logo from '../../assets/logo/payflow.png';
import React, { useState } from "react";
import Input from "../common/Input.tsx";
import { useForm } from "react-hook-form";
// @ts-ignore
import Standard from '../../assets/imgs/banking.png'
// @ts-ignore
import Intensive from '../../assets/imgs/debit-card.png'


const INTENSIVE = 'INTENSIVE';
const STANDARD = 'STANDARD';
const Register = ({navigation} : any) => {
  const [accountType, setAccountType]=useState(STANDARD)
  const { control, handleSubmit} = useForm();


  const onSubmit = (data: any) => {
    console.log(data)
  }
    return(
        <View className=" mx-2">
          <View className={"my-5 w-full flex-row  items-center justify-between fixed top-0 left-0"}>
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
            <View className={'w-full items-center'}>
              <View className={'items-center mb-5'}>
                <Text className={'text-4xl text-black my-2'}>Sign up</Text>
                <Text className={' text-black my-2 text-lg'}>Fill the form to create an account</Text>
              </View>
              <View className={'gap-y-2 items-center'}>
                <Text>Select type of an account:</Text>
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
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
              <Input control={control} name={'imię'} />
            </View>
          </ScrollView>
        </View>
    )
};
export default Register;
