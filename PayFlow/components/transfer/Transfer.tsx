import { Text, TextInput, TouchableOpacity, View } from "react-native";
import GoBack from "../common/GoBack.tsx";
import SelectAccountList from "../common/SelectAccountList.tsx";
import { useEffect, useState } from "react";
import { getUserAccounts } from "../../api/services/Account.ts";
import { NormalTransfer, UserAccount } from "../../types/types.ts";
import { TransferInput } from "../common/TransferInput.tsx";
import { sendNormalTransfer } from "../../api/services/Transfer.ts";
import { extractAmount } from "../../utils/formatNumbers.ts";
import FlashMessage from 'react-native-flash-message';
import { showMessage } from "react-native-flash-message";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";
import { SuccessAlert } from "../common/SuccessAlert.tsx";
import { DangerAlert } from "../common/DangerAlert.tsx";

const Transfer = () => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [selected, setSelected] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');

  useEffect((): void => {
    const getAccounts = async (): Promise<void> => {
      getUserAccounts()
        .then(res => {
          if (res != null) {
            setAccounts(res.data);
          }
        })
        .catch(err => {
          console.log('Error: ', err);
        });
    };
    getAccounts();
  }, []);

  const sendTransfer = async (): Promise<void> => {
    const transfer: NormalTransfer = {
      senderAccountNumber: extractAmount(selected),
      receiverAccountNumber: recipientAccount,
      amount: amount,
      description: title
    }
    try {
      console.log(transfer);
      await sendNormalTransfer(transfer);
      SuccessAlert({message: 'Transfer sent successfully'});
    } catch (error) {
      DangerAlert({message: 'Something went wrong, please try again'})
    }
  }

  return (
    <View>
      <FlashMessage position="top" />
      <GoBack title={'Transfer'} />
      <View className={'w-11/12 mx-3 bg-primary mt-3 p-5 rounded-xl'}>
        <SelectAccountList header={'Select account:'} setSelected={setSelected} accounts={accounts} />
        <View className={'items-center'}>
          <Text className={'font-bold text-quaternary mt-3'}>Enter recipient's account number:</Text>
          <TransferInput placeholder={'Account number'} onChange={setRecipientAccount}/>
          <Text className={'font-bold text-quaternary mt-3'}>Enter title:</Text>
          <TransferInput placeholder={'Title'} onChange={setTitle}/>
          <Text className={'font-bold text-quaternary mt-3'}>Enter amount:</Text>
          <TransferInput placeholder={'Amount'} onChange={setAmount}/>
          <TouchableOpacity
            className={'mt-3 bg-quaternary py-2 px-6 rounded-xl items-center'}
            onPress={() => sendTransfer()}
          >
            <Text className={'text-primary font-bold'}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Transfer;
