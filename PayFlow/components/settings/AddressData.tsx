/* eslint-disable */
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import GoBackTitle from "../common/GoBackTitle.tsx";
import InputContact from "./InputContact.tsx";
import InputData from "./InputData.tsx";
import { checkZipCode, isString } from "../../utils/validation.ts";
import { changeAddress } from "../../api/services/UserData.ts";
import { AddressType } from "../../types/enums.ts";
import { Address } from "../../types/types.ts";

const AddressData= ({navigation, route}: any) => {
  const [hasEdit, setHasEdit] = useState(false);
  const [zipCode, setZipCode] = useState(route.params.zipCode);
  const [city, setCity] = useState(route.params.city);
  const [street, setStreet] = useState(route.params.street);
  const [houseNumber, setHouseNumber] = useState(route.params.houseNumber);
  const [apartmentNumber, setApartmentNumber] = useState(route.params.apartmentNumber);
  const [country, setCountry] = useState(route.params.country);
  const [isNotValidData, setIsNotValidData]=useState(false)


  const submitData = () => {
    setHasEdit(!hasEdit);
    if (!hasEdit){
      setZipCode('')
      setCity('')
      setCountry('')
      setStreet('')
      setHouseNumber('')
      setApartmentNumber('')
    }
    if (hasEdit)
      if (checkZipCode(zipCode) && isString(city) && isString(street) && isString(country))
        changeAddress({
          zipCode: zipCode,
          city: city.toLowerCase(),
          street: street.toLowerCase(),
          houseNumber: houseNumber,
          apartmentNumber: apartmentNumber,
          country: country.toLowerCase()
        },
          AddressType.RESIDENTIAL)
      else
        setIsNotValidData(true)
  };


  return(
    <View>
      <GoBackTitle title="home address" />
      <ScrollView className={'w-full '}>
        <View className={'w-11/12 bg-primary mx-4 my-5 rounded py-5  '}>
          <InputData
            title={'zipcode'}
            data={zipCode}
            hasEdit={hasEdit}
            setData={setZipCode}
          />
          <InputData
            title={'city'}
            data={city}
            hasEdit={hasEdit}
            setData={setCity}
          />
          <InputData
            title={'street'}
            data={street}
            hasEdit={hasEdit}
            setData={setStreet}
          />
          <InputData
            title={'house number'}
            data={houseNumber}
            hasEdit={hasEdit}
            setData={setHouseNumber}
          />
          <InputData
            title={'apartment number'}
            data={apartmentNumber}
            hasEdit={hasEdit}
            setData={setApartmentNumber}
          />
          <InputData
            title={'country'}
            data={country}
            hasEdit={hasEdit}
            setData={setCountry}
          />
          {isNotValidData && <Text className={'text-red-500'}>Incorrect data</Text>}
          <View className={'items-center my-2'}>
            <TouchableOpacity
              onPress={submitData}
              className={`py-3 px-6 my-2 rounded ${
                hasEdit ? "bg-gray-400" : "bg-quaternary"
              } w-1/3 items-center`}>
              <Text className={"text-white font-medium"}>
                {hasEdit ? "Save" : "Edit"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
export default AddressData
