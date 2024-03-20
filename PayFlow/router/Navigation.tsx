/* eslint-disable */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../components/tosign/Login.tsx";
import Register from "../components/tosign/Register.tsx";
import PasswordForm from "../components/tosign/PasswordForm.tsx";
import SignResult from "../components/tosign/SignResult.tsx";
import MainScreen from "../components/navigation/MainScreen.tsx";
import Settings from "../components/settings/Settings.tsx";
import PersonalData from "../components/settings/PersonalData.tsx";
import React, { useEffect } from "react";
import { StackNavigator } from "../types/types.ts";
import ContactData from "../components/settings/ContactData.tsx";
import AddressData from "../components/settings/AddressData.tsx";
import AboutUs from "../components/settings/AboutUs.tsx";
import ContactUs from "../components/settings/ContactUs.tsx";
import { AccountDetails } from "../components/account/AccountDetails.tsx";
import History from "../components/navigation/screens/Services/History.tsx";
import Transaction from "../components/common/Transaction.tsx";
import Blik from "../components/common/Blik.tsx";
import UpgradeAccount from "../components/navigation/screens/Services/UpgradeAccount.tsx";
import PhoneTransfer from "../components/navigation/screens/Services/PhoneTransfer.tsx";
import Credits from "../components/navigation/screens/Services/Credits.tsx";
import AddCredits from "../components/common/AddCredit.tsx";
import SplashScreen from 'react-native-splash-screen'
import { Platform } from "react-native";
import Transfer from "../components/transfer/Transfer.tsx";



const Stack = createNativeStackNavigator<StackNavigator>()
const Navigation = () => {

  useEffect(() => {
    if (Platform.OS === 'android')
      SplashScreen.hide();
  }, []);

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordForm"
          component={PasswordForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignResult"
          component={SignResult}
          options={{ headerShown: false }}
        />
        {/*<Stack.Screen*/}
        {/*  name="App"*/}
        {/*  component={App}*/}
        {/*  options={{ headerShown: false }}*/}
        {/*/>*/}
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalData"
          component={PersonalData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactData"
          component={ContactData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeAddress"
          component={AddressData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CorrespondenceAddress"
          component={AddressData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountDetails"
          component={AccountDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Blik"
          component={Blik}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpgradeAccount"
          component={UpgradeAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneTransfer"
          component={PhoneTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Credits"
          component={Credits}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCredits"
          component={AddCredits}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
