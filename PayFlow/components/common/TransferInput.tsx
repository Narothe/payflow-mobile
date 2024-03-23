import { TextInput } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
interface TransferInputProps {
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
}
export const TransferInput: React.FC<TransferInputProps> = ({
  placeholder,
  onChange,
}) => {
  return (
    <TextInput
      className={
        'w-11/12 h-10  bg-gray-200 rounded-xl px-3 my-2 capitalize text-quinary'
      }
      placeholder={placeholder}
      onChangeText={onChange}
    />
  );
}
