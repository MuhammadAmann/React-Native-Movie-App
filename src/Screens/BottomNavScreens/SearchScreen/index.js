/* eslint-disable prettier/prettier */
import {View, Text, Pressable, Image, FlatList} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {styles} from './style';
import SearchBar from '../../../Components/SearchBar';
import {getUpcomingMovies} from '../../../ApiServices/Axios';
import images from '../../../Assets/images';

const SearchScreen = ({navigation, route}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  const [upcomingData, setUpcomingData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUpcomingMovies()
      .then(item => {
        setUpcomingData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  }, []);

  const searchFiltered = useMemo(() => {
    if (!search) {
      return upcomingData;
    } else {
      return upcomingData.filter(item => {
        return (
          item.original_title.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
      });
    }
  }, [search, upcomingData]);
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.searchHeaderViewStyle}>
        <Pressable onPress={() => navigation.navigate('UserProfileScreen')}>
          <Image
            source={images.boardingScreenImage}
            style={styles.profileImageStyle}
          />
        </Pressable>
        <SearchBar
          value={search}
          onChangeText={txt => {
            setSearch(txt);
          }}
          onCencelPress={() => {
            {
              search == '' ? null : setSearch('');
            }
          }}
        />
      </View>
      <FlatList
        style={styles.wrapViewStyle}
        showsHorizontalScrollIndicator={false}
        data={searchFiltered}
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

export default SearchScreen;
