/* eslint-disable */
import { Image, Text, View } from "react-native";
import GoBackTitle from "../common/GoBackTitle.tsx";
// @ts-ignore

import React from "react";
import Logo from "../common/Logo.tsx";

const AboutUs = () => {

  return(
    <View className={'h-full bg-secondary'}>
      <GoBackTitle title={'about us'} />
      <View className={'h-3/4 my-5 mx-3 px-2 items-center bg-primary '}>
        <Logo />
        <Text className={' my-2 text-center text-quinary text-lg font-medium '}>Welcome to PayFlow, your go-to mobile banking solution designed to make managing your finances seamless and secure. Whether you're checking your balance, transferring funds, or paying bills, PayFlow provides you with the tools you need to take control of your money anytime, anywhere.</Text>
        <Text className={' text-center text-quaternary  font-medium '}>At PayFlow, we understand the importance of convenience without compromising on security. That's why we've crafted an intuitive interface coupled with robust encryption technology to safeguard your financial information.</Text>
      </View>
    </View>
  )
}
export default AboutUs
