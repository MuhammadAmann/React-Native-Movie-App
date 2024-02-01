/* eslint-disable prettier/prettier */
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import {styles} from './style';
import {getPopularMovies} from '../../ApiServices/Axios';
import {useEffect, useState} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

export const SeeAllMoviesScreen = ({navigation, route}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const data = route.params;

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
          <Text style={styles.headerTextStyle}>All Movies</Text>
        </TouchableOpacity>
        {/* <Icon name="menu" type={IconType.Feather} color="white" size={24} /> */}
      </View>
      <FlatList
        style={styles.wrapViewStyle}
        showsHorizontalScrollIndicator={false}
        data={data}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('MovieDetailScreen', {item})}
            style={styles.seeAllImagesStyle}>
            <Image
              style={styles.upcomingImageViewStyle}
              source={{
                uri: `${baseUrl}${item.backdrop_path}`,
              }}
            />

            <Text style={styles.upcomingMoviesTitleStyle}>
              {item.original_title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};
