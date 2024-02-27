import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/logo/payflow.png';
import React, {useState} from 'react';

const PasswordForm = ({navigation, route}: any) => {
  const [password, setPassword] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');
  const [error, setError] = useState(false);

  const submitForm = () => {
    if (password.trim() === passwordRepeated.trim()) {
      navigation.navigate('SignResult', {
        data: route.params.data,
        password: password,
      });
    } else {
      setError(true);
    }
  };

  return (
    <View className={'mx-2 h-full'}>
      <View
        className={
          'my-5 w-full flex-row  items-center justify-between fixed top-0 left-0 '
        }>
        <Image source={Logo} className={'w-48 h-10 '} />
        <TouchableOpacity
          className={'items-center'}
          onPress={() => navigation.navigate('Login')}>
          <Text className={'text-black'}>Back to</Text>
          <Text className={'text-quaternary font-semibold'}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View className={'items-center justify-center h-3/4'}>
        <Text className={'text-black font-semibold text-3xl my-5'}>
          Set password
        </Text>
        <TextInput
          onChangeText={setPassword}
          placeholder={'Password'}
          className={'w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize'}
        />
        <TextInput
          onChangeText={setPasswordRepeated}
          placeholder={'Repeat password'}
          className={'w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize'}
        />
        {error && <Text className={'text-red-500'}>Password are not the same</Text>}
        <TouchableOpacity
          onPress={submitForm}
          className={'py-3 px-6 my-4 rounded bg-quaternary'}>
          <Text className={'text-white'}>ewqeqe</Text>
        </TouchableOpacity>
      </View>
      <View className={'my-5 absolute bottom-0 left-0'}>
        <Text className={'text-quaternary font-semibold text-lg'}>
          The password should have:
        </Text>
        <Text className={'text-black font-semibold capitalize'}>
          • 8 characters
        </Text>
        <Text className={'text-black font-semibold  capitalize'}>
          • large and small liters
        </Text>
        <Text className={'text-black font-semibold  capitalize'}>
          • Digits
        </Text>
        <Text className={'text-black font-semibold capitalize'}>
          • special characters
        </Text>
      </View>
    </View>
  );
};
export default PasswordForm;
