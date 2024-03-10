import React from 'react';
import { Text, View } from 'react-native';

interface TextWithLabelProps {
  label: string;
  text: string;
}

const TextWithLabel: React.FC<TextWithLabelProps> = ({ label, text }) => {
  return (
    <View className="w-5/6 p-2 ">
      <Text className="text-xs text-gray-800">{label}</Text>
      <Text className="text-base text-quinary">
        {text}
      </Text>
    </View>
  );
};

export default TextWithLabel;
