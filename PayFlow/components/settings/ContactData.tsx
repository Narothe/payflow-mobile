/* eslint-disable */
import {View} from 'react-native';
import GoBackTitle from '../common/GoBackTitle.tsx';
import React, {useState} from 'react';
import InputContact from "./InputContact.tsx";
import { changeEmail } from "../../api/services/UserData.ts";
import { checkEmail } from "../../utils/validation.ts";

const ContactData = ({navigation, route}: any) => {
  const [hasEdit, setHasEdit] = useState(false);
  const [hasEditPhone, setHasEditPhone] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // TODO submits
  const submitEmail = () => {
    setHasEdit(!hasEdit);
    if (hasEdit && checkEmail(email))
      changeEmail(email)
  };

  const submitPhoneNumber = () => {
    setHasEditPhone(!hasEditPhone);
    if (hasEditPhone)
      console.log(phoneNumber);
  };

  return (
    <View>
      <GoBackTitle title="contact data" />
      <View className={'w-full items-center my-3 '}>
        <InputContact
          title={'e-mail'}
          data={route.params.data.email}
          hasEdit={hasEdit}
          setData={setEmail}
          submit={submitEmail}
        />
        <InputContact
          title={'phone number'}
          data={route.params.data.phoneNumber}
          hasEdit={hasEditPhone}
          setData={setPhoneNumber}
          submit={submitPhoneNumber}
        />
      </View>
    </View>
  );
};
export default ContactData;
