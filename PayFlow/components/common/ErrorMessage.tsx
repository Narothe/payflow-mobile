/* eslint-disable */
import { Text } from "react-native";
import { FC } from "react";
interface ErrorInterface {
  text: string;
}

const ErrorMessage:FC<ErrorInterface> = (props) => {

  return(
    <Text className={'text-red-500 text-sm'}>{props.text}</Text>
  )
}
export default ErrorMessage
