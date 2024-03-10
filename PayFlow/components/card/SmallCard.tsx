/* eslint-disable */
import { Image, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import LogoImg from '../../assets/logo/payflow.png';

export const SmallCard = () => {
  return (
    <View className="w-5/12 h-full ">
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#899091', '#1ab9ef']}
        className="rounded-xl h-20 p-2 justify-between"
      >
        <Image source={LogoImg} className="w-3/5 h-6"/>
        <View className="items-center">
          <Text className="text-white">1234...2324</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
