import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
}

const GoBackTitle: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      className={
        'flex-row items-center justify-center relative py-3 px-4 bg-primary'
      }>
      <TouchableOpacity
        className={'absolute left-2'}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'arrowleft'} size={26} color={'#141414'} />
      </TouchableOpacity>
      <Text className={'text-2xl text-quinary font-bold capitalize'}>
        {title}
      </Text>
    </View>
  );
};
export default GoBackTitle;
