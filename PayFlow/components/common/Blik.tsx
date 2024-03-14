import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import GoBack from './GoBack.tsx';
import BlikLogo from '../../assets/icons/blik.png';
import {getBlikCode} from '../../api/services/Blik.ts';
import {formatBlikNumber} from '../../utils/formatNumbers.ts';

type BlikType = {
  code: string;
  expirationTime: string;
};

const Blik = () => {
  const [blik, setBlik] = useState<BlikType | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const getBlik = () => {
      getBlikCode()
        .then(res => {
          if (res != null) {
            setBlik(res.data);
            const expirationTime = res.data.expirationTime;
            const [hours, minutes, seconds] = expirationTime
              .split(':')
              .map(Number);
            setTimeRemaining(hours * 3600 + minutes * 60 + seconds);
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
    if (timeRemaining <= 0) {
      getBlik();
    }
  }, [timeRemaining]);

  useEffect(() => {
    if (!blik) {
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [blik]);

  const progressWidth = (timeRemaining / 100) * 200;

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <View>
      <GoBack title={Blik.name} />
      <View
        className={
          ' bg-primary w-full h-full mt-5 border-t-2 border-gray-200 '
        }>
        <View className={' items-center my-10'}>
          <Image source={BlikLogo} className={'w-28 h-14'} />
        </View>
        <View className={'my-10'}>
          <Text className={'text-quinary text-5xl text-center'}>
            {formatBlikNumber(blik?.code)}
          </Text>
        </View>
        <View className={'my-5 items-center'}>
          <View
            style={{width: progressWidth}}
            className={'bg-quaternary h-1 rounded'}
          />
          <Text className={'text-quinary text-3xl text-center mt-5'}>
            {formatTime(timeRemaining)}
          </Text>
        </View>
        <View className={' mx-2 mt-10 items-center'}>
          <Text className={'text-quinary text-center'}>
            BLIK is a payment method that allows you to pay easily and quickly
            in shop and online, plus deposit and withdraw cash. With BLIK, you
            can also settle an instant payment with a friend using just their
            phone number. You do not need a payment card or wallet to pay with
            BLIK.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Blik;
