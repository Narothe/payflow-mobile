/* eslint-disable */
import { Text, View } from "react-native";
import GoBackTitle from '../common/GoBackTitle.tsx';
import React, {useState} from 'react';
import InputContact from "./InputContact.tsx";
import { changeEmail, changePhoneNumber } from "../../api/services/UserData.ts";
import { checkEmail, checkPhoneNumber } from "../../utils/validation.ts";

const ContactData = ({navigation, route}: any) => {
  const [hasEdit, setHasEdit] = useState(false);
  const [hasEditPhone, setHasEditPhone] = useState(false);
  const [email, setEmail] = useState(route.params.email);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const submitEmail = () => {
    setHasEdit(!hasEdit);
    if (hasEdit)
      if (checkEmail(email.toLowerCase()) && email.trim() !== route.params.email)
        changeEmail(email.toLowerCase())
      else
        setEmailError(true)
  };

  const submitPhoneNumber = () => {
    setHasEditPhone(!hasEditPhone);
    if (hasEditPhone)
      if (checkPhoneNumber(phoneNumber) && phoneNumber.trim() !== route.params.phoneNumber)
        changePhoneNumber(phoneNumber)
      else
        setPhoneNumberError(true)

  };

  return (
    <View>
      <GoBackTitle title="contact data" />
      <View className={'w-full items-center my-3 '}>
        <InputContact
          title={'e-mail'}
          data={email}
          hasEdit={hasEdit}
          setData={setEmail}
          submit={submitEmail}
          isNotValid={emailError}
        />
        <InputContact
          title={'phone number'}
          data={phoneNumber}
          hasEdit={hasEditPhone}
          setData={setPhoneNumber}
          submit={submitPhoneNumber}
          isNotValid={phoneNumberError}
        />
      </View>
    </View>
  );
};
export default ContactData;
