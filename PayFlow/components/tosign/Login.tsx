/* eslint-disable */
import {Image, Text, View, TextInput, TouchableOpacity} from "react-native";
import Logo from '../../assets/logo/payflow.png';
import axios from 'axios';
import React, {useState} from "react";


const Login = () => {
    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')

    const signIn = () => {
        // TODO validate input
        console.log(login)
        console.log(password)
        return
        // axios
        //     .post('http://localhost:8080/api/v1/auth/authenticate',
        //         {
        //             login: login,
        //             password: password
        //         }
        //     )
        //     .then((response) => {
        //         console.log(response.data)
        //         // localStorage.setItem(TOKEN_KEY, response.data.token)
        //
        //     })
        //     .catch((error) => console.log(error))
    }

    return(
        <View className="bg-primary justify-center  items-center flex-1">
            <View className={"h-2/5 w-full  items-center justify-center"}>
                <Image source={Logo} className={"w-4/5 h-20 "} />
            </View>
            <View className={"h-2/5  w-full items-center justify-center gap-y-6"}>
                <Text className={"text-black font-medium text-3xl my-5"}>Sign in</Text>
                <TextInput
                    placeholder={"Login"}
                    className={"w-3/4 h-10  bg-gray-300 rounded-2xl px-3"}
                    onChangeText={setLogin}
                />
                <TextInput
                    placeholder={"Password"}
                    className={"w-3/4 h-10  bg-gray-300 rounded-2xl px-3"}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    className={'bg-tertiary rounded'}
                    onPress={signIn}
                >
                    <Text className={"px-10 py-2 font-medium text-white"}>Sign</Text>
                </TouchableOpacity>
            </View>
            <View className={"h-1/5  w-full items-center justify-center flex-row gap-x-1"}>
                <Text className={"text-black font-medium  my-5"}>Not a member?</Text>
                <Text className={"text-quaternary font-semibold"}>Sign up</Text>
            </View>
        </View>
    )
}
export default Login
