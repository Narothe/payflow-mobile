/* eslint-disable */
import React, { useState } from "react";
import { Button, Modal, Text, TouchableOpacity, View } from "react-native";
import { AccountNumberType, Currency } from "../common/types.ts";
import { DropDown } from "../common/DropDown.tsx";

interface OpenAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const currencyOptions = Object.keys(Currency).map((key:string) => ({
  label: key,
  value: Currency[key as keyof typeof Currency]
}));
const accountOptions = Object.keys(AccountNumberType).map((key:string) => ({
  label: key,
  value: AccountNumberType[key as keyof typeof AccountNumberType]
}));

export const OpenAccountModal: React.FC<OpenAccountModalProps> = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(Currency.USD);

  const handleOpenAccount = () => {
    if (selectedType && selectedCurrency) {
      onClose();
    } else {
    }
  };
  const handleCurrencySelect = (value: string | number) => {
    console.log('Wybrana waluta:', value);
  };
  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-quinary/50">
        <View className="w-4/5 bg-secondary p-5 rounded-xl" >
          <Text className="text-black ">Choose account type:</Text>
          <DropDown options={accountOptions} onSelect={handleCurrencySelect}/>
          <Text className="text-black pt-3">Choose currency:</Text>
          <DropDown options={currencyOptions} onSelect={handleCurrencySelect}/>
          <View className={'justify-center mt-4 items-center'}>
            <TouchableOpacity
              onPress={() => handleOpenAccount() }
              className={'py-3 px-6 my-2 rounded bg-quaternary  items-center'}
            >
              <Text className={'text-white font-medium'}>Open Account </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
