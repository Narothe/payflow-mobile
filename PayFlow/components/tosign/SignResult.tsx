import {Image, Text, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import Logo from '../../assets/logo/payflow.png';
import React from 'react';

const SignResult = ({navigation, route}: any) => {
  return (
    <View className={'items-center justify-center h-full mx-3'}>
      <View className={'items-center w-full '}>
        <View className={' w-full  items-center justify-center'}>
          <Image source={Logo} className={'w-4/5 h-20 '} />
        </View>
        <View className={'my-10'}>
          <Text className={'text-xl text-black'}>
            At the address:{' '}
            <Text className={'font-semibold'}>{route.params.data.email}</Text>{' '}
            we sent you the necessary login information, please check your
            mailbox.
          </Text>
        </View>
        <TouchableOpacity
          className={'py-3 px-6 my-4 rounded bg-quaternary'}
          onPress={() => navigation.navigate('Login')}>
          <Text className={'text-white'}>Back to sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignResult;
