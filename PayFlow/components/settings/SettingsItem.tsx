/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Ionicons from "react-native-vector-icons/AntDesign";

type Props = {
  title: string;
  icon: React.Component
  navName: string;
};

const SettingsItem:React.FC<Props> = ({title,icon, navName}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className={'flex-row justify-between items-center px-2 py-3 bg-primary border-t-2 border-gray-200'}
      onPress={() => navigation.navigate(navName)}
    >
      <View  className={'flex-row items-center justify-center gap-x-2'}>
        {icon}
        <Text className={'text-black font-semibold capitalize'}>{title}</Text>
      </View>
      <Ionicons name={'right'} size={24} color={"#276678"} />
    </TouchableOpacity>
  );
};
export default SettingsItem;
