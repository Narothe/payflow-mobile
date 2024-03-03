import {Image, View} from 'react-native';
import React from 'react';
import LogoImg from '../../assets/logo/payflow.png';
const Logo = () => {
  return (
    <View className={'my-4 w-full  items-center justify-center'}>
      <Image source={LogoImg} className={'w-4/5 h-20 '} />
    </View>
  );
};
export default Logo;
