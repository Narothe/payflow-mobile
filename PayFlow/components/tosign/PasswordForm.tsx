import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import Logo from '../../assets/logo/payflow.png';
import React, {useState} from 'react';
import {checkPasswordStrength} from '../../utils/validation.ts';
import {submitRegister} from '../../api/services/ToSign.ts';
import {getData, storeData} from '../../utils/storage.ts';
import {TOKEN_KEY} from '../../config/authconfig.ts';

const PasswordForm = ({navigation, route}: any) => {
  const [password, setPassword] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');
  const [error, setError] = useState('');

  const submitForm = () => {
    if (!checkPasswordStrength(password)) {
      setError('Try with stronger password');
      return;
    }
    if (password.trim() === passwordRepeated.trim()) {
      const res = submitRegister({
        ...route.params.data,
        accountType: route.params.accountType,
        password: password,
      });
      res.then(r => {
        storeData(TOKEN_KEY, r.data.token);
        navigation.navigate('SignResult', {
          data: route.params.data,
          password: password,
        });
      });
      res.catch(err => console.log(err));
    } else {
      setError('Password are not the same');
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
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={'Password'}
          className={'w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize'}
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={setPasswordRepeated}
          placeholder={'Repeat password'}
          className={'w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize'}
        />
        {error.trim() !== '' && <Text className={'text-red-500'}>{error}</Text>}
        <TouchableOpacity
          onPress={submitForm}
          className={'py-3 px-6 my-4 rounded bg-quaternary'}>
          <Text className={'text-white'}>Dalej</Text>
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
        <Text className={'text-black font-semibold  capitalize'}>• Digits</Text>
        <Text className={'text-black font-semibold capitalize'}>
          • special characters
        </Text>
      </View>
    </View>
  );
};
export default PasswordForm;
