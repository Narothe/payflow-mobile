import { Button, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { DropDown } from "../common/DropDown.tsx";
import React from "react";
import Input from "../common/Input.tsx";

interface ActivateCardModalrops {
  isOpen: boolean;
  onClose: () => void;
}

const ActivateCardModal:  React.FC<ActivateCardModalrops> = ({ isOpen, onClose }) => {
  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-quinary/50">
        <View className="w-4/5 bg-secondary p-5 rounded-xl" >
          <View className="items-end">
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={25} color="#6b43be" />
            </TouchableOpacity>
          </View>
          <TextInput placeholder={'Enter pin'} className={"w-full h-10 bg-gray-300 rounded-2xl px-3 my-2"} />
          <View className={'items-center'}>
          <TouchableOpacity
            // onPress={() => handleOpenAccount() }
            className={'w-3/5 py-3 px-6 my-2 rounded bg-quaternary  items-center'}
          >
            <Text className={'text-white font-medium'}>Open Account </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default ActivateCardModal;
