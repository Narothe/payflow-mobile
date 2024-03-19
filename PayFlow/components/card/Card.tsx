/* eslint-disable */

import { Text, View } from "react-native";
import { CreditCard } from "./CreditCard.tsx";
import { useEffect, useState } from "react";
import { User } from "../../types/types.ts";
import { getDataFromToken } from "../../config/authconfig.ts";
import { getAccountDetails } from "../../api/services/Account.ts";
import { createCard, getCardByAccountNumber } from "../../api/services/Card.ts";
import { NewCard } from "./AddCardTile.tsx";
import { CardDetailsButton } from "./CardDetailsButton.tsx";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import CardDetails from "./CardDetails.tsx";
import { CardData } from "../common/types.ts";

interface cardProps {
  accountId: number;
}
const Card:React.FC<cardProps> = ({accountId}) => {
  const [cardData, setCardData] = useState<CardData>();
  const [currency, setCurrency] = useState('');
  const [balance, setBalance] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [validDate, setValidDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardExist, setCardExist] = useState(false)

  const fetchCardData = async (): Promise<void> => {
    try {
      const card = await getCardByAccountNumber(accountId);
      if(card) {
        setCardData(card.data);
        setCardExist(true);
        setCurrency(card.data.currency)
        setCardNumber(card.data.cardNumber)
        setBalance(card.data.balance)
        setOwner(card.data.owner)
        setValidDate(card.data.validDate)
        setCvv(card.data.cvv)
      }
    } catch (error) {
      console.log("Error fetching card details:", error);
    }
  };

  useEffect(() => {
    fetchCardData();
  }, [accountId]);

  const handleAddCard = async (): Promise<void> => {
    await createCard(accountId);
    setCardExist(true);
    const card = await getCardByAccountNumber(accountId);
    if (card) {
      setCardData(card.data);
    }
  }
  const handleChange = (): void => {
    fetchCardData();
  }
  const handleCardRemoval = (): void => {
    setCardExist(false);
  }

  return (
    <View className={'mb-5 w-5/6'}>
      {cardExist ? (
        <><CreditCard cardNumber={cardNumber} owner={owner} currency={currency} validDate={validDate} cvv={cvv}
                      balance={balance} /><CardDetails cardData={cardData!}  onCardRemoval={handleCardRemoval} onDetailsChange={handleChange}/></>
      ) : (
        <NewCard onPress={handleAddCard}/>
      )}
    </View>
  );
}
export default Card;
