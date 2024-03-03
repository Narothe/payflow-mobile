/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { ReactElement } from "react";
import Ionicons from "react-native-vector-icons/AntDesign";
import { StackNavigator, UserData } from "../../types/types.ts";
import { Icon } from "react-native-vector-icons/Icon";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type Props = {
  title: string;
  icon: ReactElement<Icon>
  nav: string;
  data?: any
};

const SettingsItem:React.FC<Props> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigator>>()
  return (
    <TouchableOpacity
      className={'flex-row justify-between items-center px-2 py-3 bg-primary border-t-2 border-gray-200'}
      onPress={() => navigation.navigate(props.nav, props.data)}
    >
      <View  className={'flex-row items-center justify-center gap-x-2'}>
        {props.icon}
        <Text className={'text-black font-semibold capitalize'}>{props.title}</Text>
      </View>
      <Ionicons name={'right'} size={24} color={"#6b43be"} />
    </TouchableOpacity>
  );
};
export default SettingsItem;
