import {Text, TouchableOpacity, View} from 'react-native';
import {AccountType, StackNavigator, UserAccount} from '../../types/types.ts';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {formatAccountNumber} from '../../utils/formatNumbers.ts';
import {changeAccountType} from '../../api/services/Account.ts';

type PropsType = {
  props: UserAccount;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  isFocused: boolean;
};

const AccountTypeCard: React.FC<PropsType> = ({
  props,
  isFocused,
  setIsFocused,
}) => {
  const changeType = () => {
    changeAccountType(
      props.id,
      props.accountNumberType === AccountType.STANDARD
        ? AccountType.INTENSIVE
        : AccountType.STANDARD,
    )
      .then(res => {
        console.log('re');
        if (res != null) {
          setIsFocused(!isFocused);
        }
      })
      .catch(er => {
        console.log(er);
      });
  };

  return (
    <View className={' my-5 bg-primary rounded-full p-5 '}>
      <View className={'flex-row'}>
        <Text className={'text-quaternary font-medium'}>
          {props.currency + ' '}
        </Text>
        <Text className={'text-quinary font-medium'}>
          {formatAccountNumber(props.number)}
        </Text>
      </View>
      <View className={'mt-2 flex-row justify-between'}>
        <View className={'flex-row'}>
          <Text className={'text-quaternary font-medium'}>{'Type: '}</Text>
          <Text className={'text-quinary font-medium'}>
            {props.accountNumberType}
          </Text>
        </View>
        <TouchableOpacity
          className={
            'bg-quaternary rounded-full w-auto h-8 px-2 items-center justify-center'
          }
          onPress={() => changeType()}>
          <Text className={'text-primary font-medium capitalize'}>
            {props.accountNumberType === AccountType.STANDARD
              ? 'change to intensive'
              : 'change to standard'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AccountTypeCard;
