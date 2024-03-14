import { Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React, { ReactNode } from "react";

interface ActivateCardProps {
  title: string;
  logo: ReactNode;
  onPress: () => void
}
export const CardDetailsButton: React.FC<ActivateCardProps> = ({
  title,
  logo,
  onPress
}): JSX.Element => {
  return(
    <TouchableOpacity
      className={'w-26 h-auto m-3 items-center'}
      onPress={onPress}
    >
      <View className={'rounded-full mb-1 bg-quaternary p-2'}>{logo}</View>
      <Text className={'font-bold text-quinary text-sm text-center'}>{title}</Text>
    </TouchableOpacity>
  );
}
