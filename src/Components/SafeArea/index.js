import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';

const SafeArea = () => {
  const insets = useSafeAreaInsets();

  return <View style={{marginTop: insets.top}}></View>;
};

export default SafeArea;
