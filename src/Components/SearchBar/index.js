/* eslint-disable prettier/prettier */

import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchViewStyle}>
      <TextInput
        style={styles.searchBarStyle}
        placeholder="Search"
        placeholderTextColor="grey"
      />
      <Icon
        name="circle-with-cross"
        type={IconType.Entypo}
        color="grey"
        size={18}
      />
    </View>
  );
};

export default SearchBar;
