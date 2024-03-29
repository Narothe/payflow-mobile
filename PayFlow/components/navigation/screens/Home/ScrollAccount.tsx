/* eslint-disable */
import { Dimensions, ScrollView, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { getUserAccounts } from "../../../../api/services/Account.ts";
import { AccountsList } from "../../../account/AccountList.tsx";
import { AccountTile } from "../../../account/AccountTile.tsx";
import ScrollDot from "../../../common/ScrollDot.tsx";
import AccountItem from "../../../common/AccountItem.tsx";


const { width: screenWidth } = Dimensions.get('window');
const ELEMENT_WIDTH = screenWidth * 0.8;

const ScrollAccount:React.FC = () => {
  const [accounts, setAccounts] = useState([]);
  const [currentDot, setCurrentDot] = useState(0)
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const scrollViewRef = useRef<ScrollView>(null);


  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    if (offsetX < ELEMENT_WIDTH) {
      setCurrentDot(0);
    } else if (offsetX < 2* ELEMENT_WIDTH) {
      setCurrentDot(1);
    } else if ((offsetX < 3* ELEMENT_WIDTH)){
      setCurrentDot(2);
    }
  };

  useEffect((): void => {
    getAccounts();
  }, []);
  const getAccounts = async ()  => {
    getUserAccounts().then(res => {
      if(res != null) {
        setAccounts(res.data);
      }
    })
      .catch(err =>{
        console.log("Error: ",err)
      })
  }

  return(
    <View
      className={'w-full mx-5 items-center'}
    >
     <View className={'w-11/12 my-5 items-center justify-center'}>
       <ScrollView
         ref={scrollViewRef}
         horizontal
         pagingEnabled
         onScroll={handleScroll}
         className={''}
         showsHorizontalScrollIndicator={false}
       >
         {accounts.map((account, index) => (
           <AccountItem
             key={index}
             account={account}
           />
         ))}
       </ScrollView>
     </View>
      <View className={'h-20 flex-row '}>
        {accounts.map((account, index) => (
          <ScrollDot
            filled={currentDot === index}
            key={index}
          />
        ))}
      </View>
    </View>
  )
}
export default ScrollAccount
