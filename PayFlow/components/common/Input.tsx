/* eslint-disable */
import { TextInput } from "react-native";
import { Control,  useController } from "react-hook-form";
import { FC } from "react";
import { InputInterface } from "./types.ts";



const Input:FC<InputInterface> = (props) => {
  const {field } = useController(props)
  return(
    <TextInput
      placeholder={field.name}
      onChangeText={field.onChange}
      className={"w-3/4 h-10  bg-gray-300 rounded-2xl px-3  capitalize"}
    />
  )
}
export default Input
