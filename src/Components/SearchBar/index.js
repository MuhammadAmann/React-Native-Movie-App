/* eslint-disable prettier/prettier */

import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const SearchBar = ({onCencelPress, value, onChangeText}) => {
  return (
    <View style={styles.searchViewStyle}>
      <TextInput
        style={styles.searchBarStyle}
        placeholder="Search here..."
        placeholderTextColor="grey"
        value={value}
        onChangeText={onChangeText}
      />
      <Icon
        name="circle-with-cross"
        type={IconType.Entypo}
        color="grey"
        size={18}
        onPress={onCencelPress}
      />
    </View>
  );
};

export default SearchBar;
