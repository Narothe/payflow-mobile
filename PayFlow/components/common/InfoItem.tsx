import {Text, View} from 'react-native';
import React from "react";

interface Props {
  name: string;
  value: string;
}

const InfoItem: React.FC<Props> = ({name, value}) => {
  return (
    <View className={' w-3/4 m-1 '}>
      <Text className={'text-quaternary font-medium  capitalize'}>
        {name}
      </Text>
      <Text className={' bg-primary rounded-full py-2 px-2 capitalize pl-4 text-quinary font-semibold'}>{value}</Text>
    </View>
  );
};
export default InfoItem;
