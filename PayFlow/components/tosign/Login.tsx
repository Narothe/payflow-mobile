/* eslint-disable */
import { Image, Text, View, TextInput, TouchableOpacity} from "react-native";
// @ts-ignore
import Logo from '../../assets/logo/payflow.png';
import React, {useState} from "react";
import {storeData} from "../../utils/storage.ts";
import {TOKEN_KEY} from "../../config/authconfig.js";

import { submitLogin } from "../../api/services/ToSign.ts";



const Login = ({navigation}: any) => {

    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')

    const onSubmit = (data: any) => {
      if (!(login.trim() !== '' && password.trim() !== ''))
        return

      const res = submitLogin(login, password)
      res.then(r => {
        console.log(r.data.token)
        storeData('token-payflow', r.data.token).then(r => navigation.navigate('MainScreen'));
      });
      res.catch(err => console.log('wqe'+err));
    }

    return(
        <View className="bg-primary justify-center  items-center flex-1">
            <View className={"h-2/5 w-full  items-center justify-center"}>
                <Image source={Logo} className={"w-4/5 h-20 "} />
            </View>
            <View className={"h-2/5  w-full items-center justify-center gap-y-6 "}>
              <Text className={"text-black font-medium text-3xl my-5"}>Sign in</Text>
              <TextInput
                onChangeText={setLogin}
                placeholder={'Login'}
                className={'w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize'}
              />
              <TextInput
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholder={'Password'}
              className={'w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize'}
            />
              <TouchableOpacity
                className={'bg-tertiary rounded'}
                onPress={onSubmit}
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
