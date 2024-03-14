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

interface cardProps {
  accountId: number;
}
const Card:React.FC<cardProps> = ({accountId}) => {
  const [currency, setCurrency] = useState('');
  const [balance, setBalance] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [validDate, setValidDate] = useState('');
  const [cardExist, setCardExist] = useState(false)


  useEffect((): void => {
    (async () => {
      try {
          const card = await getCardByAccountNumber(accountId)
          if(card) {
            setCardExist(true);
            setCurrency(card.data.currency)
            setCardNumber(card.data.cardNumber)
            setBalance(card.data.balance)
            setOwner(card.data.owner)
            setValidDate(card.data.validDate)
          }
      } catch (error) {
        console.log("Error fetching card details:", error);
      }
    })();
  }, []);

  const handleAddCard = async (): Promise<void> => {
    await createCard(accountId);
    setCardExist(true);
  }

  return (
    <View className={'mb-5 w-5/6'}>
      {cardExist ? (
        <><CreditCard cardNumber={cardNumber} owner={owner} currency={currency} validDate={validDate} cvv={""}
                      balance={balance} /><CardDetailsButton title={"Activate"} logo={<MaterialCommunityIcons name={"credit-card-check-outline"} size={20} color={"white"}/> } /></>
      ) : (
        <NewCard onPress={handleAddCard}/>
      )}
    </View>
  );
}
export default Card;
