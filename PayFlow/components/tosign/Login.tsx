/* eslint-disable */
import { Image, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
// @ts-ignore
import Logo from '../../assets/logo/payflow.png';
import axios from 'axios';
import React, {useState} from "react";
import {storeData} from "../../utils/storage.ts";
import {TOKEN_KEY} from "../../config/authconfig.js";
import { BASE_URL } from "../../config/shared";
import { useForm } from 'react-hook-form';
import Input from "../common/Input.tsx";



const Login = ({navigation}: any) => {

  const { control, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
      console.log(data)
        // // TODO validate input
        // console.log(login)
        // console.log(password)
        // // return
        // axios
        //     .post(`${BASE_URL}/api/v1/auth/authenticate`,
        //         {
        //             login: login,
        //             password: password
        //         }
        //     )
        //     .then((response) => {
        //         console.log(response.data)
        //         storeData(TOKEN_KEY, response.data.token).then(r => console.log('token stored'))
        //
        //     })
        //     .catch((error) => console.log(error))
    }

    return(
        <View className="bg-primary justify-center  items-center flex-1">
            <View className={"h-2/5 w-full  items-center justify-center"}>
                <Image source={Logo} className={"w-4/5 h-20 "} />
            </View>
            <View className={"h-2/5  w-full items-center justify-center gap-y-6 "}>
              <Text className={"text-black font-medium text-3xl my-5"}>Sign in</Text>
              <Input
                name="login"
                control={control}
                placeholder={'login'}
                // defaultValue={''}
              />
              <Input
                name="password"
                control={control}
                placeholder={'password'}
                // defaultValue={''}
              />
              <TouchableOpacity
                className={'bg-tertiary rounded'}
                onPress={handleSubmit(onSubmit)}
              >
                <Text className={"px-10 py-2 font-medium text-white"}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <View className={"h-1/5  w-full items-center justify-center flex-row gap-x-1"}>
               <TouchableOpacity
                 className={'flex-row items-center gap-x-1'}
                 onPress={() => navigation.navigate('Register')}
               >
                 <Text className={"text-black font-medium  my-5"}>Not a member?</Text>
                 <Text className={"text-quaternary font-semibold"}>Sign up</Text>
               </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login
