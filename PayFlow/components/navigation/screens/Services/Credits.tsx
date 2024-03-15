/* eslint-disable */


import { Text, TouchableOpacity, View } from "react-native";
import GoBack from "../../../common/GoBack.tsx";
import React from "react";
import AddCredits from "../../../common/AddCredit.tsx";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigator } from "../../../../types/types.ts";


const Credits = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigator>>()


  return(
    <View className={'flex-1'} >
      <GoBack title={Credits.name} />
      <View className={'items-center justify-center flex-1'}>
        {2 <= 1 ?
          <View>
            <Text>sad</Text>
          </View>
          :
          <View className={'items-center justify-center flex-1'}>
            <Text className={'text-2xl text-tertiary font-medium'}>Its empty :)</Text>
          </View>
        }
      </View>
      <TouchableOpacity
        className={'bg-quaternary p-3 rounded-full absolute bottom-10 right-5 z-10'}
        onPress={() => navigation.navigate('AddCredits')}
      >
        <Text className={'text-primary font-semibold capitalize'}>Add credit▶</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Credits
