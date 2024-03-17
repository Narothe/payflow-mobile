import { Text, View } from "react-native";
import { CardDetailsButton } from "./CardDetailsButton.tsx";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardData } from "../common/types.ts";
import React, { useEffect, useState } from "react";
import ActivateCardModal from './ActivateCardModal.tsx';

interface CardDetailsProps {
  cardData: CardData;
}
const CardDetails:React.FC<CardDetailsProps> = ({cardData}) => {
  const [isActive, setActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setActive(cardData.active);
  }, []);

  return (
    <View className={'w-full'}>
      {isActive ? (
        <View className={'flex-row justify-between'}>
          <CardDetailsButton
            onPress={() => setIsModalOpen(true)}
            title={'Block'}
            logo={
              <MaterialCommunityIcons
                name={'credit-card-lock'}
                size={20}
                color={'white'}
              />
            }
          />
          <CardDetailsButton
            onPress={() => setIsModalOpen(true)}
            title={'Change pin'}
            logo={
              <MaterialCommunityIcons
                name={'credit-card-refresh'}
                size={20}
                color={'white'}
              />
            }
          />
          <CardDetailsButton
            onPress={() => setIsModalOpen(true)}
            title={'Remove'}
            logo={
              <MaterialCommunityIcons
                name={'credit-card-remove'}
                size={20}
                color={'white'}
              />
            }
          />
        </View>
      ) : (
        <View>
          <CardDetailsButton onPress={() => setIsModalOpen(true)} title={"Activate"}
            logo={
              <MaterialCommunityIcons
                name={'credit-card-check-outline'}
                size={20}
                color={'white'}
              />
            }
          />
          <ActivateCardModal
            cardId={cardData.id}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)} />
        </View>
      )}
    </View>
  );
}
export default CardDetails;
