import { Text, View } from "react-native";
import { CardDetailsButton } from "./CardDetailsButton.tsx";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CardData } from "../common/types.ts";
import React, { useEffect, useState } from "react";

interface CardDetailsProps {
  cardData: CardData;
}
const CardDetails:React.FC<CardDetailsProps> = ({cardData}) => {
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setActive(cardData.active);
  }, []);

  return (
    <View className={'w-full'}>
      {isActive ? (
        <Text>Aktywna</Text>
      ) : (
        <CardDetailsButton title={"Activate"} logo={<MaterialCommunityIcons name={"credit-card-check-outline"} size={20} color={"white"}/> } />
      )}
    </View>
  );
}
export default CardDetails;
