/* eslint-disable prettier/prettier */
import {View, Text, Pressable, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import SearchBar from '../../../Components/SearchBar';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../../ApiServices/Axios';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import images from '../../../Assets/images';
// import {SearchBar} from 'react-native-screens';

const SearchScreen = ({navigation, route}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  const [nowPlayingData, setnNowPlayingData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    getNowPlayingMoviesData();
    getUpcomingMoviesData();
    getTopRatedMoviesData();
    getPopularMoviesData();
  }, []);

  const getNowPlayingMoviesData = async () => {
    await getNowPlayingMovies()
      .then(item => {
        setnNowPlayingData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };
  const getUpcomingMoviesData = async () => {
    await getUpcomingMovies()
      .then(item => {
        setUpcomingData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const getTopRatedMoviesData = async () => {
    await getTopRatedMovies()
      .then(item => {
        setTopRatedData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const getPopularMoviesData = async () => {
    await getPopularMovies()
      .then(item => {
        setPopularData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.searchHeaderViewStyle}>
      <Pressable onPress={() => navigation.navigate('UserProfileScreen')}>
            <Image
              source={images.boardingScreenImage}
              style={styles.profileImageStyle}
            />
          </Pressable>
        <SearchBar />
      </View>
      <FlatList
        style={styles.wrapViewStyle}
        showsHorizontalScrollIndicator={false}
        data={upcomingData}
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
