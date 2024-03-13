import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import GoBack from '../common/GoBack.tsx';
import Logo from '../common/Logo.tsx';
import React from 'react';
// @ts-ignore
import GithubLogo from '../../assets/icons/gh.png';

const ContactUs = () => {
  const authors = [
    {
      name: 'enqer',
      link: 'https://github.com/enqer',
    },
    {
      name: 'fkielbasa',
      link: 'https://github.com/fkielbasa',
    },
    {
      name: 'Narothe',
      link: 'https://github.com/Narothe',
    },
  ];
  return (
    <View className={'h-full bg-secondary'}>
      <GoBack title={'about us'} />
      <View
        className={
          'h-5/6 py-5 mx-0 px-2 items-center bg-secondary justify-between '
        }>
        <Logo />
        {authors.map(a => {
          return (
            <TouchableOpacity
              key={a.link}
              onPress={() => Linking.openURL(a.link)}>
              <Text className={'text-5xl font-bold text-tertiary'}>
                {a.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View className={'w-full h-20 items-center'}>
          <Image source={GithubLogo} className={'w-3/4 h-16 m-0 p-0'} />
          <Text className={'m-0 p-0 '}>
            (Click the author's name to go to the profile)
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ContactUs;
