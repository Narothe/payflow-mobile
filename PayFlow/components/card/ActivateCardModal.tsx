import { Button, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { DropDown } from "../common/DropDown.tsx";
import React, { useState } from "react";
import Input from "../common/Input.tsx";
import { activateCard } from "../../api/services/Card.ts";

interface ActivateCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardId: number;
}

const ActivateCardModal:  React.FC<ActivateCardModalProps> = ({ isOpen, onClose , cardId}) => {
  const [pin, setPin] = useState('');
  const handleActivateCard = async (): Promise<void> => {
    await activateCard(cardId, pin);
    onClose();
  }

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
          <TextInput
            placeholder={'Enter pin'}
            onChangeText={setPin}
            className={'w-full h-10 bg-gray-300 rounded-2xl px-3 my-2'}
          />
          <View className={'items-center'}>
          <TouchableOpacity
              onPress={() => handleActivateCard()}
            className={'w-3/5 py-3 px-6 my-2 rounded bg-quaternary  items-center'}
          >
            <Text className={'text-white font-medium'}>Activate</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default ActivateCardModal;
