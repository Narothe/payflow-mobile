/* eslint-disable */

import React, { useEffect, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { getUserAccounts } from "../../api/services/Account.ts";
import { getTransferById } from "../../api/services/Transfer.ts";
import { StackNavigator, Transfer } from "../../types/types.ts";
import GoBack from "./GoBack.tsx";
import { RouteProp, useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Logo from "./Logo.tsx";
import LogoImg from "../../assets/logo/payflow.png";
import { formatAccountNumber } from "../../utils/formatNumbers.ts";


type TransactionRouteProp = RouteProp<StackNavigator, 'Transaction'>;
interface OpenAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  transferId: number;
}
const Transaction:React.FC<OpenAccountModalProps> = ({ isOpen, onClose , transferId}) => {
  const [data, setData] = useState<Transfer>();
  // const route = useRoute<TransactionRouteProp>();
  // const { id } = route.params;

  useEffect((): void =>{
    const getTransaction = async ()  => {
      getTransferById(transferId)
        .then(res => {
          if(res != null) {
            setData(res.data);
          }
        })
        .catch(err =>{
          console.log("Error: ",err)
        })
    }
    getTransaction()
  },[])

  return(
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-quinary/50">
        <View className="w-11/12 bg-primary p-5 rounded-xl " >
          <View className="items-center justify-between flex-row">
            <View className={'items-center justify-center'}>
              <Image source={LogoImg}  className={'w-28 h-6 '} />
            </View>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={25} color="#000" />
            </TouchableOpacity>
          </View>
          <View className={'mt-3'}>
            <View className={'flex-row'}>
              <View className={'flex-1'}>
                <Text className={'text-sm text-quaternary  capitalize'}>description:</Text>
                <Text className={'text-lg text-quinary text-center font-medium '}>{data?.description}</Text>
              </View>
              <View>
                <View>
                  <Text className={'text-sm text-quaternary capitalize'}>date:</Text>
                  <Text className={'text-base text-quinary text-center font-medium'}>{data?.date}</Text>
                </View>
                <View>
                  <Text className={'text-sm text-quaternary capitalize'}>amount:</Text>
                  <Text className={'text-base text-quinary text-center font-medium'}>{data?.amount}</Text>
                </View>
                <View>
                  <Text className={'text-sm text-quaternary capitalize'}>currency:</Text>
                  <Text className={'text-base text-quinary text-center font-medium'}>{data?.currency}</Text>
                </View>
              </View>
            </View>
            <View>
              <View>
                <Text className={'text-lg text-quaternary capitalize font-medium'}>sender:</Text>
                <Text className={'text-lg text-quinary text-center font-medium capitalize'}>{data?.sender.firstName+ " "+ data?.sender.lastName}</Text>
                <View>
                  <Text className={'text-sm text-quaternary capitalize'}>Address:</Text>
                  <Text className={'text-lg text-quinary text-center font-medium'}>{data?.sender.address.zipCode+ " "+ data?.sender.address.city + ", " + data?.sender.address.country}</Text>
                </View>
                <Text className={'text-sm text-quaternary capitalize '}>account number:</Text>
                <Text className={'text-lg text-quinary text-center font-medium capitalize'}>{formatAccountNumber(data?.sender.accountNumber)}</Text>
              </View>
              <View>
                <Text className={'text-lg text-quaternary capitalize font-medium'}>receiver:</Text>
                <Text className={'text-lg text-quinary text-center font-medium capitalize'}>{data?.receiver.firstName+ " "+ data?.receiver.lastName}</Text>
                <View>
                  <Text className={'text-sm text-quaternary capitalize'}>Address:</Text>
                  <Text className={'text-lg text-quinary text-center font-medium'}>{data?.receiver.address.zipCode+ " "+ data?.receiver.address.city + ", " + data?.receiver.address.country}</Text>
                </View>
                <Text className={'text-sm text-quaternary capitalize '}>account number:</Text>
                <Text className={'text-lg text-quinary text-center font-medium capitalize'}>{formatAccountNumber(data?.receiver.accountNumber)}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default Transaction
