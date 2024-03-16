/* eslint-disable */
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ScrollAccount from "./ScrollAccount.tsx";
import QuickSwitch from "./QuickSwitch.tsx";


export default function(): React.JSX.Element {
  return (
    <View className="flex-1 items-center   ">
      <ScrollAccount />
      <View className={'items-center'}>
        <ScrollView className={'h-full w-11/12'}>
          <QuickSwitch />
        </ScrollView>
      </View>
      <TouchableOpacity
        className={'bg-quaternary p-3 rounded-full absolute bottom-5 right-5 z-10'}
      >
        <Text className={'text-primary font-semibold capitalize'}>new transfer▶</Text>
      </TouchableOpacity>
    </View>
  );
}
