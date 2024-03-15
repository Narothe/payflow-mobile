import {Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {UserAccount} from '../../types/types.ts';
import {SelectList} from 'react-native-dropdown-select-list';

type Props = {
  setSelected: Dispatch<SetStateAction<string>>;
  accounts: UserAccount[];
};
const SelectAccountList: React.FC<Props> = ({setSelected, accounts}) => {
  return (
    <View className={'my-3 mx-4 '}>
      <Text
        className={'text-quaternary font-semibold capitalize text-center mb-2'}>
        Select Account:{' '}
      </Text>
      <SelectList
        setSelected={(val: string) => setSelected(val)}
        data={accounts.map(a => a.currency + ' ' + a.number)}
        save="value"
        search={false}
        inputStyles={{
          fontSize: 14,
          color: 'black',
        }}
        dropdownTextStyles={{
          color: 'black',
        }}
        dropdownStyles={{
          backgroundColor: 'white',
          position: 'absolute',
          top: 40,
          width: '100%',
          zIndex: 999,
        }}
        boxStyles={{
          backgroundColor: 'rgb(229 231 235)',
          borderWidth: 0,
        }}
      />
    </View>
  );
};
export default SelectAccountList;
