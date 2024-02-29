/* eslint-disable */


import React from 'react';

import MainScreen from "./components/navigation/MainScreen.tsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/tosign/Login.tsx";
import Settings from "./components/settings/Settings.tsx";
import PersonalData from "./components/settings/PersonalData.tsx";

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<MainScreen/>*/}
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalData"
          component={PersonalData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
