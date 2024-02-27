/* eslint-disable */
import { TextInput } from "react-native";
import { useController } from "react-hook-form";
import { FC } from "react";
import { InputInterface } from "../../types/types.ts";

const Input:FC<InputInterface> = (props) => {
  const {field } = useController(props)
  return(
    <TextInput
      placeholder={field.name.substring(0,1).toUpperCase()+field.name.substring(1)}
      onChangeText={field.onChange}
      className={"w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize"}
    />
  )
}
export default Input
