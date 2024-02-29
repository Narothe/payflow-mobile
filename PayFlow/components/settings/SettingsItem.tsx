/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Ionicons from "react-native-vector-icons/AntDesign";
import { UserData } from "../../types/types.ts";

type Props = {
  title: string;
  icon: React.Component
  navName: string;
  data: UserData
};

const SettingsItem:React.FC<Props> = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className={'flex-row justify-between items-center px-2 py-3 bg-primary border-t-2 border-gray-200'}
      onPress={() => navigation.navigate(props.navName, {data:props.data})}
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
