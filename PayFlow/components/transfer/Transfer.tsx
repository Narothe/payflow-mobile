import { Text, TextInput, TouchableOpacity, View } from "react-native";
import GoBack from "../common/GoBack.tsx";
import SelectAccountList from "../common/SelectAccountList.tsx";
import { useEffect, useState } from "react";
import { getUserAccounts } from "../../api/services/Account.ts";
import { UserAccount } from "../../types/types.ts";
import { TransferInput } from "../common/TransferInput.tsx";

const Transfer = () => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [selected, setSelected] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');

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

  

  return (
    <View>
      <GoBack title={'Transfer'} />
      <View className={'w-11/12 mx-3 bg-primary mt-3 p-5 rounded-xl'}>
        <SelectAccountList setSelected={setSelected} accounts={accounts} />
        <View className={'items-center'}>
          <Text className={'font-bold text-quaternary mt-3'}>Enter recipient's account number:</Text>
          <TransferInput placeholder={'Account number'} onChange={setRecipientAccount}/>
          <Text className={'font-bold text-quaternary mt-3'}>Enter title:</Text>
          <TransferInput placeholder={'Title'} onChange={setRecipientAccount}/>
          <Text className={'font-bold text-quaternary mt-3'}>Enter amount:</Text>
          <TransferInput placeholder={'Amount'} onChange={setRecipientAccount}/>
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
