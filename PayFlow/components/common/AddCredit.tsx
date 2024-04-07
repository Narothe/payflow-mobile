import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoBack from './GoBack.tsx';
import Slider from '@react-native-community/slider';
import SelectAccountList from './SelectAccountList.tsx';
import {UserAccount} from '../../types/types.ts';
import {getUserAccounts} from '../../api/services/Account.ts';
import {checkAmount} from '../../utils/validation.ts';
import {addLoan} from '../../api/services/Credit.ts';
import {useNavigation} from '@react-navigation/native';

const AddCredits = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(1);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState<string>('');
  const interestRate = 2;
  const [accountSelected, setAccountSelected] = useState('');
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [msg, setMsg] = useState('');

  useEffect((): void => {
    const getAccounts = async () => {
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

  useEffect(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + value);

    setDate(d.toLocaleDateString('en-CA'));
  }, [value]);

  const validateData = () => {
    if (!checkAmount(amount)) {
      setMsg('Amount is invalid!');
      return false;
    }
    if (accountSelected === '') {
      setMsg('Select an account!');
      return false;
    }
    return true;
  };

  const addLoanToAccount = () => {
    if (!validateData()) {
      return;
    }
    addLoan(
      accounts.filter(a => a.currency === accountSelected.substring(0, 3))[0]
        .id,
      {
        amount: parseFloat(amount),
        endDate: date,
        interestRate: interestRate,
      },
    )
      .then(res => res && navigation.goBack())
      .catch(er => console.log(er));
  };

  return (
    <View className={'flex-1'}>
      <GoBack title={'Add Credit'} />
      <View className={'bg-primary m-5 p-3 rounded'}>
        <SelectAccountList
          header={'Select account:'}
          setSelected={setAccountSelected}
          accounts={accounts}
        />
        <View className={'items-center'}>
          <Text className={'text-quaternary font-semibold text-base '}>
            Amount:
          </Text>
          <TextInput
            onChangeText={setAmount}
            placeholder={'Amount'}
            className={
              'w-11/12 h-10  bg-gray-200 rounded-xl px-3 my-2 capitalize text-quinary'
            }
          />
        </View>
        <View className={'flex-row items-center my-3'}>
          <Text className={'capitalize text-quaternary font-medium text-base'}>
            loan repayment date:
          </Text>
          <Text className={'text-quinary font-semibold text-base mx-2'}>
            {date.toString()}
          </Text>
        </View>
        <Slider
          className={'w-5/6 h-8'}
          minimumValue={1}
          maximumValue={12}
          minimumTrackTintColor="#6b43be"
          thumbTintColor="#6b43be"
          maximumTrackTintColor="#000000"
          onValueChange={setValue}
          step={1}
        />
        <View className={'flex-row items-center my-3'}>
          <Text className={'capitalize text-quaternary font-medium text-base'}>
            Interest rate:
          </Text>
          <Text className={'text-quinary font-semibold text-base mx-2'}>
            {interestRate}%
          </Text>
        </View>
        <View className={'items-center my-5'}>
          <TouchableOpacity
            className={'bg-quaternary p-3 rounded-sm'}
            onPress={() => addLoanToAccount()}>
            <Text className={'text-primary font-semibold capitalize'}>
              Add credit▶
            </Text>
          </TouchableOpacity>
        </View>
        <View className={'items-center'}>
          <Text className={'capitalize text-red-500 font-semibold '}>
            {msg}
          </Text>
        </View>
      </View>
      <View className={'absolute bottom-5 left-0 right-0 mx-5 '}>
        <Text className={'text-center text-tertiary font-medium'}>
          A loan is a loan of money, granted by a bank. A loan is granted for a
          purpose specified by the customer and the time in which it will be
          repaid in return for a certain percentage. The time in which the loan
          should be repaid is calculated in days, months or years, this depends
          on the length of the loan period.
        </Text>
      </View>
    </View>
  );
};
export default AddCredits;
