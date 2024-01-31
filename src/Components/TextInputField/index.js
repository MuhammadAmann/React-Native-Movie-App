/* eslint-disable prettier/prettier */

import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {AppColors} from '../../Assets/colors';

const CustomTextInputField = ({title}) => {
  const [textValue, setTextValue] = useState('');
  return (
    <View style={styles.textInputStyle}>
      <TextInput style={styles.inputfieldStyle}
        placeholder={title}
        placeholderTextColor={AppColors.whiteColor}
        value={textValue}
        onChangeText={(text)=>setTextValue(text)}
      />
    </View>
  );
};

export default CustomTextInputField;
