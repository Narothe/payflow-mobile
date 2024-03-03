/* eslint-disable */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../components/tosign/Login.tsx";
import Register from "../components/tosign/Register.tsx";
import PasswordForm from "../components/tosign/PasswordForm.tsx";
import SignResult from "../components/tosign/SignResult.tsx";
import App from "../App.tsx";
import MainScreen from "../components/navigation/MainScreen.tsx";
import Settings from "../components/settings/Settings.tsx";
import PersonalData from "../components/settings/PersonalData.tsx";
import React from "react";
import { StackNavigator } from "../types/types.ts";
import ContactData from "../components/settings/ContactData.tsx";
import AddressData from "../components/settings/AddressData.tsx";
import AboutUs from "../components/settings/AboutUs.tsx";



const Stack = createNativeStackNavigator<StackNavigator>()
const Navigation = () => {

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigation
