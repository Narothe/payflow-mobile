import {Text, View} from 'react-native';
import {CardDetailsButton} from './CardDetailsButton.tsx';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardData} from '../common/types.ts';
import React, {useEffect, useState} from 'react';
import ActivateCardModal from './ActivateCardModal.tsx';
import {blockCard, removeCard, unBlockCard} from '../../api/services/Card.ts';
import card from './Card.tsx';
import ChangeCardPinModal from './ChangePinModal.tsx';
import DeleteCardModal from './DeleteCardModal.tsx';

interface CardDetailsProps {
  cardData: CardData;
  onCardRemoval: () => void;
}
const CardDetails: React.FC<CardDetailsProps> = ({cardData, onCardRemoval}) => {
  const [pin, setPin] = useState('');
  const [isActive, setActive] = useState(false);
  const [isBlocked, setBlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isChangePinModalOpen, setIsChangePinModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setActive(cardData.active);
    setBlocked(cardData.blocked);
    console.log(cardData.blocked);
  }, [cardData]);

  const handleBlockCard = async (): Promise<void> => {
    await blockCard(cardData.id);
  };
  const handleUnblockCard = async (): Promise<void> => {
    await unBlockCard(cardData.id);
  };

  const handleRemoveCard = async (): Promise<void> => {
    await removeCard(cardData.id, pin);
    onCardRemoval();
    setIsModalOpen(false);
  }

  return (
    <View className={'w-full'}>
      {isActive ? (
        <View className={'flex-row justify-between'}>
          {isBlocked ? (
            <CardDetailsButton
              onPress={handleUnblockCard}
              title={'Unblock'}
              logo={
                <MaterialCommunityIcons
                  name={'credit-card-edit'}
                  size={20}
                  color={'white'}
                />
              }
            />
          ) : (
            <CardDetailsButton
              onPress={handleBlockCard}
              title={'Block'}
              logo={
                <MaterialCommunityIcons
                  name={'credit-card-lock'}
                  size={20}
                  color={'white'}
                />
              }
            />
          )}
          <CardDetailsButton
            onPress={() => setIsChangePinModalOpen(true)}
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
          <ChangeCardPinModal
            isOpen={isChangePinModalOpen}
            onClose={() => setIsChangePinModalOpen(false)}
            cardId={cardData.id}
          />
          <DeleteCardModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDelete={handleRemoveCard}
            onPinChange={setPin}
          />
        </View>
      ) : (
        <View>
          <CardDetailsButton
            onPress={() => setIsModalOpen(true)}
            title={'Activate'}
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
            onClose={() => setIsModalOpen(false)}
          />
        </View>
      )}
    </View>
  );
};
export default CardDetails;
