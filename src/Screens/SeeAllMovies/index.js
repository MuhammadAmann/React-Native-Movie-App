/* eslint-disable prettier/prettier */
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Image} from 'react-native-svg';
import {styles} from './style';
import {getPopularMovies} from '../../ApiServices/Axios';
import {useEffect, useState} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

export const SeeAllMoviesScreen = () => {
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.headerViewStyle}>
        <Icon
          name="chevron-back-outline"
          type={IconType.Ionicons}
          color="white"
          size={30}
        />
        <TouchableOpacity>
          <Text style={styles.headerTextStyle}>Upcoming Movies</Text>
        </TouchableOpacity>
        {/* <Icon name="menu" type={IconType.Feather} color="white" size={24} /> */}
      </View>
      <FlatList
        // horizontal
        style={styles.wrapViewStyle}
        showsHorizontalScrollIndicator={false}
        data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.upcomingImageViewStyle}>
            <View style={styles.upcomingdummyViewStyle}></View>
            {/* <Image
                  source={{
                    uri: `${baseUrl}${item.backdrop_path}`,
                  }}
                  style={styles.upcomingImagesStyle}
                /> */}
            <Text style={styles.upcomingMoviesTitleStyle}>
              Title here Title here Title here
            </Text>
          </View>
        )}
      />
    </View>
  );
};
