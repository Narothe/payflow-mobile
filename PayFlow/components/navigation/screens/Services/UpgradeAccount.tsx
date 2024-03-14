import {View} from 'react-native';
import GoBack from '../../../common/GoBack.tsx';
import React, {useEffect, useState} from 'react';
import {UserAccount} from '../../../../types/types.ts';
import {getUserAccounts} from '../../../../api/services/Account.ts';
import AccountTypeCard from '../../../common/AccountTypeCard.tsx';

const UpgradeAccount = () => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(true);
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
  }, [isFocused]);

  return (
    <View>
      <GoBack title={'Upgrade Account'} />
      <View className={'mx-3 justify-center mt-10'}>
        {accounts &&
          accounts
            .sort((a, b) => a.currency.localeCompare(b.currency))
            .map((a, index) => (
              <AccountTypeCard
                key={index}
                props={a}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
              />
            ))}
      </View>
    </View>
  );
};
export default UpgradeAccount;
