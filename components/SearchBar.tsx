import { View, Image, TextInput } from 'react-native';
import React, { FC } from 'react';
import { icons } from '@/constants/icons';

interface ISearchBarProp {
  placeholder: string;
  onPress: () => void;
}

const SearchBar: FC<ISearchBarProp> = ({ placeholder, onPress }) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;
