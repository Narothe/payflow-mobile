/* eslint-disable */


import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import GoBack from "../../../common/GoBack.tsx";
import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Loan, StackNavigator } from "../../../../types/types.ts";
import { CreditItem } from "../../../common/CreditItem.tsx";
import { getUserLoans } from "../../../../api/services/Credit.ts";


const Credits = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigator>>();
  const isFocused = useIsFocused();
  const [loans, setLoans] =useState<Loan[]>([]);

  useEffect(() => {
    isFocused && getUserLoans()
      .then(res => {
        if (res != null){
          setLoans(res.data);
        }
      })
      .catch(er => console.log(er));

  }, [isFocused])

  return(
    <View className={'flex-1'} >
      <GoBack title={Credits.name} />
      <View className={'items-center flex-1'}>
        {loans.length > 0 ?
          <ScrollView
            className={'h-full w-11/12'}
          >
            <View className={' m-5 '}>
              {loans.map((l, index) => (
                  <CreditItem
                    key={index}
                    data={l}
                  />
                )
              )}
            </View>
          </ScrollView>
          :
          <View className={'items-center justify-center flex-1'}>
            <Text className={'text-2xl text-tertiary font-medium'}>Its empty :)</Text>
          </View>
        }
      </View>
      <TouchableOpacity
        className={'bg-quaternary p-3 rounded-full absolute bottom-5 right-5 z-10'}
        onPress={() => navigation.navigate('AddCredits')}
      >
        <Text className={'text-primary font-semibold capitalize'}>Add credit▶</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Credits
