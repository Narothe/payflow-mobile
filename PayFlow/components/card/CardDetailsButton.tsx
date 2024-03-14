import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React, { ReactNode } from "react";

interface ActivateCardProps {
  title: string;
  logo: ReactNode;
}
export const CardDetailsButton: React.FC<ActivateCardProps> = ({
  title,
  logo,
}): JSX.Element => {
  return(
    <TouchableOpacity
      className={'w-26 h-auto m-3 items-center'}
    >
      <View className={'rounded-full mb-1 bg-quaternary p-2'}>{logo}</View>
      <Text className={'font-bold text-quinary text-sm text-center'}>{title}</Text>
    </TouchableOpacity>
  );
}
