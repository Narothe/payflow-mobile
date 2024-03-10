/* eslint-disable */

import { View } from "react-native";
import { CreditCard } from "./CreditCard.tsx";
import { useEffect, useState } from "react";
import { User } from "../../types/types.ts";
import { getDataFromToken } from "../../config/authconfig.ts";
import { getAccountDetails } from "../../api/services/Account.ts";
import { getCardByAccountNumber } from "../../api/services/Card.ts";

interface cardProps {
  accountId: number;
}
const Card:React.FC<cardProps> = ({accountId}) => {
  const [currency, setCurrency] = useState('');
  const [balance, setBalance] = useState(0);
  const [cardNumber, setCardNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [validDate, setValidDate] = useState('');



  useEffect((): void => {
    (async () => {
      try {
          const card = await getCardByAccountNumber(accountId)
          if(card) {
            setCurrency(card.data.currency)
            setCardNumber(card.data.cardNumber)
            setBalance(card.data.balance)
            setOwner(card.data.owner)
            setValidDate(card.data.validDate)
          }
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    })();
  }, []);

  return (
    <View>
      <CreditCard cardNumber={cardNumber} owner={owner} currency={currency} validDate={validDate} cvv={''} balance={balance}/>
    </View>
  );
}
export default Card;
