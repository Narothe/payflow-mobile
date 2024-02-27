/* eslint-disable */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Payments from "./screens/ Payments.tsx";
import Home from "./screens/Home.tsx";
import Accounts from "./screens/Accounts.tsx";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Text, View } from "react-native";
import React from "react";

const Tab = createBottomTabNavigator();

const homeName: string = "Home";
const paymentsName: string  = "Payments";
const accountsName: string  = "Accounts";
interface TabLabelProps {
  label: string;
  focused: boolean;
}
const CustomTabLabel: React.FC<TabLabelProps> = ({ label, focused }) => (
  <Text className={focused ? 'text-tertiary' : 'text-black'}>{label}</Text>
);

function Tabs() : React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={homeName}
          component={Home}
          options={{
            tabBarLabel: ({ focused }) =>
              <CustomTabLabel label="Home" focused={focused}/>,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={'home'}
                size={25}
                color={focused ? '#1687A7' : 'gray'}
              />
            )
          }}
        />
        <Tab.Screen
          name={paymentsName}
          component={Payments}
          options={{
            tabBarLabel: ({ focused }) =>
              <CustomTabLabel label="Payments" focused={focused}/>,
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name={'money-bill-transfer'}
                size={25}
                color={focused ? '#1687A7' : 'gray'}
              />
            )
          }}
        />
        <Tab.Screen
          name={accountsName}
          component={Accounts}
          options={{
            tabBarLabel: ({ focused }) =>
              <CustomTabLabel label="Accounts" focused={focused}/>,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name={'account-balance-wallet'}
                size={25}
                color={focused ? '#1687A7' : 'gray'}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Tabs;
