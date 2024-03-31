import GoBack from "../common/GoBack.tsx";
import { Text, TouchableOpacity, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import SelectAccountList from "../common/SelectAccountList.tsx";
import { TransferInput } from "../common/TransferInput.tsx";
import { useEffect, useState } from "react";
import { ExchangeTranser, NormalTransfer, UserAccount } from "../../types/types.ts";
import { getUserAccounts } from "../../api/services/Account.ts";
import { extractAmount } from "../../utils/formatNumbers.ts";
import { exchangeTransfer, sendNormalTransfer } from "../../api/services/Transfer.ts";
import { SuccessAlert } from "../common/SuccessAlert.tsx";
import { DangerAlert } from "../common/DangerAlert.tsx";
import { ExchangeRateTile, ExchangeRateTIle } from "./ExchangeRateTIle.tsx";

const Cantor = () => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [selectedTo, setSelectedTo] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [amount, setAmount] = useState('');

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

  const filteredAccounts = accounts.filter(accounts => accounts.number !== extractAmount(selectedFrom));

  const sendExchange = async (): Promise<void> => {
    const transfer: ExchangeTranser = {
      fromAccount: extractAmount(selectedFrom),
      toAccount: extractAmount(selectedTo),
      amount: amount,
    }
    try {
      console.log(transfer);
      await exchangeTransfer(transfer)
      SuccessAlert({message: 'Exchange successfully'});
    } catch (error) {
      DangerAlert({message: 'Something went wrong, please try again'})
    }
  }

  return (
    <View>
      <FlashMessage position="top" />
      <GoBack title={'Cantor'} />
      <View className={'w-11/12 mx-3 bg-primary mt-3 p-5 rounded-xl'}>
        <SelectAccountList setSelected={setSelectedTo} accounts={accounts} />
        <SelectAccountList setSelected={setSelectedFrom} accounts={filteredAccounts} />
        <View className={'items-center'}>
          <Text className={'font-bold text-quaternary mt-3'}>Enter amount:</Text>
          <TransferInput placeholder={'Amount'} onChange={setAmount}/>
          <TouchableOpacity
            className={'mt-3 bg-quaternary py-2 px-6 rounded-xl items-center'}
            onPress={() => sendExchange()}
          >
            <Text className={'text-primary font-bold'}>Exchange</Text>
          </TouchableOpacity>
          <ExchangeRateTile />
        </View>
      </View>
    </View>
  );
}
export default Cantor;
