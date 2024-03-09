/* eslint-disable */
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { AccountNumberType, Currency } from "../common/types.ts";
import { DropDown } from "../common/DropDown.tsx";
import { getDataFromToken } from "../../config/authconfig.ts";
import { openNewAccount } from "../../api/services/Account.ts";
import { JwtHeader } from "jwt-decode";
import AntDesign from "react-native-vector-icons/AntDesign";

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
  const defaultCurrency: string = Currency[Object.keys(Currency)[0] as keyof typeof Currency].toString();
  const defaultAccountType: string = AccountNumberType[Object.keys(AccountNumberType)[0] as keyof typeof AccountNumberType].toString();
  const [selectedType, setSelectedType] = useState<string>(defaultAccountType);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(defaultCurrency);

  const handleOpenAccount = async ():Promise<void> => {
    await openNewAccount(
      {
        currency: selectedCurrency,
        accountType: selectedType
      }
    )
    onClose();
  };
  const handleCurrencySelect = (value: string ): void => {
    setSelectedCurrency(value);
  };

  const handleAccountTypeSelect = (value: string): void => {
    setSelectedType(value);
  };
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
          <Text className="text-black ">Choose account type:</Text>
          <DropDown options={accountOptions} onSelect={handleAccountTypeSelect}/>
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
