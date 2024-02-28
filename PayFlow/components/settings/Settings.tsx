/* eslint-disable */
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons name={'settings'} size={30} color={"#000"} />
      </TouchableOpacity>
      <Text>dsad</Text>
    </View>
  );
};
export default Settings;
