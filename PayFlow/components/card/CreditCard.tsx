/* eslint-disable */
import { Animated, Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import chip from '../../assets/imgs/chip.png';
import React, { useRef, useState } from "react";
import { formatBalance, formatCardNumber, formatExpirationDate } from "../../utils/formatNumbers.ts";
import LogoImg from '../../assets/logo/payflow.png';

interface cardProps {
  cardNumber: string;
  owner: string;
  currency: string;
  validDate: string;
  cvv: string;
  balance: number;
}

export const CreditCard: React.FC<cardProps> = ({ cardNumber, owner, currency, validDate, cvv, balance }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const handleFlip = (): void => {
    setIsFlipped(!isFlipped);
    Animated.timing(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <TouchableOpacity className={'w-full h-auto'} onPress={handleFlip}>
      <Animated.View style={[frontAnimatedStyle, { backfaceVisibility: 'hidden' }]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#76dada', '#8f16f1']}
          className="rounded-xl h-40 p-2"
        >
          <View className={'flex-row justify-between p-1'}>
            <Text className={'text-xl text-white'}>{currency}</Text>
            <Text className={'text-xl text-white'}>{formatBalance(balance)}</Text>
          </View>
          <Image source={chip} className={'w-11 h-10'} />
          <Text className={'mt-2 text-xl font-bold text-white'}>{formatCardNumber(cardNumber)}</Text>
          <View className={'flex-row justify-between'}>
            <Text className={'text-white'}>{owner}</Text>
            <Text className={'text-white'}>{formatExpirationDate(validDate)}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
      <Animated.View style={[backAnimatedStyle, { position: 'absolute', backfaceVisibility: 'hidden', width: '100%' }]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#8f16f1', '#76dada']}
          className="rounded-xl h-40 p-2"
        >

          <View className={'flex-1 items-center justify-center p-1'}>
            <Image className={'w-3/5 h-12 rotate-12 '} source={LogoImg}/>
          </View>
          <View>
            <Text className={'text-white text-base'}>{'CVV: '+cvv}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

