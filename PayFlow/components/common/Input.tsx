/* eslint-disable */
import { TextInput } from "react-native";
import { useController } from "react-hook-form";
import { FC } from "react";
import { InputInterface } from "../../types/types.ts";

const Input:FC<InputInterface> = (props) => {
  const {field } = useController(props)
  return(
    <TextInput
      placeholder={props.placeholder.substring(0,1).toUpperCase()+props.placeholder.substring(1)}
      onChangeText={field.onChange}
      defaultValue={props.defaultValue}
      className={"w-3/4 h-10  bg-gray-300 rounded-2xl px-3 my-2 capitalize"}
    />
  )
}
export default Input
